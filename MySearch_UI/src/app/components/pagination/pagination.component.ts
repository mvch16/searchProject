import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-pagination',
  templateUrl: './pagination.component.html',
  styleUrls: ['./pagination.component.scss'],
})
export class PaginationComponent implements OnInit {
  @Input() pageSize: number = 10;
  @Input() totalItems: number = 0;
  @Input() pageNumber: number = 1;
  @Output() pageChanged: EventEmitter<number> = new EventEmitter();

  public startItem: number = 0;
  public endItem: number = 0;

  constructor() {}

  ngOnInit(): void {}

  initIndexes = () => {
    this.endItem = this.pageSize;
    this.startItem = this.endItem - this.pageSize + 1;
  };

  getNextPage = () => {
    this.pageNumber++;
    this.pageChanged.emit(this.pageNumber);
    this.updateIndexes(this.totalItems);
  };

  getPreviousPage = () => {
    this.pageNumber--;
    this.pageChanged.emit(this.pageNumber);
    this.updateIndexes(this.totalItems);
  };

  updateIndexes = (totalElements: number) => {
    let accumulatedItems = this.pageNumber * this.pageSize;
    if (accumulatedItems > totalElements) {
      this.startItem =
        totalElements == 0 ? 0 : accumulatedItems - this.pageSize + 1;
      this.endItem = totalElements;
    } else {
      this.pageRangeStandard();
    }
  };

  pageRangeStandard = () => {
    this.endItem = this.pageNumber * this.pageSize;
    this.startItem = this.endItem - this.pageSize + 1;
  };
}
