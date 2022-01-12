import { ToastrModule, ToastrService } from "ngx-toastr";
import { Observable, Subject } from "rxjs";
import { MainAuthService } from "./../../core/services/auth.service";
import { UsersService } from "./../../core/services/users.service";
import { FacebookService } from "./../../core/services/facebook.service";
import { Component, OnInit } from "@angular/core";
import { FacebookProfileModel } from "src/app/core/models/facebook-profile";
import { ClubProfileModel } from "src/app/core/models/club-profile";
import {
  FacebookLoginProvider,
  SocialAuthService,
  SocialUser,
} from "angularx-social-login";
import { NgxSpinnerService } from "ngx-spinner";
import { LoggedInUser } from "@app/core/models/logged-in-user.model";
import { ExtrasModule } from './../../_metronic/partials/layout/extras/extras.module';
import { ChangeDetectorRef } from "@angular/core";
import { ClubService } from './../../core/services/club.service';
import { Club } from './../../core/models/club.model';
import { take, takeUntil } from "rxjs/operators";
import { PickerClubService } from './../../core/services/picker_clubs.service';
@Component({
  selector: "app-account-manager",
  templateUrl: "./account-manager.component.html",
})
export class AccountManagerComponent implements OnInit {

  destroy$ = new Subject();

  public profileImageUrl: string = localStorage.getItem('profileImageUrl')
  public socialUser: SocialUser;
  public signedInUser: LoggedInUser;
  public clubName: string = "";
  private connectedIG: boolean = false;
  public clubLogo: string = "";
  hideBtn: Boolean = false;
  clubId: string;
  public userFBprofile: FacebookProfileModel
  public userClubProfile: ClubProfileModel
  public club: any
  public selectedClub: Club
  socialFlag: boolean = false
  public userExisitngFacebookPages: any[] = []

  constructor(
    private spinner: NgxSpinnerService,
    private authService: SocialAuthService,
    private _facebookService: FacebookService,
    private _profileService: UsersService,
    private _authService: MainAuthService,
    private _toast: ToastrService,
    private cf: ChangeDetectorRef,
    private _clubService: ClubService,
    private _pickerClubService : PickerClubService

  ) {
    this.userFBprofile = new FacebookProfileModel();
    this.userClubProfile = new ClubProfileModel();
  }



  ngOnInit() {
    this._clubService.SelectedClub$.pipe(takeUntil(this.destroy$)).subscribe(club => {
      this.club = club
      this.clubName = this.club.clubName;
      this.clubLogo = this.club.logoURL;
      this.userExisitngFacebookPages = this.club?.FBPages ? this.club?.FBPages : []
      this.getSignedInUser();
      this.set_socialFlag_after_getting_club()
    })
  }

  unLinkFacebookAccount(clubId: string) {
    clubId = this.selectedClub.id;
    this._facebookService.unLinkFacebookPage(clubId).subscribe();
    this.userFBprofile.fbProfileImageUrl = "";
    this.userFBprofile.fbUsername = "";

    this.club.userFacebookProfile = {
      fbUsername:"",
      fbProfileImageUrl:"",
    }

    localStorage.setItem('selectedClub', JSON.stringify(this.club));
    this._toast.success('Account Successfully Removed', 'UnLink Account')
  }

  getSignedInUser() {
    this._authService.getSignedInUser().subscribe((user) => {
      this.signedInUser = user;
      this.setClubProfile();
      this.setFbProfile();
    });
  }


  setFbProfile() {
    let FBprofile = this.club?.userFacebookProfile;
    this.userFBprofile.fbUsername = FBprofile?.fbUsername;
    this.userFBprofile.fbProfileImageUrl = FBprofile?.fbProfileImageUrl;
    this.cf.detectChanges();
  }


  setClubProfile() {
    let userId = localStorage.getItem('clubUid');
    this._clubService.getUserClubProfile(userId).pipe(take(1)).subscribe((data: any) => {
      this.userClubProfile.clubEmail = data.email,
        this.userClubProfile.clubProfileImageURL = data.profilePicURL;
      this.userClubProfile.clubUsername = data.fullName;
      this.cf.detectChanges();
    })

  }


  objectsEqual(o1, o2) {
    return typeof o1 === "object" && Object.keys(o1).length > 0
      ? Object.keys(o1).length === Object.keys(o2).length &&
      Object.keys(o1).every((p) => this.objectsEqual(o1[p], o2[p]))
      : o1 === o2;
  }

