import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SpotifyService } from 'src/app/services/spotify.service';
@Component({
  selector: 'app-artista',
  templateUrl: './artista.component.html',
  styleUrls: ['./artista.component.scss'],
})
export class ArtistaComponent {
  loading: boolean;
  artista: any = {};
  topTrash: any[] = [];
  constructor(
    private routaActiva: ActivatedRoute,
    private spotify: SpotifyService
  ) {
    this.loading = true;
    this.routaActiva.params.subscribe((params) => {
      this.getArtistaId(params['id']);
      this.getTopTrask(params['id']);
    });
  }

  getArtistaId(id: string) {
    this.loading = true;
    this.spotify.getArtistaId(id).subscribe((data) => {
      this.artista = data;
      console.log(data);
      this.loading = false;
    });
  }
  getTopTrask(id: string) {
    this.loading = true;
    this.spotify.getTopTraskS(id).subscribe((data) => {
      this.topTrash = data;
      console.log('caciones', this.topTrash);
      this.loading = false;
    });
  }
}
