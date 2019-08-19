import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomePageComponent } from './pages';
import { HttpClientModule } from '@angular/common/http';
import { SpacexApiService } from './services';
import { LaunchesListComponent, LaunchesListItemComponent } from './components/launches';
import { HeaderComponent } from './components/shared';

@NgModule({
   declarations: [
      AppComponent,
      HomePageComponent,
      HeaderComponent,
      LaunchesListComponent,
      LaunchesListItemComponent
   ],
   imports: [
      BrowserModule,
      AppRoutingModule,
      HttpClientModule
   ],
   providers: [
     SpacexApiService
   ],
   bootstrap: [
      AppComponent
   ]
})
export class AppModule { }
