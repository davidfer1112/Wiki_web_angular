import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DesarrolloComponent } from './desarrollo.component';

describe('DesarrolloComponent', () => {
  let component: DesarrolloComponent;
  let fixture: ComponentFixture<DesarrolloComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DesarrolloComponent]
    });
    fixture = TestBed.createComponent(DesarrolloComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
