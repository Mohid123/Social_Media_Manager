import { ToastrModule, ToastrService } from "ngx-toastr";
import { Observable } from "rxjs";
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
import { User } from "src/app/core/models/user.model";
import { ExtrasModule } from './../../_metronic/partials/layout/extras/extras.module';
import { ChangeDetectorRef } from "@angular/core";
import { ClubService } from './../../core/services/club.service';
import { Club } from './../../core/models/club.model';
@Component({
  selector: "app-account-manager",
  templateUrl: "./account-manager.component.html",
})
export class AccountManagerComponent implements OnInit {
  public profileImageUrl: string = localStorage.getItem('profileImageUrl')
  public socialUser: SocialUser;
  public signedInUser: User;
  public clubName: string = "";
  private connectedIG: boolean = false;
  private userFacebookPages: any[] = [];
  public clubLogo: string = "";
  public userFBprofile: FacebookProfileModel
  public userClubProfile: ClubProfileModel
  public club: any
  public selectedClub: Club
  socialFlag: boolean = false

  constructor(
    private spinner: NgxSpinnerService,
    private authService: SocialAuthService,
    private _facebookService: FacebookService,
    private _profileService: UsersService,
    private _authService: MainAuthService,
    private _toast: ToastrService,
    private cf: ChangeDetectorRef,
    private _clubService: ClubService,

  ) {
    this.userFBprofile = new FacebookProfileModel();
    this.userClubProfile = new ClubProfileModel();
  }



  ngOnInit() {
    this.club = JSON.parse(localStorage.getItem('selectedClub'))
    this.clubName = this.club.clubName;
    this.clubLogo = this.club.logoURL;
    this.showSpinner();
    this.getSignedInUser();
    this.set_socialFlag_after_getting_club()
  }

  getSignedInUser() {
    ;
    this._authService.getSignedInUser().subscribe((user) => {
      this.signedInUser = user;
      // this.setFbProfile(user.userFacebookProfile.fbEmail , user.userFacebookProfile.fbUserName ,  user.userFacebookProfile.fbProfileImageUrl);
      this.setClubprofile(user.userClubProfile.clubEmail, user.userClubProfile.clubUsername, user.userClubProfile.clubProfileImageUrl);
    });
  }


  setFbProfile(email, username, profileImageUrl) {
    this.userFBprofile.fbEmail = email;
    this.userFBprofile.fbUserName = username;
    this.userFBprofile.fbProfileImageUrl = profileImageUrl;
    this.cf.detectChanges();
  }

  showSpinner() {
    this.spinner.show();
    setTimeout(() => {
      this.spinner.hide();
    }, 1000);
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

    // this._toast.warning('Comming Soon')
    document.getElementById("signInFB").style.pointerEvents = "none";
    const fbLoginOptions = {
      scope:
        "pages_show_list , pages_manage_posts , instagram_basic,instagram_content_publish"
    };
    // ,, " "email,,
    await this.authService
      .signIn(FacebookLoginProvider.PROVIDER_ID, fbLoginOptions)
      .then((socialUser) => {
        this._toast.success("Successfully logged into Facebook");
        this.socialUser = socialUser;
        this.club.FBuserID = this.socialUser.id;


        // this.signedInUser.FBuserID = this.socialUser.id;
        this.userFBprofile.fbEmail = this.socialUser.response.email;
        this.userFBprofile.fbUserName = this.socialUser.response.name;
        this.userFBprofile.fbProfileImageUrl = this.socialUser.response.picture.data.url;
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
                  this.userFacebookPages.push(obj);
                });
              }
              this.club.FBPages = this.userFacebookPages;
              this.updateUserClub(this.club);
            });
          }
        );
      })
      .catch((err) => console.log(err));
  }

  signOutOfClub() {
    this._authService.logoutSignedInUser()
  }

  updateUserClub(club) {
    this._clubService.updateClub(club).subscribe(data => {
    })
  }

  set_socialFlag_after_getting_club() {
    this.selectedClub = JSON.parse(localStorage.getItem('selectedClub')) as Club;
    this.selectedClub.clubName == "Solis Solution" && this.selectedClub.id == "60db0c52723416289b31f1d9" ? this.socialFlag = true : this.socialFlag = false;
  }


  setClubprofile(email, userName, profileImageUrl) {
    ;
    this.userClubProfile.clubEmail = email,
      this.userClubProfile.clubUsername = userName;
    this.userClubProfile.clubProfileImageURL = profileImageUrl;
    this.cf.detectChanges()
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

  showFBPopup() {
    this._toast.warning(
      "Comming Soon"
    );
  }

  signInWithFacebook(){
    this._toast.warning('Comming Soon');
  }

  signOutFB() {

    // ;
    // let fbProfileImageUrl = "https://socialapi.solissol.com/api/v1/en/media-upload/mediaFiles/test/123/b448db445dab8728bb3fc822243e58f10.png"
    // this.authService.signOut();
    // this.signedInUser.userFacebookProfile.fbEmail = 'Email'
    // this.signedInUser.userFacebookProfile.fbUserName = 'Username'
    // this.signedInUser.userFacebookProfile.fbProfileImageUrl = fbProfileImageUrl
    // this.setFbProfile("Email","Username", fbProfileImageUrl)
    // this.updateSignedInUser(this.signedInUser);
  }

  Club() {
    this._toast.success(
      `You are logged in via ${JSON.parse(localStorage.getItem("selectedClub")).clubName} Club`
    );
  }
}
