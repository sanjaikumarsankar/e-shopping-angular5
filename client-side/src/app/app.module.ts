// Angular modules
import { BrowserModule } from '@angular/platform-browser';
import { NgModule, APP_INITIALIZER } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AngularFontAwesomeModule } from 'angular-font-awesome';
import { HttpModule } from '@angular/http';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { StoreLogMonitorModule, useLogMonitor } from '@ngrx/store-log-monitor';

// Services
import { startupServiceFactory } from './core-services/startup.service';
import { CmsStateService } from './store/services/cms-state.service';
import { ShoppingService } from './core-services/shopping.service';

// Shared components
import { ContactInfoComponent } from './shared/contact-info/contact-info.component';
import { HeaderInfoComponent } from './shared/header-info/header-info.component';

// Main components
import { AppComponent } from './app.component';
import { HomeComponent } from './shopping/home/home.component';
import { LoginComponent } from './shopping/login/login.component';
import { CartComponent } from './shopping/cart/cart.component';
import { CheckoutComponent } from './shopping/checkout/checkout.component';
import { ShoppingStoreModule } from './store/shopping-store.module';
import { ProductListLeftSidebarComponent } from './shared/product-list-left-sidebar/product-list-left-sidebar.component';
import { ProductListRightSidebarComponent } from './shared/product-list-right-sidebar/product-list-right-sidebar.component';


const appRoutes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'login', component: LoginComponent },
  { path: 'cart', component: CartComponent },
  { path: 'checkout', component: CheckoutComponent }
];

export function instrumentOptions() {
  return {
    monitor: useLogMonitor({ visible: true, position: 'right' })
  };
}

@NgModule({
  bootstrap: [AppComponent],
  declarations: [
    AppComponent,
    ContactInfoComponent,
    HeaderInfoComponent,
    HomeComponent,
    LoginComponent,
    CartComponent,
    CheckoutComponent,
    ProductListLeftSidebarComponent,
    ProductListRightSidebarComponent
  ],
  imports: [
    StoreDevtoolsModule.instrument(instrumentOptions),
    StoreLogMonitorModule,
    BrowserModule,
    HttpModule,
    AngularFontAwesomeModule,
    ShoppingStoreModule.forRoot(),
    RouterModule.forRoot(appRoutes)
  ],
  providers: [
    CmsStateService,
    ShoppingService,
    {
      // Provider for APP_INITIALIZER
      provide: APP_INITIALIZER,
      useFactory: startupServiceFactory,
      deps: [CmsStateService, ShoppingService],
      multi: true
  }
  ]
})
export class AppModule { }
