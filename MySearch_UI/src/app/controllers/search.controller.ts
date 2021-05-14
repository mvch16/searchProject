import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { CommonService } from '../services/common.services';

@NgModule({
  declarations: [],
  imports: [CommonModule],
})
export class SearchController {
  constructor(private commonService: CommonService) {}

  GetDummyData(querySearch: string, pageNumber: number) {
    return this.commonService.SearchService.GetDummyData(
      querySearch,
      pageNumber
    );
  }
}