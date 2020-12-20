import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from "@angular/forms";
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StoreModule } from "./store/store.module";
import { StoreComponent } from './store/store.component';
import { CartDetailComponent } from './cart/cartDetail.component';
import { CheckoutComponent } from './checkout/checkout.component';
import { RouterModule } from "@angular/router";
import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from '../environments/environment';
import { AuthGuard } from './admin/auth.guard';
import { RestDataSource } from './model/rest.datasource';
import { AuthService } from './service/auth.service';
import { ConnectionService } from './service/connection.service';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule, FormsModule, StoreModule,
    RouterModule.forRoot([
      {path:"store",component:StoreComponent},
      {path:"cart", component:CartDetailComponent},
      {path:"checkout",component:CheckoutComponent},
      {path:"admin",
      loadChildren: () => import('./admin/admin.module')
      .then(m => m.AdminModule),
       },
      {path:"", component:StoreComponent}
    ]),

    // ServiceWorkerModule.register('json-server.js', { enabled: environment.production })
  ],
  providers: [AuthGuard,
    RestDataSource, AuthService, ConnectionService],
  bootstrap: [AppComponent]
})
export class AppModule { }
