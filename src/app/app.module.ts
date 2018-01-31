import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { RouterModule, Routes } from '@angular/router';
import {FormsModule} from '@angular/forms'
import {HttpClientModule} from '@angular/common/http';

import { AppComponent } from './app.component';
import { AccountComponent } from './components/account/account.component';
import { CreditCardComponent } from './components/credit-card/credit-card.component';
import { ContactsComponent } from './components/contacts/contacts.component';
import { PaymentComponent } from './components/payment/payment.component';
import { NewPaymentComponent } from './components/payment/newPayment.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { RegistrationComponent } from './components/registration/registration.component';
import { RloginComponent } from './components/rlogin/rlogin.component';
import { WelcomeComponent } from './components/welcome/welcome.component';

const appRoutes: Routes = [
  { path: '', redirectTo: 'welcome', pathMatch: 'full' },
  { path: 'account', component: AccountComponent },
  { path:'cards', component:CreditCardComponent},
  { path: 'login', component: RloginComponent },
  { path: 'welcome', component: WelcomeComponent },
  { path: 'register', component: RegistrationComponent },
  { path: 'payment', component:PaymentComponent },
  { path: 'newPayment', component:NewPaymentComponent },
  { path: '**', component: PageNotFoundComponent },
];

@NgModule({
  declarations: [
    AppComponent,
    AccountComponent,
    CreditCardComponent,
    ContactsComponent,
    PaymentComponent,
    PageNotFoundComponent,
    RegistrationComponent,
    RloginComponent,
    WelcomeComponent,
    NewPaymentComponent
  ],
  imports: [
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: true } // <-- debugging purposes only      
    ),
    BrowserModule,
    NgbModule.forRoot(),
    FormsModule ,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }


