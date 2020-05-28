import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
//importacion para peticiones HTTP
import { HttpClientModule } from '@angular/common/http';
//services en la nueva actualizacion de angular los servicios vienen en su decorador con el providedIn: 'root', que hace que no alla necesidad de importalo en el app.module
//components de mi aplicacion
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { SearchComponent } from './components/search/search.component';
import { ArtistaComponent } from './components/artista/artista.component';
import { NabvarComponent } from './components/shared/nabvar/nabvar.component';
import { TargetasComponent } from './components/targetas/targetas.component';
import { LoadingComponent } from './components/shared/loading/loading.component';
//rutas de mi aplicacion
import { ROUTES } from './app.routes';
//pipes de mi aplicacion
import { NoimagePipe } from './pipes/noimage.pipe';
import { DomseguroPipe } from './pipes/domseguro.pipe';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    SearchComponent,
    ArtistaComponent,
    NabvarComponent,
    DomseguroPipe,
    NoimagePipe,
    TargetasComponent,
    LoadingComponent,
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(ROUTES, { useHash: true }),
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
