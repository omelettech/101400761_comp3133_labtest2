import {Component} from '@angular/core';
import {RouterModule, RouterOutlet} from '@angular/router';
import {CommonModule} from '@angular/common';
import {MatButtonModule} from '@angular/material/button';
import {FormsModule} from '@angular/forms';
import {MissionfilterComponent} from './missionfilter/missionfilter.component';

@Component({
  imports: [RouterOutlet, RouterModule, CommonModule, MatButtonModule, FormsModule ],
  selector: 'app-root',
  styleUrl: './app.component.css',
  templateUrl: './app.component.html'
})
export class AppComponent {
  title = 'frontend';
}
