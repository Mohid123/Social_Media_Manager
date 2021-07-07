import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { Error5Component } from '../modules/errors/error5/error5.component';
import { AccountManagerComponent } from './account-manager/account-manager.component';
import { CommingSoonFbComponent } from './comming-soon-fb/comming-soon-fb.component';
import { FacebookComponent } from './facebook/facebook.component';
import { InstagramComponent } from './instagram/instagram.component';
import { NewsfeedComponent } from './newsfeed/newsfeed.component';
import { PublishComponent } from './publish/publish.component';
import { TeamtalkersComponent } from './teamtalkers/teamtalkers.component';
import { LayoutComponent } from './_layout/layout.component';

const routes: Routes = [
  {
    path: '',
    component: LayoutComponent,
    children: [
      {
        path: 'publish-all', 
        component: PublishComponent
      },
      {
        path: 'facebook',
        component: FacebookComponent 
      },
      {
        path: 'instagram', 
        component: InstagramComponent 
      },
      {
        path: 'comming-soon-fb', 
        component: CommingSoonFbComponent 
      },
      {
        path: 'team-talkers', 
        component: TeamtalkersComponent
      },
      {
        path: 'account-manager', 
        component: AccountManagerComponent
      },
      {
        path: 'newsfeed', 
        component: NewsfeedComponent
      },
      {
        path: 'error', 
        component: Error5Component
      },
      {
        path: 'dashboard',
        loadChildren: () =>
          import('./dashboard/dashboard.module').then((m) => m.DashboardModule),
      },
      {
        path: 'builder',
        loadChildren: () =>
          import('./builder/builder.module').then((m) => m.BuilderModule),
      },
      {
        path: '',
        redirectTo: '/dashboard',
        pathMatch: 'full',
      },
      {
        path: '**',
        redirectTo: 'error/404',
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PagesRoutingModule { }
