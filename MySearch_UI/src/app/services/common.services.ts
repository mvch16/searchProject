import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { SearchService } from './search.service';

@Injectable()

export class CommonService {
  constructor(private http: HttpClient) {}

  public SearchService: SearchService = new SearchService(this.http);
}
