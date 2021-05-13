import { HttpClient } from '@angular/common/http';

export class SearchService {
  constructor(private http: HttpClient) {}

  GetDummyData() {
    return this.http.get('https://localhost:44306/WeatherForecast');
  }
}
