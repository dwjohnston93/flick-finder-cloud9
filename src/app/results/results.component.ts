import { Component, OnInit } from '@angular/core';
import { MovieDbService} from '../movie-db.service';
import { SidebarComponent } from '../sidebar/sidebar.component';
import { AppUserService } from '../app-user.service';


@Component({
  selector: 'app-results',
  templateUrl: './results.component.html',
  styleUrls: ['./results.component.css']
})
export class ResultsComponent implements OnInit {

  genreResults: number;
  type: string;
  genreDisplay: any;
  
  constructor(private _movie: MovieDbService, private _appUser: AppUserService) { 
    if(this._movie.genreID) {
      this.genreResults = this._movie.genreID;
      console.log("this.genreResults", this.genreResults);
    }
    this._movie.currentGenre = {};
  }

  ngOnInit() {
    console.log('Results ID', this.genreResults)
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
  
    // displayGenre() {
    //   this._movie.getMoviesByGenre().subscribe( data =>{
    //     this.genreDisplay = data
    //     console.log("genreDisplay", this.genreDisplay); 
    //   })
    // }

}
