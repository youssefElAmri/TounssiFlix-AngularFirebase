import { MovieService } from '../../services/movie.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  movies = [];
  page = 1;
  totalPages = 2;
  loading = true;
  query = '';
  constructor(private movieService: MovieService) {}

  ngOnInit(): void {
    this.getMovies();
  }
  getMovies(): void {
    this.loading = true;
    this.movieService
      .getMovies({ page: this.page, sort_by: 'popularity.desc' })
      .subscribe(
        (data) => {
          this.movies = [...this.movies, ...data.results];
          this.totalPages = data.total_pages;
          this.loading = false;
        },
        (error) => {
          this.loading = false;
          alert(error.message);
        }
      );
  }
  getSearchMovie(): void {
    this.loading = true;
    this.movieService
      .searchMovies({
        page: this.page,
        query: this.query,
        sort_by: 'popularity.desc',
      })
      .subscribe(
        (data) => {
          this.movies = [...this.movies, ...data.results];
          this.totalPages = data.total_pages;
          this.loading = false;
        },
        (error) => {
          this.loading = false;
          alert(error.message);
        }
      );
  }

  onSearch(text): void {
    this.query = text;
    this.movies = [];
    this.page = 1;
    if (this.query) {
      this.getSearchMovie();
    } else {
      this.getMovies();
    }
  }
  onLoadMore(): void {
    this.page++;
    if (!this.query) {
      this.getMovies();
    } else {
      this.getSearchMovie();
    }
  }
}
