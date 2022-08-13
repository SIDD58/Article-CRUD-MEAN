import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {HttpClientModule} from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AddArtilcesComponent } from './add-artilces/add-artilces.component';
import { ArtilcesDetailsComponent } from './artilces-details/artilces-details.component';
import { ArtilcesListComponent } from './artilces-list/artilces-list.component';
import { NotFoundComponent } from './not-found/not-found.component'
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    AddArtilcesComponent,
    ArtilcesDetailsComponent,
    ArtilcesListComponent,
    NotFoundComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
