import { ClubService } from './../../../../core/services/club.service';
import { MainAuthService } from './../../../../core/services/auth.service';
import { Location } from '@angular/common';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { LayoutService } from '../../../../_metronic/core';
import { NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import * as CryptoJS from 'crypto-js';
import { JoyrideService } from 'ngx-joyride';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';

@Component({
  selector: 'app-aside',
  templateUrl: './aside.component.html',
  styleUrls: ['./aside.component.scss'],
})
export class AsideComponent implements OnInit, OnDestroy {

  destroy$ = new Subject();

  public userNameLogout: string = this._authService.user?.fullName;
  public profileImageUrl: string = this._authService.user?.profilePicURL;
  userName: string
  disableAsideSelfDisplay: boolean;
  headerLogo: string;
  brandSkin: string;
  ulCSSClasses: string;
  location: Location;
  asideMenuHTMLAttributes: any = {};
  asideMenuCSSClasses: string;
  asideMenuDropdown;
  brandClasses: string;
  asideMenuScroll = 1;
  asideSelfMinimizeToggle = false;
  selectedClub
  closeResult: string;
  socialFlag: boolean = false;
  sponsorPanelExists: boolean = false;
  userMgt: boolean = false;
  constructor(
    private clubService: ClubService,
    private layout: LayoutService,
    private loc: Location,
    private _authService: MainAuthService,
    private modalService: NgbModal,
    private joyrideService: JoyrideService) {
    this.clubService.SelectedClub$.pipe(takeUntil(this.destroy$)).subscribe(club => {
      this.selectedClub = club;
      this.set_socialFlag_after_getting_club();
      this.showUserMgt()
    })
  }


  ngOnInit(): void {
    this.setProp();
  }

  logout() {
    this._authService.logoutSignedInUser()
    // localStorage.removeItem('selectedClub')
  }

  onClick() {
    this.joyrideService.startTour({ 
     steps: ['firstStep', 'secondStep', 'thirdStep', 'fourthStep', 'fifthStep', 'sixthStep', 'seventhStep', 'eighthStep', 'ninthStep', 'tenthStep', 'eleventhStep', 'twelevethStep'],
    themeColor: '#1e1e2d',
    stepDefaultPosition: 'right',
   } // Your steps order
   
    );
}

showUserMgt(){
  this.selectedClub.clubName == "Solis Solution" && this.selectedClub.id == "60db0c52723416289b31f1d9" || 
  this.selectedClub.clubName =='UMP' && this.selectedClub.id == '62820e43328a79224ae49752' || 
  this.selectedClub.clubName == 'Nimba Talk' && this.selectedClub.id == '6177f5a16e1b510f6d754e53' || 
  this.selectedClub.isPicker == true || this.selectedClub.pickerModelId == "61446df5acf10ff6947f2426" ? this.userMgt = true: this.userMgt = false;

}

  set_socialFlag_after_getting_club() {
    this.selectedClub.clubName == "Solis Solution" && this.selectedClub.id == "60db0c52723416289b31f1d9" ? this.socialFlag = true : this.socialFlag = false;
    if (!this.selectedClub.sponsorPanelUrl) {
      this.sponsorPanelExists = false
    }
    else {
      this.sponsorPanelExists = true;
    }
  }

  setProp() {
    this.disableAsideSelfDisplay =
      this.layout.getProp('aside.self.display') === false;
    this.brandSkin = this.layout.getProp('brand.self.theme');
    this.headerLogo = this.getLogo();
    this.ulCSSClasses = this.layout.getProp('aside_menu_nav');
    this.asideMenuCSSClasses = this.layout.getStringCSSClasses('aside_menu');
    this.asideMenuHTMLAttributes = this.layout.getHTMLAttributes('aside_menu');
    this.asideMenuDropdown = this.layout.getProp('aside.menu.dropdown') ? '1' : '0';
    this.brandClasses = this.layout.getProp('brand');
    this.asideSelfMinimizeToggle = this.layout.getProp(
      'aside.self.minimize.toggle'
    );
    this.asideMenuScroll = this.layout.getProp('aside.menu.scroll') ? 1 : 0;
    this.location = this.loc;
  }

  routeToSponsorPanel() {
    let sponsorPanelBaseUrl, token, encrypted, encoded, url
    sponsorPanelBaseUrl = this.selectedClub.sponsorPanelUrl
    token = this._authService.clubToken;
    encrypted = CryptoJS.AES.encrypt(token, 'secretkey123').toString();
    encoded = encodeURIComponent(encrypted);
    url = `${sponsorPanelBaseUrl}/loading?value=${encoded}`;
    window.open(url)
  }


  openVerticallyCentered(content) {
    this.modalService.open(content, { centered: true }).result.then((result) => {
      this.closeResult = `Closed with: ${result}`;
    }, (reason) => {
      this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
    });
  }
  private getDismissReason(reason: any): string {
    if (reason === ModalDismissReasons.ESC) {
      return 'by pressing ESC';
    } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
      return 'by clicking on a backdrop';
    } else {
      return `with: ${reason}`;
    }
  }



  private getLogo() {
    if (this.brandSkin === 'light') {
      return './assets/media/logos/logo-dark.png';
    } else {
      return './assets/media/logos/logo-light.png';
    }
  }

  ngOnDestroy(): void {
    this.destroy$.complete();
    this.destroy$.unsubscribe();
  }
}
