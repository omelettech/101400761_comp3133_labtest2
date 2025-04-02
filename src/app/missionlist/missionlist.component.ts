import {Component, OnInit} from '@angular/core';
import {SpacexService} from '../network/spacexapi.service';
import {Mission} from '../models/mission.model';
import {MatCardActions, MatCardModule, MatCardTitle} from '@angular/material/card';
import {CommonModule} from '@angular/common';
import {MissionfilterComponent} from '../missionfilter/missionfilter.component';
import {MatAnchor} from '@angular/material/button';
import {Router} from '@angular/router';

@Component({
  selector: 'app-missionlist',
  standalone: true,
  imports: [
    MatCardModule,
    CommonModule,
    MatCardTitle,
    MissionfilterComponent,
    MatAnchor,
    MatCardActions,
  ],
  templateUrl: './missionlist.component.html',
  styleUrls: ['./missionlist.component.css']
})
export class MissionlistComponent implements OnInit{
  missions: Mission[] = [];
  filteredMissions: Mission[] = [];

  constructor(private spaceXService: SpacexService, private router: Router) {}


  ngOnInit(): void {
    this.spaceXService.getLaunches().subscribe((data: Mission[]) => {
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
        this.filteredMissions=data
      }
    });
  }
  onFilterByYear(year: string): void {
    console.log(year)
    if (!year) {
      this.filteredMissions = this.missions; // Show all missions if no year is selected
    } else {
      this.filteredMissions = this.missions.filter(mission => mission.launch_year === year);
    }
  }
  viewMission(flightNumber: number): void {
    this.router.navigate(['/mission', flightNumber]);
  }

}
