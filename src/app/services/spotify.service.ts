import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
//IMPORTACION DE MAP QUE AYUDA A FILTRAR LA INFORMACION EN BRUTO Y TRAERNOS SOLO LO QUE NECESITAMOS
import { map } from 'rxjs/operators';
@Injectable({
  providedIn: 'root',
})
export class SpotifyService {
  URL_API = 'https://api.spotify.com/v1/';
  API_KEY =
    'Bearer BQD4dl9dgSkQbHNKsmK_d0WzDEpUI0ccAI7rQTVkxrbvceQOz1UOb1LnLTAli2VLouPMV-rPk-DEWjqgvdA';
  constructor(private http: HttpClient) {}
  getQuery(query: string) {
    const url = `${this.URL_API}${query}`;
    const headers = new HttpHeaders({
      Authorization: `${this.API_KEY}`,
    });
    return this.http.get(url, { headers });
    ///
  }
  getNewRelases() {
    return this.getQuery('browse/new-releases').pipe(
      map((data: any) => data.albums.items)
    );
  }

  getArtistas(termino: string) {
    return this.getQuery(`search?q=${termino}&type=artist&limit=15`).pipe(
      map((data: any) => data.artists.items)
    );
  }

  getArtistaId(id: string) {
    return this.getQuery(`artists/${id}`);
  }

  getTopTraskS(id: string) {
    return this.getQuery(`artists/${id}/top-tracks?country=es`).pipe(
      map((data: any) => data.tracks)
    );
  }
}
