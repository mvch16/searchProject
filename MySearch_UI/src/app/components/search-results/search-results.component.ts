import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { SearchController } from 'src/app/controllers/search.controller';

@Component({
  selector: 'app-search-results',
  templateUrl: './search-results.component.html',
  styleUrls: ['./search-results.component.scss']
})
export class SearchResultsComponent implements OnInit {

  public querySearch: string = "";
  public pageNumber: number = 1;

  constructor(private route: ActivatedRoute, private searchController: SearchController, private router: Router) { 
    this.router.routeReuseStrategy.shouldReuseRoute = () => false;
  }

  ngOnInit(): void {
    this.route.params.subscribe((params: Params) => {
      this.querySearch = params.querySearch;
    });

    this.loadResults();
  }


  loadResults = () => {
    this.searchController.GetDummyData(this.querySearch, this.pageNumber).subscribe(data => {
      console.log(data);
    })
  }

}
