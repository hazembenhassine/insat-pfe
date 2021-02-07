import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Conference } from '../../../core//models/conference.model';
import { SoutenancesService } from '../../../core/services/soutenances.service';

@Component({
  selector: 'app-details-soutenance',
  templateUrl: './details-soutenance.component.html',
  styleUrls: ['./details-soutenance.component.scss']
})
export class DetailsSoutenanceComponent implements OnInit {
  id:String;
  conference:Conference;

  constructor(private activatedRoute:ActivatedRoute,private soutenanceService:SoutenancesService) { }

  ngOnInit(): void {
    this.id=this.activatedRoute.snapshot.params['id'];
    this.conference=this.soutenanceService.getConferenceById(this.id);
  }

}
