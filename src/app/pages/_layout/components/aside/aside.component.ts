import { MainAuthService } from './../../../../core/services/auth.service';
import { AuthService } from './../../../../modules/auth/_services/auth.service';
import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { LayoutService } from '../../../../_metronic/core';
import { Club } from 'src/app/core/models/club.model';
import { NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';
import { Router } from '@angular/router';


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
  constructor(private layout: LayoutService, private loc: Location, private _authService: MainAuthService, private modalService: NgbModal, private router: Router) { }

  ngOnInit(): void {
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
    this.selectedClub = JSON.parse(localStorage.getItem('selectedClub')) as Club;
  }

  logout() {
    this._authService.logoutSignedInUser()
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
}
