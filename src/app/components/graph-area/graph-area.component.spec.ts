import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GraphAreaComponent } from './graph-area.component';

describe('GraphAreaComponent', () => {
  let component: GraphAreaComponent;
  let fixture: ComponentFixture<GraphAreaComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [GraphAreaComponent]
    });
    fixture = TestBed.createComponent(GraphAreaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
