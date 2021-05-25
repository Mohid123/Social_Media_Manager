import { UserModel } from './../../modules/auth/_models/user.model';
import { UsersService } from './../../core/services/users.service';
import { FacebookService } from './../../core/services/facebook.service';
import { Component, OnInit } from '@angular/core';
import { FacebookLoginProvider, SocialAuthService, SocialUser } from 'angularx-social-login';
import { NgxSpinnerService } from "ngx-spinner";
import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';
@Component({
  selector: 'app-account-manager',
  templateUrl: './account-manager.component.html',
  styleUrls: ['./account-manager.component.scss']
})
export class AccountManagerComponent implements OnInit {
  public socialUser: SocialUser
  clubName : string;
  constructor(private spinner: NgxSpinnerService, private authService: SocialAuthService, private _facebookService: FacebookService, private _profileService: UsersService) { }

  ngOnInit() {
    this.clubName = localStorage.getItem('club');
    this.showSpinner();
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
    await this.authService.signIn(FacebookLoginProvider.PROVIDER_ID, fbLoginOptions).then((user) => {
      console.log(user)
      this._facebookService.getLongLivedFBAccessToken(this.socialUser.authToken).subscribe(permanentToken => {
      }, (error) => {
        console.log(error)
      });
    }, error => {
      console.log(error)
    }).catch(err => console.log(err));
  }

}