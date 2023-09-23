import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DescripcionComponent } from './descripcion.component';

describe('DescripcionComponent', () => {
  let component: DescripcionComponent;
  let fixture: ComponentFixture<DescripcionComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DescripcionComponent]
    });
    fixture = TestBed.createComponent(DescripcionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
