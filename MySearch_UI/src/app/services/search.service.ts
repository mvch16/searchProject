import { HttpClient } from '@angular/common/http';

export class SearchService {
  constructor(private http: HttpClient) {}

  Search(searchQuery: string, pageNumber: number, pageSize: number) {
    return this.http.get(
      `https://localhost:44306/Search/${searchQuery}/${pageNumber}/${pageSize}`
    );
  }
}
