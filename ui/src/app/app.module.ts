import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from "@angular/router";
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { StoreModule } from '@ngrx/store';

import { AppComponent } from './app.component';

import { LoginModule } from "./login/login.module";
import { ErrorPageModule } from "./error-page/error-page.module";
import { AppRoutes } from "./app-routes";
import { RegisterModule } from "./register/register.module";
import { UserInfoModule } from "./user-info/user-info.module";
import { HomeModule } from "./home/home.module";
import { StoreModule as ShopModule } from "./store/store.module"

import { LocationService } from "./utils/services/location/location.service";

import { ToastReducer } from "./utils/redux/app-reducers";
import { StoreProviders } from "./utils/redux/store.providers";

@NgModule({
    declarations: [
        AppComponent
    ],
    imports: [
        BrowserModule,
        RouterModule,
        HomeModule,
        ErrorPageModule,
        LoginModule,
        RegisterModule,
        UserInfoModule,
        ShopModule,
        StoreModule.provideStore(StoreProviders),
        RouterModule.forRoot(AppRoutes)
    ],
    providers: [LocationService],
    bootstrap: [AppComponent],
    schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AppModule { }