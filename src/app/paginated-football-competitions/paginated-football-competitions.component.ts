import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Component } from '@angular/core';
import { catchError, of, tap } from 'rxjs';
interface Competition {
  name: string;
  country: string;
  year: number;
  winner: string;
  runnerup: string;
}

interface ApiResponse {
  page: number;
  per_page: number;
  total: number;
  total_pages: number;
  data: Competition[];
}
@Component({
  selector: 'app-paginated-football-competitions',
  templateUrl: './paginated-football-competitions.component.html',
  styleUrls: ['./paginated-football-competitions.component.scss']
})
export class PaginatedFootballCompetitionsComponent {
  apiUrl = 'https://jsonmock.hackerrank.com/api/football_competitions';
  competitions: Competition[] = [];
  currentPage: number = 1;
  totalPage: number = 100;

  constructor(private http: HttpClient) {
  }

  ngOnInit() {
    this.getCompetitons(this.currentPage);
  }


  getCompetitons(page: number) {
    this.http.get<ApiResponse>(`${this.apiUrl}?page=${page}`).pipe(
      catchError(err => {
        console.log(err);
        return of(null);
      })
    ).subscribe((res: any) => {
      this.totalPage = res.total_pages;
      this.competitions = res.data;
    })
  }

  goToPage(page: number): void {
    if (page >= 1 && page <= this.totalPage) {
      this.getCompetitons(page);
    }
  }

  get getPagesArray(): number[] {
    return Array.from({ length: this.totalPage }, (_, i) => i + 1);
  }
}
