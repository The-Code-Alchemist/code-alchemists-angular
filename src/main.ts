import { bootstrapApplication } from '@angular/platform-browser';
import { AppComponent } from './app/app.component';
import { importProvidersFrom } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './app/components/home/home.component';
import { AboutComponent } from './app/components/about/about.component';
import { PortfolioComponent } from './app/components/portfolio/portfolio.component';
import { ContactComponent } from './app/components/contact/contact.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'about', component: AboutComponent },
  { path: 'portfolio', component: PortfolioComponent },
  { path: 'contact', component: ContactComponent },
  { path: '**', redirectTo: '' }
];

bootstrapApplication(AppComponent, {
  providers: [
    importProvidersFrom(
      RouterModule.forRoot(routes)
    )
  ]
}).catch(err => console.error(err));
