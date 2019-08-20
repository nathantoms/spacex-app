// Angular
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

// Routing
import { AppRoutingModule } from './app-routing.module';

// Components
import { HomePageComponent, LaunchDetailPageComponent } from './pages';
import { LaunchesListComponent, LaunchesListItemComponent } from './components/launches';
import { HeaderComponent } from './components/shared';
import { AppComponent } from './app.component';

// Services
import { SpacexApiService } from './services';

@NgModule({
   declarations: [
      AppComponent,
      HomePageComponent,
      LaunchDetailPageComponent,
      HeaderComponent,
      LaunchesListComponent,
      LaunchesListItemComponent,
      LaunchDetailPageComponent
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
