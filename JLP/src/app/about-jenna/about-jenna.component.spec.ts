import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AboutJennaComponent } from './about-jenna.component';

describe('AboutJennaComponent', () => {
  let component: AboutJennaComponent;
  let fixture: ComponentFixture<AboutJennaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AboutJennaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AboutJennaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
