import { CommonModule } from '@angular/common';
import { Component, } from '@angular/core';
import { RouterOutlet,  } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { lastValueFrom } from 'rxjs'
import { FormsModule } from '@angular/forms';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, CommonModule, FormsModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  
  result = false;

  artist : string = "";

  constructor( public http: HttpClient){}

  async searchArtist():Promise<void>{
    this.result = true;

    // Requête ici !
    let x = await lastValueFrom(this.http.get("http://ws.audioscrobbler.com/2.0/?method=artist.getinfo&artist=Vayb&api_key=e34ebf8561ba7c653a21d1d99a1a0070&format=json"));
    console.log(x);
    
    
  }

  newSearch():void{
    this.result = false;
  }

}
