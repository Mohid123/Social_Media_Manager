import { VideoProcessingService } from './../core/services/video-service/video-processing.service';
import {  CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InlineSVGModule } from 'ng-inline-svg';
import { PagesRoutingModule } from './pages-routing.module';
import {
  NgbDropdownModule,
  NgbProgressbarModule,
} from '@ng-bootstrap/ng-bootstrap';
import { TranslationModule } from '../modules/i18n/translation.module';
import { LayoutComponent } from './_layout/layout.component';
import { ScriptsInitComponent } from './_layout/init/scipts-init/scripts-init.component';
import { HeaderMobileComponent } from './_layout/components/header-mobile/header-mobile.component';
import { AsideComponent } from './_layout/components/aside/aside.component';
import { FooterComponent } from './_layout/components/footer/footer.component';
import { HeaderComponent } from './_layout/components/header/header.component';
import { HeaderMenuComponent } from './_layout/components/header/header-menu/header-menu.component';
import { TopbarComponent } from './_layout/components/topbar/topbar.component';
import { ExtrasModule } from '../_metronic/partials/layout/extras/extras.module';
import { LanguageSelectorComponent } from './_layout/components/topbar/language-selector/language-selector.component';
import { CoreModule } from '../_metronic/core';
import { SubheaderModule } from '../_metronic/partials/layout/subheader/subheader.module';
import { AsideDynamicComponent } from './_layout/components/aside-dynamic/aside-dynamic.component';
import { HeaderMenuDynamicComponent } from './_layout/components/header/header-menu-dynamic/header-menu-dynamic.component';
import { PublishComponent } from './publish-all/publish.component';
import { FacebookComponent } from './facebook/facebook.component';
import { InstagramComponent } from './instagram/instagram.component';
import { TeamtalkersComponent } from './teamtalkers/teamtalkers.component';
import { AccountManagerComponent } from './account-manager/account-manager.component';
import { MatTabsModule } from '@angular/material/tabs';
import { MatIconModule } from "@angular/material/icon";
import {MatInputModule} from '@angular/material/input';
import { MDBBootstrapModule } from 'angular-bootstrap-md';
import { NgxSpinnerModule } from "ngx-spinner";
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgxDatePickerModule} from '@ngx-tiny/date-picker';
import { NgxTimePickerModule } from '@ngx-tiny/time-picker';
import { NewsfeedComponent } from './newsfeed/newsfeed.component';
import { MomentPipe } from '../core/pipes/datetransform.pipe';
import { Error5Component } from '../modules/errors/error5/error5.component';
import { CommingSoonFbComponent } from './comming-soon-fb/comming-soon-fb.component';
import { ComingSoonIgComponent } from './coming-soon-ig/coming-soon-ig.component';
import { AdvertisementComponent } from './advertisement/advertisement.component';
import { MomentPipeIG } from '../core/pipes/datetransformIG.pipe';
import { ScheduleComponent } from './schedule/schedule.component';

import { FullCalendarModule } from '@fullcalendar/angular';
import dayGridPlugin from '@fullcalendar/daygrid'; // a plugin!
import interactionPlugin from '@fullcalendar/interaction';
import { CalendarComponent } from './schedule/calendar/calendar.component'; // a plugin!
import { ScheduleDateTransform } from '../core/pipes/scheduleDateTransform.pipe';
import { FeedbackComponent } from './help/feedback.component';
import { NgxDropzoneModule } from 'ngx-dropzone';

FullCalendarModule.registerPlugins([ 
  dayGridPlugin,
  interactionPlugin
]);




@NgModule({
  declarations: [
    LayoutComponent,
    ScriptsInitComponent,
    HeaderMobileComponent,
    AsideComponent,
    FooterComponent,
    HeaderComponent,
    HeaderMenuComponent,
    TopbarComponent,
    LanguageSelectorComponent,
    AsideDynamicComponent,
    HeaderMenuDynamicComponent,
    PublishComponent,
    FacebookComponent,
    InstagramComponent,
    TeamtalkersComponent,
    AccountManagerComponent,
    NewsfeedComponent,
    Error5Component,
    MomentPipe,
    MomentPipeIG,
    ScheduleDateTransform,
    CommingSoonFbComponent,
    ComingSoonIgComponent,
    AdvertisementComponent,
    ScheduleComponent,
    CalendarComponent,
    FeedbackComponent

  
  ],
  imports: [
  FullCalendarModule,
  CommonModule,
    PagesRoutingModule,
    TranslationModule,
    InlineSVGModule,
    MDBBootstrapModule.forRoot(),
    ExtrasModule,
    NgbDropdownModule,
    NgbProgressbarModule,
    CoreModule,
    SubheaderModule,
    MatTabsModule,
    MatIconModule,
    MatInputModule,
    NgxSpinnerModule,
    FormsModule,
    NgxDatePickerModule,
    NgxTimePickerModule,
    NgxDropzoneModule
   
    
     
  ],
  providers: [VideoProcessingService], 
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class LayoutModule { }
