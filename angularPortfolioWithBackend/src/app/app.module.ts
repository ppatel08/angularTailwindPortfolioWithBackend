import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { BottomNavigationComponent } from './shared/components/bottom-navigation/bottom-navigation.component';
import { SidebarComponent } from './shared/components/sidebar/sidebar.component';
import { RightSideComponent } from './components/right-side/right-side.component';
import { MainComponent } from './pages/main/main.component';
import { IntroductionComponent } from './components/introduction/introduction.component';
import { AboutComponent } from './components/about/about.component';
import { WhatIDoComponent } from './components/what-ido/what-ido.component';
import { ResumeComponent } from './components/resume/resume.component';
import { PortfolioComponent } from './components/portfolio/portfolio.component';
import { ContactComponent } from './components/contact/contact.component';

@NgModule({
  declarations: [
    AppComponent,
    BottomNavigationComponent,
    SidebarComponent,
    RightSideComponent,
    MainComponent,
    IntroductionComponent,
    AboutComponent,
    WhatIDoComponent,
    ResumeComponent,
    PortfolioComponent,
    ContactComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FontAwesomeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
