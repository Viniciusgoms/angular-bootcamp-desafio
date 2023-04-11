import { CardNewsHomeSecundarioComponent } from './components/components-home-secundario/card-news-home-secundario/card-news-home-secundario.component';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';
import { ContentComponent } from './pages/content/content.component';
import { AppRoutingModule } from './app-routing.module';
import { NavBarComponent } from './components/components-home/nav-bar/nav-bar.component';
import { HomePrincipalComponent } from './pages/home/home-principal/home-principal.component';
import { HomeSecundarioComponent } from './pages/home/home-secundario/home-secundario.component';
import { BigCardHomePrincipalComponent } from './components/components-home-principal/big-card-home-principal/big-card-home-principal.component';
import { SmallCardHomePrincipalComponent } from './components/components-home-principal/small-card-home-principal/small-card-home-principal.component';
import { CabecalhoComponent } from './components/components-home/cabecalho/cabecalho.component';
import { CabecalhoHomePrincipalComponent } from './components/components-home-principal/cabecalho-home-principal/cabecalho-home-principal.component'
import { CardNewsComponent } from './components/components-home-principal/card-news/card-news.component';
import { CardHomeSecundarioComponent } from './components/components-home-secundario/card-home-secundario/card-home-secundario.component';
import { TitleSectionComponent } from './components/components-home-secundario/title-section/title-section.component';
import { TitleNewsListComponent } from './components/components-home-secundario/title-news-list/title-news-list.component';
import { TitleSectionHomePrincipalComponent } from './components/components-home-principal/title-section-home-principal/title-section-home-principal.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ContentComponent,
    NavBarComponent,
    HomePrincipalComponent,
    HomeSecundarioComponent,
    BigCardHomePrincipalComponent,
    SmallCardHomePrincipalComponent,
    CabecalhoComponent,
    CabecalhoHomePrincipalComponent,
    CardNewsComponent,
    CardHomeSecundarioComponent,
    CardNewsHomeSecundarioComponent,
    TitleSectionComponent,
    TitleNewsListComponent,
    TitleSectionHomePrincipalComponent
  ],
  imports: [
    AppRoutingModule,
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
