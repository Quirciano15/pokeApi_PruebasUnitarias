import {
  HttpClientTestingModule,
  HttpTestingController,
} from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';
import { ObtenerPokemonsService } from './obtenerPokemons.service';

describe('ObtenerPokemonsService', () => {
  let service: ObtenerPokemonsService;
  let httpMock: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [ObtenerPokemonsService],
    });
    service = TestBed.inject(ObtenerPokemonsService);
    httpMock = TestBed.inject(HttpTestingController);
  });

  afterEach(() => {
    httpMock.verify();
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should send GET request to the correct URL', () => {
    const index = 1;
    const pokemonData = { name: 'Pikachu' };

    service.getPokemons(index).subscribe((data) => {
      expect(data).toEqual(pokemonData);
    });

    const req = httpMock.expectOne(
      `https://pokeapi.co/api/v2/pokemon/${index}`
    );
    expect(req.request.method).toBe('GET');
    req.flush(pokemonData);
  });
});
