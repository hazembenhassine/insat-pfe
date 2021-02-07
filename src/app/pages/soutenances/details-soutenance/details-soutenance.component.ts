import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SoutenancesService } from '../../../core/services/soutenances.service';
import {Conference} from "../../../core/models/conference.model";

@Component({
  selector: 'app-details-soutenance',
  templateUrl: './details-soutenance.component.html',
  styleUrls: ['./details-soutenance.component.scss']
})
export class DetailsSoutenanceComponent implements OnInit {
  id: string;
  conference:Conference;

  constructor(private activatedRoute:ActivatedRoute,private soutenanceService:SoutenancesService) { }

  ngOnInit(): void {
    this.id=this.activatedRoute.snapshot.params.id;
    // this.conference=this.soutenanceService.getConferenceById(this.id);
  }

}
