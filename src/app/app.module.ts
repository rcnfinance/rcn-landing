import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

//Material
import { MaterialModule } from '../app/material/material.module';

//Carrousel
import { DragScrollModule } from 'ngx-drag-scroll';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MenuComponent } from './shared/menu/menu.component';
import { CharacteristicCardComponent } from './shared/characteristic-card/characteristic-card.component';
import { TabDescriptionComponent } from './shared/tab-description/tab-description.component';
import { HeadingSectionComponent } from './shared/heading-section/heading-section.component';
import { FooterComponent } from './shared/footer/footer.component';
import { MainContainerComponent } from './main-container/main-container.component';
import { HomeComponent } from './sections/home/home.component';
import { CreditorsComponent } from './sections/creditors/creditors/creditors.component';
import { DevelopersComponent } from './sections/developers/developers/developers.component';
import { HowItWorksComponent } from './sections/how-it-works/how-it-works/how-it-works.component';
import { OriginatorsComponent } from './sections/originators/originators/originators.component';
import { HeaderComponent } from './sections/home/header/header.component';
import { TheNetworkComponent } from './sections/home/the-network/the-network.component';
import { CharacteristicsComponent } from './sections/home/characteristics/characteristics.component';
import { TitleTextComponent } from './shared/title-text/title-text.component';
import { PartnersComponent } from './sections/home/partners/partners.component';
import { NewsComponent } from './sections/home/news/news.component';
import { MeetTheDappComponent } from './sections/home/meet-the-dapp/meet-the-dapp.component';

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    CharacteristicCardComponent,
    TabDescriptionComponent,
    HeadingSectionComponent,
    FooterComponent,
    MainContainerComponent,
    HomeComponent,
    CreditorsComponent,
    DevelopersComponent,
    HowItWorksComponent,
    OriginatorsComponent,
    HeaderComponent,
    TheNetworkComponent,
    CharacteristicsComponent,
    TitleTextComponent,
    PartnersComponent,
    NewsComponent,
    MeetTheDappComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MaterialModule,
    DragScrollModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
