import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GraphSettingsComponent } from './graph-settings.component';

describe('GraphSettingsComponent', () => {
  let component: GraphSettingsComponent;
  let fixture: ComponentFixture<GraphSettingsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [GraphSettingsComponent]
    });
    fixture = TestBed.createComponent(GraphSettingsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
