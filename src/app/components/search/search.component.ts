import { Component } from '@angular/core';
import { SpotifyService } from 'src/app/services/spotify.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss'],
})
export class SearchComponent {
  loading: boolean;
  albunes: any[] = [];
  constructor(private spotify: SpotifyService) {}

  buscar(termino: string) {
    this.loading = true;
    this.spotify.getArtistas(termino).subscribe((data: any) => {
      this.albunes = data;
      this.loading = false;
      console.log(this.albunes);
    });
  }
}
