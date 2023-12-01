import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {MatDividerModule} from '@angular/material/divider';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UserProfilComponent } from './user-profil/user-profil.component';
import { AccueilComponent } from './accueil/accueil.component';
import { HeaderComponent } from './accueil/header/header.component';
import { FooterComponent } from './accueil/footer/footer.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ConnexionComponent } from './connexion/connexion.component';
import { AboutComponent } from './accueil/about/about.component';
import { LoginComponent } from './connexion/login/login.component';

@NgModule({
  declarations: [
    AppComponent,
    UserProfilComponent,
    AccueilComponent,
    HeaderComponent,
    FooterComponent,
    ConnexionComponent,
    AboutComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatDividerModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
