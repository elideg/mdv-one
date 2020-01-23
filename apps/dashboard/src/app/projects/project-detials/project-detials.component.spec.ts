import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProjectDetialsComponent } from './project-detials.component';

describe('ProjectDetialsComponent', () => {
  let component: ProjectDetialsComponent;
  let fixture: ComponentFixture<ProjectDetialsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProjectDetialsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProjectDetialsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
