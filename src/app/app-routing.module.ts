import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AccueilComponent } from './modules/general/accueil/accueil.component';
import { NotFoundComponent } from './modules/general/not-found/not-found.component';
import { HeaderComponent } from './modules/general/header/header.component';
import { FooterComponent } from './modules/general/footer/footer.component';



const routes: Routes = [
  { path: '', component: AccueilComponent, },
  { path: '', component: HeaderComponent, },
  { path: '', component: FooterComponent, },
  { path: 'home',
    loadChildren: () => import('./modules/general/home/home.module')
      .then(mod => mod.HomeModule)
  },
  { path: 'jeux',
    loadChildren: () => import('./modules/general/jeux/jeux.module')
      .then(mod => mod.JeuxModule)
  },
  { path: 'mangas',
    loadChildren: () => import('./modules/general/mangas/mangas.module')
      .then(mod => mod.MangasModule)
},
  { path: 'goodies',
    loadChildren: () => import('./modules/general/goodies/goodies.module')
        .then(mod => mod.GoodiesModule)
 },
  { path: 'account',
    loadChildren: () => import('./modules/general/account/account.module')
      .then(mod => mod.AccountModule)
},
  { path: '**', component: NotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  declarations: [
  ]
})
export class AppRoutingModule { }
