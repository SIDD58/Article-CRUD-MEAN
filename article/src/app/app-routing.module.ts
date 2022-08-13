import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddArtilcesComponent } from './add-artilces/add-artilces.component';
import { ArtilcesDetailsComponent } from './artilces-details/artilces-details.component';
import { ArtilcesListComponent } from './artilces-list/artilces-list.component';
import { NotFoundComponent } from './not-found/not-found.component';

const routes: Routes = [
    {'path':'',redirectTo:"/articles",pathMatch:'full'},
    {'path':'articles/:id','component':ArtilcesDetailsComponent},
    {'path':'articles','component':ArtilcesListComponent},
    {'path':'add','component':AddArtilcesComponent},
    {'path':'**','component':NotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
