import { HttpClient } from '@angular/common/http';

export class SearchService {
  constructor(private http: HttpClient) {}

  GetDummyData(searchQuery: string, pageNumber: number) {
    return this.http.get(
      `https://localhost:44306/Search/${searchQuery}/${pageNumber}`
    );
  }
}
