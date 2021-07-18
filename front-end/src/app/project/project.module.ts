import { NgModule } from '@angular/core';
import { ProjectListComponent } from './list/project-list.component';
import { RouterModule } from '@angular/router';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [
    ProjectListComponent
  ],
  imports: [
    RouterModule.forChild([
      { path: 'projects', component: ProjectListComponent }
    ]),
    SharedModule
  ]
})
export class ProjectModule { }
