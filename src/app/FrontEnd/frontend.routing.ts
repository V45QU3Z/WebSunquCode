import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ServiceComponent } from './header/service/service.component';
import { MainComponent } from './main/main.component';
import { HeaderComponent } from './header/header.component';
import { AboutUsComponent } from './about-us/about-us.component';

import { ExtraOptions } from '@angular/router';

const routerOptions: ExtraOptions = {
  anchorScrolling: "enabled",
  scrollPositionRestoration: 'enabled'
}

const sunqucoderoutes: Routes = [
    {path: '', component: MainComponent},
    {path: 'services', component: ServiceComponent},
    {path: 'about-us', component: AboutUsComponent}
  ];

  @NgModule({
    declarations: [
 
    ],
    imports: [ RouterModule.forRoot(sunqucoderoutes, routerOptions) ],
    exports: [ RouterModule ]
  })
  export class FrontendRoutesModule {
    
  }
 