import { Component } from '@angular/core';
import { SpacexService } from '../spacexapi.service';
import { Mission } from '../models/mission.model';

@Component({
  selector: 'app-missionlist',
  standalone: true,
  imports: [],
  templateUrl: './missionlist.component.html',
  styleUrls: ['./missionlist.component.scss']
})
export class MissionlistComponent {
  missions: Mission[] = [];

  constructor(private spacexService: SpacexService) {}

  ngOnInit(): void {
    this.spacexService.getLaunches().subscribe((data: Mission[]) => {
      this.missions = data;
    });
  }
}
