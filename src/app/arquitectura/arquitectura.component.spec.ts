import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ArquitecturaComponent } from './arquitectura.component';

describe('ArquitecturaComponent', () => {
  let component: ArquitecturaComponent;
  let fixture: ComponentFixture<ArquitecturaComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ArquitecturaComponent]
    });
    fixture = TestBed.createComponent(ArquitecturaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
