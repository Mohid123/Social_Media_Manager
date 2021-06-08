import { ToastrModule, ToastrService } from 'ngx-toastr';
import { Observable } from 'rxjs';
import { MainAuthService } from './../../core/services/auth.service';
import { UsersService } from './../../core/services/users.service';
import { FacebookService } from './../../core/services/facebook.service';
import { Component, OnInit } from '@angular/core';
import { FacebookLoginProvider, SocialAuthService, SocialUser } from 'angularx-social-login';
import { NgxSpinnerService } from "ngx-spinner";
import { User } from 'src/app/core/models/user.model';
@Component({
  selector: 'app-account-manager',
  templateUrl: './account-manager.component.html',
  styleUrls: ['./account-manager.component.scss']
})
export class AccountManagerComponent implements OnInit {
  public socialUser: SocialUser
  public signedInUser: User
  public clubName: string;
  private connectedIG : boolean = false;
  public clubLogo : string = localStorage.getItem('clubLogo')


  constructor(private spinner: NgxSpinnerService, private authService: SocialAuthService, private _facebookService: FacebookService,
    private _profileService: UsersService,
    private _authService: MainAuthService,
    private _toast : ToastrService
    ) { }

  ngOnInit() {
    this.clubName = localStorage.getItem('club');
    this.showSpinner();
    this.getSignedInUser();
  }

  getSignedInUser() {
    this._authService.getSignedInUser().subscribe(user => {
      this.signedInUser = user
    })
  }

  showSpinner() {
    this.spinner.show();
    setTimeout(() => {
      this.spinner.hide();
    }, 1000);
  }

  async signInWithFB() {
    debugger;
    const fbLoginOptions = {
      scope: 'pages_messaging,pages_messaging_subscriptions,email,pages_show_list,instagram_basic,instagram_content_publish, publish_video ,pages_read_engagement,publish_to_groups , pages_manage_posts'
    };
    await this.authService.signIn(FacebookLoginProvider.PROVIDER_ID, fbLoginOptions).then((socialUser) => {
      this.socialUser = socialUser;
      this.signedInUser.FBuserID = this.socialUser.id
      this.getLongLivedFBUserToken(this.socialUser.authToken).subscribe(data => {
        console.log(data , 'long access token')
        this.signedInUser.FBUserAuthToken = data.access_token;
        debugger;
        if(this.signedInUser.FBPages.length > 0){
          return;
        }
        this.getFacebookPages(this.socialUser.id , data.access_token).subscribe(data=>{
          console.log(data , 'Facebook pages');
          data.data.forEach(item => {
            let obj = {
              pageAccessToken : item.access_token,
              pageID : item.id,
              pageName : item.name
            }
            this.signedInUser.FBPages.push(obj);
          });
          this.updateSignedInUser(this.signedInUser)
        })
      })
    }).catch(err => console.log(err));
  }

  getLongLivedFBUserToken(userToken): Observable<any> {
    return this._facebookService.getLongLivedFBAccessToken(userToken);
  }

  getFacebookPages(id, userToken) : Observable<any> {
    return this._facebookService.getFacebookPages(id, userToken)
  }

  updateSignedInUser(user): void {
    this._profileService.updateUser(user).subscribe(updatedUser => {
      console.log(updatedUser , 'updated user')
    }, error => {
      console.log(error)
    })
  }

showFBPopup(){
 this._toast.warning('Sign in via Facebook to connect your Instagram Accounts') 
}

Club(){
  this._toast.success(`You are logged in via ${localStorage.getItem('club')} Club`)
}

}