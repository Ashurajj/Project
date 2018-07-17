import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { GotHttpService } from './got-http-service.service';
import {RouterModule , Routes} from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { DetailsComponent } from './details/details.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    DetailsComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot([
      {path:'home',component:HomeComponent},
      {path:'',redirectTo:'home',pathMatch:'full'},
      {path:'details',component:DetailsComponent}


  ])
  ],
  providers: [GotHttpService],
  bootstrap: [AppComponent]
})
export class AppModule { }
