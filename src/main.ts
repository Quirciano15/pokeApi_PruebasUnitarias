import './polyfills';
import './test/jasmine-setup';
import 'jasmine-core/lib/jasmine-core/jasmine-html.js';
import 'jasmine-core/lib/jasmine-core/boot.js';
import './test.ts';
import { AppModule } from './app/app.module';
import { platformBrowserDynamicTesting } from '@angular/platform-browser-dynamic/testing';
import { BarraBusquedaComponent } from './app/barra-busqueda/barra-busqueda.component';
import { PokemonComponent } from './app/pokemon/pokemon.component';

platformBrowserDynamicTesting()
  .bootstrapModule(AppModule)
  .then((ref) => {
    if (window['ngRef']) {
      window['ngRef'].destroy();
    }
    window['ngRef'] = ref;
  })
  .catch((err) => console.error(err));

(function bootstrap() {
  if (window['jasmineRef']) {
    location.reload();

    return;
  }

  window.onload(new Event('anything'));
  window['jasmineRef'] = jasmine.getEnv();
})();
