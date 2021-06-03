import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ForOFourComponent } from './for-o-four.component';

describe('ForOFourComponent', () => {
  let component: ForOFourComponent;
  let fixture: ComponentFixture<ForOFourComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ForOFourComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ForOFourComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
