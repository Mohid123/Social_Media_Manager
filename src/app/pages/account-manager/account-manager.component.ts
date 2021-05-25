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
  public clubName : string;

  constructor(private spinner: NgxSpinnerService, private authService: SocialAuthService, private _facebookService: FacebookService,
    private _profileService: UsersService,
    private _authService: MainAuthService) { }
  
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
    const fbLoginOptions = {
      scope: 'pages_messaging,pages_messaging_subscriptions,email,pages_show_list,instagram_basic,instagram_content_publish,pages_read_engagement,publish_to_groups'
    };
    await this.authService.signIn(FacebookLoginProvider.PROVIDER_ID, fbLoginOptions).then((socialUser) => {
      this.socialUser = socialUser;
      this.getLongLivedFBUserToken(this.socialUser.authToken).subscribe(data=>{
        this.signedInUser.FBUserAuthToken = data.access_token;
        this.signedInUser.FBuserID = this.socialUser.id
        this.updateSignedInUser(this.signedInUser)
      })
    }).catch(err => console.log(err));
  }

  getLongLivedFBUserToken(userToken) : Observable<any> {
    return this._facebookService.getLongLivedFBAccessToken(userToken);
  }

  updateSignedInUser(user) : void {
    this._profileService.updateUser(user).subscribe(updatedUser => {
      console.log(updatedUser)
    }, error => {
      console.log(error)
    })
  }
}