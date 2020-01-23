import { Component, Output, Input, EventEmitter } from '@angular/core';
import { Project } from '@mdv-one/core-data'

@Component({
  selector: 'mdv-one-project-details',
  templateUrl: './project-detials.component.html',
  styleUrls: ['./project-detials.component.scss']
})
export class ProjectDetialsComponent {
  currentProject: Project;
  originalTitle;

  @Output() saved = new EventEmitter;
  @Output() cancelled = new EventEmitter;
  @Input() set project(value) {
    if(value) this.originalTitle = value.title;
      this.currentProject = Object.assign({}, value)
  }
  constructor() { }

  save(project) {
    this.saved.emit(project)
  }

  cancel() {
    this.cancelled.emit();
  }
}
