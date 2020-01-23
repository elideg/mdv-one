import { CoreDataModule } from '@mdv-one/core-data';
import { MaterialModule } from '@mdv-one/material';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { ProjectsComponent } from './projects/projects.component';
import { ProjectsListComponent } from './projects/projects-list/projects-list.component';
import { ProjectDetialsComponent } from './projects/project-detials/project-detials.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [AppComponent, ProjectsComponent, ProjectsListComponent, ProjectDetialsComponent],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    MaterialModule,
    HttpClientModule,
    CoreDataModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
