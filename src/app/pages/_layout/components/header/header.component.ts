import { ApiResponse } from '@app/core/models/response.model';
import {
  Component,
  OnInit,
  ViewChild,
  ElementRef,
  AfterViewInit,
  OnDestroy,
  ChangeDetectorRef,
} from '@angular/core';
import {
  Router,
  NavigationStart,
  RouteConfigLoadStart,
  RouteConfigLoadEnd,
  NavigationEnd,
  NavigationCancel,
} from '@angular/router';
import { LayoutService } from '../../../../_metronic/core';
import KTLayoutHeader from '../../../../../assets/js/layout/base/header';
import KTLayoutHeaderMenu from '../../../../../assets/js/layout/base/header-menu';
import { KTUtil } from '../../../../../assets/js/components/util';
import { Subscription, Observable, BehaviorSubject } from 'rxjs';
import { JsonpClientBackend } from '@angular/common/http';
import { ClubService } from './../../../../core/services/club.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit, AfterViewInit, OnDestroy {
  headerContainerCSSClasses: string;
  headerMenuSelfDisplay: boolean;
  headerMenuSelfStatic: boolean;
  asideSelfDisplay: boolean;
  headerLogo: string;
  headerSelfTheme: string;
  headerMenuCSSClasses: string;
  headerMenuHTMLAttributes: any = {};
  routerLoaderTimout: any;
  showLiveStream : boolean;
  public toggleBtn : boolean = false ;

  @ViewChild('ktHeaderMenu', { static: true }) ktHeaderMenu: ElementRef;
  loader$: Observable<number>;

  private loaderSubject: BehaviorSubject<number> = new BehaviorSubject<number>(
    0
  );
  private unsubscribe: Subscription[] = []; 

  constructor(
    private layout: LayoutService, 
    private router: Router , 
    private _clubService : ClubService , 
    private cf : ChangeDetectorRef
  ) {
    this.loader$ = this.loaderSubject;
    const routerSubscription = this.router.events.subscribe((event) => {
      if (event instanceof NavigationStart) {
        this.loaderSubject.next(10);
      }
      if (event instanceof RouteConfigLoadStart) {
        this.loaderSubject.next(65);
      }
      if (event instanceof RouteConfigLoadEnd) {
        this.loaderSubject.next(90);
      }
      if (event instanceof NavigationEnd || event instanceof NavigationCancel) {
        this.loaderSubject.next(100);
        if (this.routerLoaderTimout) {
          clearTimeout(this.routerLoaderTimout);
        }
        this.routerLoaderTimout = setTimeout(() => {
          this.loaderSubject.next(0);
        }, 300);
      }
    });
    this.unsubscribe.push(routerSubscription);
  }

  ngOnInit(): void {
   this.setHeaderContainerCSS();
   this.getLiveStreamBit();
  }

  ngAfterViewInit(): void {
    if (this.ktHeaderMenu) {
      for (const key in this.headerMenuHTMLAttributes) {
        if (this.headerMenuHTMLAttributes.hasOwnProperty(key)) {
          this.ktHeaderMenu.nativeElement.attributes[
            key
          ] = this.headerMenuHTMLAttributes[key];
        }
      }
    }

    KTUtil.ready(() => {
      KTLayoutHeader.init('kt_header', 'kt_header_mobile');
      KTLayoutHeaderMenu.init('kt_header_menu', 'kt_header_menu_wrapper');
    });
  }

  setHeaderContainerCSS(){
    this.headerContainerCSSClasses = this.layout.getStringCSSClasses(
      'header_container'
    );
    this.headerMenuSelfDisplay = this.layout.getProp(
      'header.menu.self.display'
    );
    this.headerMenuSelfStatic = this.layout.getProp('header.menu.self.static');
    this.asideSelfDisplay = this.layout.getProp('aside.self.display');
    this.headerSelfTheme = this.layout.getProp('header.self.theme') || '';
    this.headerLogo = this.getLogoURL();
    this.headerMenuCSSClasses = this.layout.getStringCSSClasses('header_menu');
    this.headerMenuHTMLAttributes = this.layout.getHTMLAttributes(
      'header_menu'
    );
  }

  private getLogoURL(): string {
    let result = 'logo-light.png';

    if (this.headerSelfTheme && this.headerSelfTheme === 'light') {
      result = 'logo-dark.png';
    }

    if (this.headerSelfTheme && this.headerSelfTheme === 'dark') {
      result = 'logo-dark.png';
    }

    return `./assets/media/logos/${result}`;
  }


  setLiveStreamBit(bit){
    this._clubService.changeLiveStreamBit(bit).subscribe(data=>{
      // console.log(data);
    })
    // console.log(bit)
  }

  getLiveStreamBit(){
    let club = this._clubService.selectedClub;
    if(club.id == '60a1f5fb764e4033cc10f7d5'){
      this.showLiveStream = true;
      this._clubService.getLiveStreamBit().subscribe((res: ApiResponse<any>)=>{
        // console.log(data)
        if(!res.hasErrors()) {
          this.toggleBtn = res.data.liveStreamBit;
          this.cf.detectChanges();
        }
      })
    }
    else {
      this.showLiveStream = false;
    }
   
  }

  
  ngOnDestroy() {
    this.unsubscribe.forEach((sb) => sb.unsubscribe());
    if (this.routerLoaderTimout) {
      clearTimeout(this.routerLoaderTimout);
    }
  }


}
