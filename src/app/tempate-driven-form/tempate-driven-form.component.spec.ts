import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TempateDrivenFormComponent } from './tempate-driven-form.component';

describe('TempateDrivenFormComponent', () => {
  let component: TempateDrivenFormComponent;
  let fixture: ComponentFixture<TempateDrivenFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TempateDrivenFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TempateDrivenFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
