import { Component } from '@angular/core';

@Component({
  selector: 'app-survay-list',
  templateUrl: './survay-list.component.html',
  styleUrls: ['./survay-list.component.scss']
})

export class SurvayListComponent {
  statuses: string[] = ['All', 'Active', 'Completed'];
  categories: string[] = ['Development', 'Workplace', 'Hardware'];
  filteredList: any[] = [];

  status = 'status';
  category = "category";

  surveyList: any[] = [
    {
      title: "Designer Survey",
      category: "Workplace",
      status: "Active",
      label: "New Framework",
    },
    {
      title: "Developer Survey",
      category: "Development",
      status: "Active",
      label: "Education",
    },
    {
      title: "Backend Survey",
      category: "Hardware",
      status: "Completed",
      label: "Personal",
    }
  ];

  selectedStatus: string = 'All';
  selectedCategory: string = '';

  ngOnInit() {
    this.filteredList = this.surveyList;
  }

  onFilterSelected(filter: string, type: string) {
    this.selectedStatus = (type === 'status') ? filter : this.selectedStatus;
    this.selectedCategory = (type === 'category') ? filter : this.selectedCategory;

    if (!this.selectedStatus || this.selectedStatus === 'All') {
      this.filteredList = [...this.surveyList];
    } else {
      this.filteredList = this.surveyList.filter(survey => survey.status === this.selectedStatus);
    }

    if (this.selectedCategory) {
      this.filteredList = this.filteredList.filter(survey => survey.category === this.selectedCategory);
    }
  }
}
