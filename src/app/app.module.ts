import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {HttpClientModule} from "@angular/common/http";
import {EmployeeListModule} from "./employee-list/employee-list.module";
import {StoreModule} from '@ngrx/store';
import {EffectsModule} from '@ngrx/effects'

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    EmployeeListModule,
    StoreModule.forRoot({}),
    EffectsModule.forFeature([]),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