  arraysEqual(a1, a2) {
    return (
      a1.length === a2.length &&
      a1.every((o, idx) => this.objectsEqual(o, a2[idx]))
    );
  }

  async signInWithFB() {
    let newFBpages = []
    document.getElementById("signInFB").style.pointerEvents = "none";
    setTimeout(() => {
      document.getElementById("signInFB").style.pointerEvents = "auto";
    }, 4000);
    const fbLoginOptions = {
      scope:
        "pages_show_list , pages_manage_posts , instagram_basic,instagram_content_publish"
    };
    await this.authService
      .signIn(FacebookLoginProvider.PROVIDER_ID, fbLoginOptions)
      .then((socialUser) => {
        this._toast.success("Successfully logged into Facebook");
        this.socialUser = socialUser;
        console.log(this.club.FBuserID = this.socialUser.id);
        this.userFBprofile.fbEmail = this.socialUser.response.email;
        this.userFBprofile.fbUsername = this.socialUser.response.name;
        this.userFBprofile.fbProfileImageUrl = this.socialUser.response.picture.data.url;
        let selectedClub = this.club;
        if(selectedClub) {
          selectedClub.userFacebookProfile = this.userFBprofile;
          localStorage.setItem('selectedClub',JSON.stringify(selectedClub));
        }
        this.cf.detectChanges();
        this.club.userFacebookProfile = Object.assign({}, this.userFBprofile)
        this.getLongLivedFBUserToken(this.socialUser.authToken).subscribe(
          (data) => {
            this.club.FBUserAuthToken = data.access_token;
            this.getFacebookPages(
              this.socialUser.id,
              data.access_token
            ).subscribe((FbPages) => {
              if (FbPages.data.length) {
                FbPages.data.forEach((item) => {
                  let obj = {
                    pageAccessToken: item.access_token,
                    pageID: item.id,
                    pageName: item.name,
                  };
                  newFBpages.push(obj);
                });
              }
              this.findUniqueObjects(this.userExisitngFacebookPages, newFBpages)
              this.updateUserClub(this.club);
              this.setFbProfile();
            });
          }
        );
      })
      .catch((err) => {
        console.log(err, 'err obj')
      });
  }

  findUniqueObjects(existingPages, newPages) {
    let total, uniqueFacebookPages = []
    if (existingPages.length == 0) {
      this.club.FBPages = newPages
      return;
    }
    total = [...existingPages, ...newPages]
    uniqueFacebookPages = total.filter((value, idx, mock) => mock.findIndex((x) => x.pageID === value.pageID) === idx);
    this.club.FBPages = uniqueFacebookPages
    console.log(uniqueFacebookPages)
  }

  signOutOfClub() {
    this._authService.logoutSignedInUser()
  }

  updateUserClub(club) {
    localStorage.setItem(club , JSON.stringify(club))
    if(club.pickerClub){
      club.pickerClubId =  this.selectedClub.id
      this._pickerClubService.updatePickerClub(club).subscribe(data=>{
        console.log(data ,'data')
      }, err=>{console.log(err)})
      return;
    }
    this._clubService.updateClub(club).subscribe(data => {
    })
  }

  set_socialFlag_after_getting_club() {
    this.selectedClub = this.club;
    this.selectedClub.clubName == "Solis Solution" && this.selectedClub.id == "60db0c52723416289b31f1d9" ? this.socialFlag = true : this.socialFlag = false;
  }

  getLongLivedFBUserToken(userToken): Observable<any> {
    return this._facebookService.getLongLivedFBAccessToken(userToken);
  }

  getFacebookPages(id, userToken): Observable<any> {
    return this._facebookService.getFacebookPages(id, userToken);
  }

  updateSignedInUser(user): void {
    ;
    this._profileService.updateUser(user).subscribe(
      (updatedUser) => {
      },
      (error) => {
        console.log(error);
      }
    );
  }

  showIGLoginPopup() {
    this._toast.warning(
      "Sign in via Facebook to connect your Instagram Accounts"
    );
  }

  showIGCommingSoonPopup() {
    this._toast.warning("Comming Soon")
  }

  showFBCommingSoonPopup() {
    this._toast.warning('Comming Soon');
  }

  Club() {
    this._toast.success(
      `You are logged in via ${this.club.clubName} Club`
    );
  }

  ngOnDestroy(): void {
    this.destroy$.complete();
    this.destroy$.unsubscribe();
  }
}
