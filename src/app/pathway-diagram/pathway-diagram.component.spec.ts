import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PathwayDiagramComponent } from './pathway-diagram.component';

describe('PathwayDiagramComponent', () => {
  let component: PathwayDiagramComponent;
  let fixture: ComponentFixture<PathwayDiagramComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PathwayDiagramComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PathwayDiagramComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
