import {Component} from '@angular/core';
import {SpacexService} from '../network/spacexapi.service';
import {Mission} from '../models/mission.model';
import {MatCardModule} from '@angular/material/card';
import {CommonModule} from '@angular/common';

@Component({
  selector: 'app-missionlist',
  standalone: true,
  imports: [
    MatCardModule,
    CommonModule,
  ],
  templateUrl: './missionlist.component.html',
  styleUrls: ['./missionlist.component.css']
})
export class MissionlistComponent {
  missions: Mission[] = [];

  constructor(private spacexService: SpacexService) {
  }

  ngOnInit(): void {
    this.spacexService.getLaunches().subscribe((data: Mission[]) => {
      if(!data){
        this.missions = [
          {
            flight_number: 110,
            mission_name: "Starlink 5",
            launch_year: "2024",
            details: "Starlink mission to deploy satellites.",
            rocket: {
              rocket_name: "Falcon 9",
              rocket_type: "FT"
            },
            links: {
              mission_patch_small: "https://example.com/patch.png",
              article_link: "https://example.com/article",
              wikipedia: "https://en.wikipedia.org/wiki/Starlink",
              video_link: "https://youtube.com/video"
            }
          }
          ]
      }else{
        // Actual data
        this.missions = data;
      }
    });
  }
}
