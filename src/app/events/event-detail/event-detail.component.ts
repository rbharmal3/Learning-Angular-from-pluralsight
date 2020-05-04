import { Component, OnInit } from '@angular/core';
import { EventService } from '../shared/event.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  templateUrl:'./event-detail.component.html',
  styles:[`
  .container{padding:0 20px}
  .image-class{height:100px}
  `]
})
export class EventDetailComponent implements OnInit
{
   event:any

   constructor(private eventService:EventService, private route:ActivatedRoute){}
   ngOnInit(){
     this.event= this.eventService.getEvent(
       +this.route.snapshot.params['id']
     );
   }

}