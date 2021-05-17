import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { CommonService } from '../services/common.services';

@NgModule({
  declarations: [],
  imports: [CommonModule],
})
export class SearchController {
  constructor(private commonService: CommonService) {}

  Search(querySearch: string, pageNumber: number, pageSize: number) {
    return this.commonService.SearchService.Search(
      querySearch,
      pageNumber,
      pageSize
    );
  }
}
