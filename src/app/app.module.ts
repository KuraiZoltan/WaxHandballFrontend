import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { NavMenuComponent } from './nav-menu/nav-menu.component';
import { HomeComponent } from './home/home.component';
import { CounterComponent } from './counter/counter.component';
import { ViewProductsComponent } from './webshop/view-products/view-products.component';
import { ProductComponent } from './webshop/product/product.component';
import { AddProductFormComponent } from './webshop/add-product-form/add-product-form.component';
import { WebshopHomeComponent } from './webshop/webshop-home/webshop-home.component';
import { RegistrationComponent } from './user-registration-login/registration/registration.component';
import { LoginComponent } from './user-registration-login/login/login.component';
import { AuthGuard } from './guards/auth-guard.service';
import { PlayersComponent } from './players/player-cards/players.component';
import { ViewPlayersComponent } from './players/view-players/view-players.component';
import { AddPlayerFormComponent } from './players/add-player-form/add-player-form.component';
import { LeagueStandingsComponent } from './league-standings/league-standings.component';
import { HomeWebshopBlockComponent } from './webshop/home-webshop-block/home-webshop-block.component';
import { CheckoutComponent } from './webshop/checkout/checkout.component';
import { SearchbarComponent } from './webshop/searchbar/searchbar.component';

export function tokenGetter() {
  return sessionStorage.getItem("jwt")
}

@NgModule({
  declarations: [
    AppComponent,
    NavMenuComponent,
    HomeComponent,
    CounterComponent,
    ViewProductsComponent,
    ProductComponent,
    AddProductFormComponent,
    WebshopHomeComponent, 
    RegistrationComponent,
    LoginComponent,
    PlayersComponent,
    ViewPlayersComponent,
    AddPlayerFormComponent,
    LeagueStandingsComponent,
    HomeWebshopBlockComponent,
    CheckoutComponent,
    SearchbarComponent
  ],
  imports: [
    BrowserModule.withServerTransition({ appId: 'ng-cli-universal' }),
    HttpClientModule,
    FormsModule,
    RouterModule.forRoot([
      { path: '', component: HomeComponent, pathMatch: 'full' },
      { path: 'counter', component: CounterComponent },
      { path: 'view-products', component: ViewProductsComponent, canActivate: [AuthGuard] },
      { path: 'view-players', component: ViewPlayersComponent, canActivate: [AuthGuard] },
      { path: 'webshop-home', component: WebshopHomeComponent },
      { path: 'registration', component: RegistrationComponent},
      { path: 'login', component: LoginComponent },
      { path: 'league-standing', component: LeagueStandingsComponent },
      { path: 'checkout', component: CheckoutComponent }
    ]),
  ],
  providers: [AuthGuard, WebshopHomeComponent ],
  bootstrap: [AppComponent]
})
export class AppModule { }
