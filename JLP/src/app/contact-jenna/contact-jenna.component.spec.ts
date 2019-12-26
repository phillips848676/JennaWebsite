import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ContactJennaComponent } from './contact-jenna.component';

describe('ContactJennaComponent', () => {
  let component: ContactJennaComponent;
  let fixture: ComponentFixture<ContactJennaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ContactJennaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ContactJennaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
