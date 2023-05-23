import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
// import { ParagraphComponent } from './paragraph/paragraph.component';
// import { FileUploadComponent } from './file-upload/file-upload.component';
// import { SubscribeMeComponent } from './subscribe-me/subscribe-me.component';
// import { ProfileComponent } from './profile/profile.component';
// import { FilterComponent } from './filter/filter.component';
// import { UserSettingsService } from './profile/user-settings.service';
// import { MinutesToHoursPipe } from './pipe/minutes-to-hours.pipe';

import { BarraBusquedaComponent } from './barra-busqueda/barra-busqueda.component';
import { ClasePokemonService } from './clasePokemon/clasePokemon.service';
import { PokemonComponent } from './pokemon/pokemon.component';
import { ObtenerPokemonsService } from './servicioPokemon/obtenerPokemons.service';

@NgModule({
  imports: [BrowserModule, FormsModule],
  declarations: [
    AppComponent,
    // ParagraphComponent,
    // FileUploadComponent,
    // SubscribeMeComponent,
    // ProfileComponent,
    // FilterComponent,
    // MinutesToHoursPipe,
    BarraBusquedaComponent,
    // ClasePokemonService,
    PokemonComponent,
    // ObtenerPokemonsService,
  ],
  bootstrap: [AppComponent],
  providers: [ClasePokemonService, ObtenerPokemonsService],
})
export class AppModule {}
