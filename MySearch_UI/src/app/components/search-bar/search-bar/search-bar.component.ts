import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.scss'],
})
export class SearchBarComponent implements OnInit {

  public querySearch: string = "";

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  search = () => {
    this.router.navigate(["search", this.querySearch])
  }

}
