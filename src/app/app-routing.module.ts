import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HeroesComponent } from './heroes/heroes.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { HeroDetailComponent } from './hero-detail/hero-detail.component';
import { ItemsComponent } from './items/items.component';
import { ItemDetailComponent } from './item-detail/item-detail.component';
import { ShoplistComponent } from './shoplist/shoplist.component';
import { HeroitemsComponent } from './heroitems/heroitems.component';
import { HeroFormComponent } from './hero-form/hero-form.component';
import { ItemFormComponent } from './item-form/item-form.component';




const routes: Routes = [
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'heroes', component: HeroesComponent },
  { path: 'detail/:id', component: HeroDetailComponent },
  { path: 'items', component: ItemsComponent },
  { path: 'detail-item/:id', component: ItemDetailComponent },
  { path: 'shoplist/:id', component: ShoplistComponent },
  { path: 'hero-form', component: HeroFormComponent },
  { path: 'item-form', component: ItemFormComponent },
  //{ path: 'heroitems', component: HeroitemsComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }