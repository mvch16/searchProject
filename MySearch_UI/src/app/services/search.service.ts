import { HttpClient } from '@angular/common/http';
import { environment } from './../../environments/environment';

export class SearchService {
  constructor(private http: HttpClient) {}

  Search(searchQuery: string, pageNumber: number, pageSize: number) {
    return this.http.get(
      environment.baseURL + `${searchQuery}/${pageNumber}/${pageSize}`
    );
  }
}
