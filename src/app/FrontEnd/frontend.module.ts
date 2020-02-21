import { NgModule } from '@angular/core';
import { HomeComponent } from './home/home.component';
import { ServiceComponent } from './header/service/service.component';
import { FrontendRoutesModule } from './frontend.routing';
import { MainComponent } from './main/main.component';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { AboutUsComponent } from './about-us/about-us.component';


@NgModule({
    declarations:[
        HeaderComponent,
        HomeComponent,
        ServiceComponent,
        MainComponent,
        FooterComponent,
        AboutUsComponent
    ],
  imports: [
    FrontendRoutesModule
  ],
})
export class FrontEndModule { }
