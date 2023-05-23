import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { BarraBusquedaComponent } from './barra-busqueda.component';

describe('BarraBusquedaComponent', () => {
  let component: BarraBusquedaComponent;
  let fixture: ComponentFixture<BarraBusquedaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [BarraBusquedaComponent],
      imports: [CommonModule, FormsModule],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BarraBusquedaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('deberia crear el componente BarraBusqueda', () => {
    expect(component).toBeTruthy();
  });

  it('deberia inicializar textBusaqueda', () => {
    expect(component.textBusaqueda).toEqual('');
  });

  it('deberia emitir el evento cuando la function buscarFunction es llamda', () => {
    spyOn(component.eventoChange, 'emit');
    component.textBusaqueda = 'search term';
    component.buscarFunction();
    expect(component.eventoChange.emit).toHaveBeenCalledWith('search term');
  });
});
