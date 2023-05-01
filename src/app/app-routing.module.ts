import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutUsComponent } from './about-us/about-us.component';
import { AdvancedTestComponent } from './advanced-test/advanced-test.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { ProfileComponent } from './profile/profile.component';
import { SimpleTestComponent } from './simple-test/simple-test.component';
import { StatisticsComponent } from './statistics/statistics.component';

const routes: Routes = [

  // path for side navMenu
  //here path used is declared in navigation list
  { path: 'simple', component: SimpleTestComponent },
  { path: 'advanced', component: AdvancedTestComponent },
  { path: 'statistics', component: StatisticsComponent },
  { path: 'aboutus', component: AboutUsComponent },
  { path: 'profile', component: ProfileComponent },

  //if path is empty , by default simple path will open
  { path: '', redirectTo: '/simple', pathMatch: 'full' },

  //if path not found then page not found component will open
  { path: '**', component: PageNotFoundComponent },

  //note --this path will open where?? using router-outlet we can specify where it will be displayed
  // see app html
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
