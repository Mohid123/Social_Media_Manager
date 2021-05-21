import { Component, OnInit } from '@angular/core';
import { FacebookLoginProvider, SocialAuthService } from 'angularx-social-login';
import { NgxSpinnerService } from "ngx-spinner";

@Component({
  selector: 'app-account-manager',
  templateUrl: './account-manager.component.html',
  styleUrls: ['./account-manager.component.scss']
})
export class AccountManagerComponent implements OnInit {

  constructor(private spinner: NgxSpinnerService , private authService: SocialAuthService,) { }

  ngOnInit() {
  this.showSpinner();
  }

  showSpinner(){
    this.spinner.show();
    setTimeout(() => {
      this.spinner.hide();
    }, 1000);
  }

  signInWithFB(): void {
    const fbLoginOptions = {
      scope: 'pages_messaging,pages_messaging_subscriptions,email,pages_show_list,instagram_basic,instagram_content_publish,pages_read_engagement,publish_to_groups'
    };
    this.authService.signIn(FacebookLoginProvider.PROVIDER_ID, fbLoginOptions).then((user) => {
      console.log(user)
    }).catch(err => console.log(err));
  }


} 