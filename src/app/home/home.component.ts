import { Component, HostListener, ElementRef, Renderer2 } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css', './form.css', './section.css']
})
export class HomeComponent {
  nombreError: string = "";
  apellidoError: string = "";
  edadError: string = "";
  menuIsActive: boolean = false;

  constructor(private el: ElementRef, private renderer: Renderer2) {}

  toggleMenu() {
    this.menuIsActive = !this.menuIsActive;
  }

  @HostListener('document:click', ['$event'])
  handleDocumentClick(event: Event) {
    if (
      event.target instanceof Element &&
      this.menuIsActive &&
      !event.target.classList.contains('hamburger')
    ) {
      this.toggleMenu();
    }
  }

  verificarCaracteres(event: Event, tipoDato: string) {
    const inputElement = event.target as HTMLInputElement;
    const tamanio = inputElement.value.length;

    switch (tipoDato) {
      case "nombre":
        if (tamanio > 50) {
          this.nombreError = "El nombre debe tener menos de 50 caracteres";
        } else {
          this.nombreError = "";
        }
        break;

      case "apellido":
        if (tamanio > 50) {
          this.apellidoError = "El apellido debe tener menos de 50 caracteres";
        } else {
          this.apellidoError = "";
        }
        break;
    }
  }

  limpiarErrores() {
    this.nombreError = "";
    this.apellidoError = "";
    this.edadError = "";
  }

  verificarEdad(event: any) {
    const entrada = event.target as HTMLInputElement;
    const edad = parseInt(entrada.value, 10);

    if (isNaN(edad)) {
      this.edadError = "La edad debe ser un número entero.";
    } else if (edad > 100) {
      this.edadError = "La edad no puede ser mayor a 100";
    } else {
      this.edadError = "";
    }
  }

  esEntero(numero: string): boolean {
    return Number.isInteger(Number(numero));
  }

  observeIntersections() {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          this.renderer.addClass(entry.target, 'show');
        } else {
          this.renderer.removeClass(entry.target, 'show');
        }
      });
    });
  
    const hiddenElements = (this.el.nativeElement as HTMLElement).querySelectorAll('.hidden');
    hiddenElements.forEach((el) => {
      observer.observe(el);
    });
  }
  
  

  ngOnInit() {
    this.observeIntersections();
  }
}
