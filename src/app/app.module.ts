import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {CriticalItemService} from './critical/service/critical-item.service';
import {OndemandService} from './ondemand/service/ondemand.service';
//import {CriticalItemComponent} from './critical/components/critical-item/critical-item.component';

import {HttpClientModule} from '@angular/common/http'
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
 
import { ToastrModule } from 'ngx-toastr';

import { CriticalItemComponent } from './critical/components/critical-item/critical-item.component';

import { ChartsModule } from 'ng2-charts/ng2-charts';
 
// In your App's module:
import { OndemandComponent } from './ondemand/component/ondemand/ondemand.component';


@NgModule({
  declarations: [
    AppComponent,
    ChartsModule,
    CriticalItemComponent,
    
    OndemandComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot() 
  ],
  providers: [CriticalItemService,OndemandService],
  bootstrap: [AppComponent]
})
export class AppModule { }
