import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';

import { BarraBusquedaComponent } from './barra-busqueda/barra-busqueda.component';
import { ClasePokemonService } from './clasePokemon/clasePokemon.service';
import { PokemonComponent } from './pokemon/pokemon.component';
import { ObtenerPokemonsService } from './servicioPokemon/obtenerPokemons.service';

@NgModule({
  imports: [BrowserModule, FormsModule, HttpClientModule],
  declarations: [AppComponent, BarraBusquedaComponent, PokemonComponent],
  bootstrap: [AppComponent],
  providers: [ClasePokemonService, ObtenerPokemonsService],
})
export class AppModule {}
