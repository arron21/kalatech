import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DividerSquiggleComponent } from './divider-squiggle.component';

describe('DividerSquiggleComponent', () => {
  let component: DividerSquiggleComponent;
  let fixture: ComponentFixture<DividerSquiggleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DividerSquiggleComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DividerSquiggleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
