import { Component, OnInit } from '@angular/core';
import { SpotifyService } from 'src/app/services/spotify.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  albunes: any[] = [];
  loading: boolean;
  error = false;
  mensajeError: string;
  constructor(private spotify: SpotifyService) {
    this.loading = true;
    this.error = false;
    this.spotify.getNewRelases().subscribe(
      (data: any) => {
        this.albunes = data;
        this.loading = false;
      },
      (error) => {
        this.mensajeError = error.error.error.message;
        this.error = true;
        this.loading = false;
      }
    );
  }

  ngOnInit(): void {}
}
