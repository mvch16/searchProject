import { Component, OnInit } from '@angular/core';
import { SearchController } from '../../../controllers/search.controller';

@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.scss'],
})
export class SearchBarComponent implements OnInit {
  constructor(private searchController: SearchController) {}

  ngOnInit(): void {
    this.searchController.GetDummyData().subscribe(data =>{
      console.log(data)
    })
  }
}
