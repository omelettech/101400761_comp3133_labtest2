import { Routes } from '@angular/router';
import { MissionlistComponent } from './missionlist/missionlist.component';
import { MissiondetailsComponent } from './missiondetails/missiondetails.component';

export const routes: Routes = [

  { path: 'missions', component: MissionlistComponent }, // Mission list
  { path: 'mission/:id', component: MissiondetailsComponent } // Mission details
];
