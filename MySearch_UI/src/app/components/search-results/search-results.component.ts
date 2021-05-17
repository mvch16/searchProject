import { Component, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { SearchController } from 'src/app/controllers/search.controller';
import { PaginationComponent } from '../pagination/pagination.component';

@Component({
  selector: 'app-search-results',
  templateUrl: './search-results.component.html',
  styleUrls: ['./search-results.component.scss'],
})
export class SearchResultsComponent implements OnInit {
  @ViewChild(PaginationComponent)
  pagination: PaginationComponent = new PaginationComponent();

  public querySearch: string = '';
  public searchResult: any;
  public totalItems: number = 0;
  public pageSize: number = 10;
  public pageNumber: number = 1;

  constructor(
    private route: ActivatedRoute,
    private searchController: SearchController,
    private router: Router
  ) {
    this.router.routeReuseStrategy.shouldReuseRoute = () => false;
  }

  ngOnInit(): void {
    this.route.params.subscribe((params: Params) => {
      this.querySearch = params.querySearch;
    });

    this.loadResults();
  }

  loadResults = () => {
    this.searchController
      .Search(this.querySearch, this.pageNumber, this.pageSize)
      .subscribe((data: any) => {
        if (data) {
          this.searchResult = data.response.docs;
          this.totalItems = data.response.numFound;
          this.pagination.updateIndexes(this.totalItems);
        }
      });
  };

  pageChanged = (pageNumber: number): void => {
    this.pageNumber = pageNumber;
    this.loadResults();
  };

  isCurrency = (categoryList: Array<string>) => {
    categoryList.forEach((category) => {
      if (category === 'currency') return true;
      return false;
    });
  };
}
