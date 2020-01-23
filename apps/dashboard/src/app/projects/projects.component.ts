import { ProjectService } from '@mdv-one/core-data';
import { Component, OnInit } from '@angular/core';
import { Project } from '@mdv-one/core-data';

@Component({
  selector: 'mdv-one-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss']
})
export class ProjectsComponent implements OnInit {
  selectedProject: Project;
  projects$;

  constructor(private ps: ProjectService) { }

  ngOnInit() {
    this.getAllProjects();
    this.resetProject();
  }

  cancelProject() {
    this.resetProject();
  }

  selectProject(project: Project) {
    this.selectedProject = project
  }

  getAllProjects() {
    this.projects$ = this.ps.all()
  }

  createProject(project: Project) {
    this.ps.create(project).subscribe((res) => {
      this.resetProject(),
      this.getAllProjects()
    })
  }

  resetProject() {
    const emptyProject: Project = {
      id: null,
      title: '',
      details: ''
    }
    this.selectProject(emptyProject);
  }

  updateProject(project: Project) {
    this.ps.update(project).subscribe((res) => {
      this.resetProject();
      this.getAllProjects();
    })
  }

  deleteProject(project: Project) {
    this.ps.delete(project).subscribe((res) => {
      this.resetProject();
      this.getAllProjects();
    })
  }

  saveProject(project: Project) {
    if(project.id) {
      return this.updateProject(project);
    } else {
      return this.createProject(project);
    }
  }
}
