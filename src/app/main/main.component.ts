import { Component, OnInit } from '@angular/core';
import { MovieDbService } from '../movie-db.service'; 
import { SidebarComponent } from '../sidebar/sidebar.component';
import { AppUserService } from '../app-user.service';


@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {

  constructor(private _movie: MovieDbService, private _appUser: AppUserService) { }

  ngOnInit() {
    this.getMainPage();
  }

  getMainPage(){
      this._movie.getPopularData()
    }
    
  addMovie(movie){
    
  console.log(movie);
    
  let favMovie = {
      original_title: movie.original_title,
      poster_path: movie.poster_path,
      release_date: movie.release_date,
      overview: movie.overview
    }
    
    this._appUser.saveMovie(favMovie).subscribe(saveMovie =>{
    console.log("addMovie", saveMovie)
      })
        
  }

}
