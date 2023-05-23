import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { PokemonComponent } from './pokemon.component';
import { ObtenerPokemonsService } from '../servicioPokemon/obtenerPokemons.service';
import { BarraBusquedaComponent } from '../barra-busqueda/barra-busqueda.component';
import { ClasePokemonService } from '../clasePokemon/clasePokemon.service';

describe('PokemonComponent', () => {
  let component: PokemonComponent;
  let fixture: ComponentFixture<PokemonComponent>;
  let clasePokemonService: ClasePokemonService;
  let obtenerPokemonsService: ObtenerPokemonsService;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PokemonComponent, BarraBusquedaComponent],
      imports: [CommonModule, FormsModule, HttpClientModule],
      providers: [ObtenerPokemonsService, ClasePokemonService],
    }).compileComponents();
    clasePokemonService = TestBed.get(ClasePokemonService);
    obtenerPokemonsService = TestBed.get(ObtenerPokemonsService);
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PokemonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('deberia funcionar el servicio de la clase para crear objetos pokemon', () => {
    expect(clasePokemonService).toBeTruthy();
  });

  it('deberia funcionar el servicio de la API', () => {
    expect(obtenerPokemonsService).toBeTruthy();
  });

  it('debería incluir la propiedad "name"', (done: DoneFn) => {
    obtenerPokemonsService.getPokemons(1).subscribe((response: any) => {
      expect(response.name).toBeDefined();
      done();
    });
  });

  it('deberia crear el componente pokemon', () => {
    expect(component).toBeTruthy();
  });

  it('deberia inicializar arrayPokemons y arrayPokemonsFiltrado', () => {
    expect(component.arrayPokemons).toBeDefined();
    expect(component.arrayPokemonsFiltrado).toBeDefined();
  });

  it('deberia llamar getPokemonsComponente en la inicializacionn', () => {
    spyOn(component, 'getPokemonsComponente');
    component.ngOnInit();
    expect(component.getPokemonsComponente).toHaveBeenCalled();
  });

  it('deberia llenar arrayPokemons con pokemons', (done: DoneFn) => {
    component.getPokemonsComponente();
    fixture.whenStable().then(() => {
      expect(component.arrayPokemons.length).toBeGreaterThan(0);
      done();
    });
  });

  it('deberia asignar arrayPokemonsFiltrado que sea igual a arrayPokemons si la busqueda esta vacia', () => {
    const searchText = '';
    component.arrayPokemons = [
      { nombre: 'Pikachu' },
      { nombre: 'Charizard' },
      { nombre: 'Bulbasaur' },
    ];
    component.onChange(searchText);
    expect(component.arrayPokemonsFiltrado).toEqual(component.arrayPokemons);
  });

  it('filtra arrayPokemonsFiltrado segun lo que haya en la busqueda', () => {
    const searchText = 'chu';
    component.arrayPokemons = [
      { nombre: 'Pikachu' },
      { nombre: 'Charizard' },
      { nombre: 'Bulbasaur' },
    ];
    component.onChange(searchText);
    expect(component.arrayPokemonsFiltrado.length).toBe(1);
    expect(component.arrayPokemonsFiltrado[0].nombre).toBe('Pikachu');
  });
});
