import { Component, Output, EventEmitter } from '@angular/core';
import {MatFormField, MatInput, MatLabel} from '@angular/material/input';
import {FormsModule} from '@angular/forms';

@Component({
  standalone: true,
  selector: 'app-missionfilter',
  templateUrl: './missionfilter.component.html',
  imports: [
    MatFormField,
    MatLabel,
    MatInput,
    FormsModule
  ],
  styleUrls: ['./missionfilter.component.css']
})
export class MissionfilterComponent {
  selectedYear: string = '';

  // Emit the selected year to the parent component
  @Output() filterByYear = new EventEmitter<string>();

  onYearChange() {
    this.filterByYear.emit(this.selectedYear); // Emit the selected year
  }
}
