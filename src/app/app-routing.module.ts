import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ConnexionComponent} from './connexion/connexion.component';
import { AccueilComponent } from './accueil/accueil.component';
import { AboutComponent } from './accueil/about/about.component';
import { ChoisirComponent } from './choisir/choisir.component';
import { UserProfilComponent } from './user-profil/user-profil.component';

const routes: Routes = [
  {path:'',component:AccueilComponent},
 {path:'connexion',component:ConnexionComponent},
 {path:'choisir',component:ChoisirComponent},
 {path:'condidat',component:UserProfilComponent}
 


];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
