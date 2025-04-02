import {Component, Input, OnInit} from '@angular/core';
import {Mission} from '../models/mission.model';
import {MatCardActions, MatCardModule, MatCardTitle} from '@angular/material/card';
import {CommonModule} from '@angular/common';
import {MissionfilterComponent} from '../missionfilter/missionfilter.component';
import {MatAnchor} from '@angular/material/button';
import {ActivatedRoute} from '@angular/router';
import {SpacexService} from '../network/spacexapi.service';

@Component({
  selector: 'app-missiondetails',
  imports: [
    MatCardModule,
    CommonModule,
    MatCardTitle,
    MatAnchor,
    MatCardActions,
  ],
  templateUrl: './missiondetails.component.html',
  styleUrl: './missiondetails.component.css'
})
export class MissionDetailsComponent implements OnInit {
  mission: any;

  constructor(private route: ActivatedRoute, private spaceXService: SpacexService) {}

  ngOnInit(): void {
    const flightNumber = this.route.snapshot.paramMap.get('id');
    if (flightNumber) {
      this.spaceXService.getMissionById(parseInt(flightNumber)).subscribe((data) => {
        this.mission = data;
      });
    }
  }
}

