import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { IProject } from '../project';
import { ProjectService } from '../project.service';

@Component({
  selector: 'pj-project-list',
  templateUrl: './project-list.component.html',
  styleUrls: ['./project-list.component.css']
})
export class ProjectListComponent implements OnInit, OnDestroy {

  sub!: Subscription;
  projects: IProject[] = [];

  constructor(private projectService: ProjectService) { }

  ngOnInit(): void {
    this.sub = this.projectService.getProjects().subscribe({
      next: projects => this.projects = projects,
      error: err => console.log(err)
    });
  }

  ngOnDestroy(): void {
    this.sub.unsubscribe();
  }

  onOpen(): void {

  }

  onDelete(project: IProject): void {
    this.projects = this.projects.filter(p => p !== project);
  }

  onEdit(): void {

  }

}
