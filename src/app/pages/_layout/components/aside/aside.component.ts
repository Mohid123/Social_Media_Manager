import { MainAuthService } from './../../../../core/services/auth.service';
import { AuthService } from './../../../../modules/auth/_services/auth.service';
import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { LayoutService } from '../../../../_metronic/core';
import { Club } from 'src/app/core/models/club.model';
import { NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';
import { Router } from '@angular/router';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import * as CryptoJS from 'crypto-js';

@Component({
  selector: 'app-aside',
  templateUrl: './aside.component.html',
  styleUrls: ['./aside.component.scss'],
})
export class AsideComponent implements OnInit {
  public userNameLogout: string = localStorage.getItem('userName')
  public profileImageUrl: string = localStorage.getItem('profileImageUrl')
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
  selectedClub: Club
  closeResult: string;
  socialFlag: boolean = false;
  constructor(private layout: LayoutService,
    private loc: Location,
    private _authService: MainAuthService,
    private modalService: NgbModal,
    private router: Router,
    private http: HttpClient) { }


  ngOnInit(): void {
    this.setProp();
    this.set_socialFlag_after_getting_club()
  }

  logout() {
    this._authService.logoutSignedInUser()
  }

  set_socialFlag_after_getting_club() {
    this.selectedClub = JSON.parse(localStorage.getItem('selectedClub')) as Club;
    this.selectedClub.clubName == "Solis Solution" && this.selectedClub.id == "60db0c52723416289b31f1d9" ? this.socialFlag = true : this.socialFlag = false;
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
    let token = localStorage.getItem('club-token');
    let encrypted = CryptoJS.AES.encrypt(token, 'secretkey123').toString();
    let encoded =  encodeURIComponent(encrypted);
    let sponsorPanelUrl = `http://localhost:4300/loading?value=${encoded}`;
    window.open(sponsorPanelUrl)
  }


  // decryptData(data) {
  //   data = CryptoJS.AES.decrypt(data, 'secretkey123').toString(CryptoJS.enc.Utf8);;
  //   console.log(data, 'decrypted');
  // }


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
}
