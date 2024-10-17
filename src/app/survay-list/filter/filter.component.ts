import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.scss']
})
export class FilterComponent {
  @Input() filterType: string = '';
  @Input() filterValues: string[] = [];

  @Output() onFilterSelected: EventEmitter<string> = new EventEmitter<string>();

  selectedFilter: string = '';


  onSelectFilter(filter: string) {
    this.selectedFilter = (this.selectedFilter == filter) ? '' : filter;
    this.onFilterSelected.emit(this.selectedFilter);
  }

}
