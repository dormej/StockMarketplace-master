import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavComponent } from './components/nav/nav.component';
import { RegisterComponent } from './components/register/register.component';
import { LoginComponent } from './components/login/login.component';
import { FormsModule } from '@angular/forms';
import { PrizeChartComponent } from './components/prizechart/prizechart.component';
import { LineChartComponent } from './components/line-chart/line-chart.component';
import { StockPurchaseComponentComponent } from './components/stock-purchase-component/stock-purchase-component.component';
import { StatuteComponent } from './components/statute/statute.component';
import { PrivacyPolicyComponent } from './components/privacy-policy/privacy-policy.component';


@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    RegisterComponent,
    LoginComponent,
    PrizeChartComponent,
    LineChartComponent,
    StockPurchaseComponentComponent,
    StatuteComponent,
    PrivacyPolicyComponent,

  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
