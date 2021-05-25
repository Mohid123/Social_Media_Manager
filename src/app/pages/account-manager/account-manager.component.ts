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
public user: SocialUser
  constructor(private spinner: NgxSpinnerService , private authService: SocialAuthService, private _facebookService : FacebookService) { }

  ngOnInit() {
  this.showSpinner();
  }

  showSpinner(){
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
      this._facebookService.getLongLivedFBAccessToken(user.authToken).subscribe(permanentToken => {
        console.log(permanentToken)
      }, error => {
        console.log(error)
      });
    }, error=>{
      console.log(error)
    }).catch(err => console.log(err));
  }

  getLongLivedFBAccessToken() {
    this._facebookService.getLongLivedFBAccessToken(this.user.authToken).subscribe(data => {
      console.log(data)
    }, error => {
      console.log(error)
    });
  }



} 