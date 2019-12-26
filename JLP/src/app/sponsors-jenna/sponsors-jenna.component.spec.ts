import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SponsorsJennaComponent } from './sponsors-jenna.component';

describe('SponsorsJennaComponent', () => {
  let component: SponsorsJennaComponent;
  let fixture: ComponentFixture<SponsorsJennaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SponsorsJennaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SponsorsJennaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
