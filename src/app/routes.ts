import{Routes} from '@angular/router'
import { EventsListComponent } from './events/events-list.component'
import { EventDetailComponent } from './events/event-detail/event-detail.component'
import { CreateEventComponent } from './events/shared/create-event.component'
import { Error404Component } from './error/404.component'
import { EventRouteActivator } from './events/event-detail/event-route-activator.component'

export const appRoutes:Routes=[
  {path:'events/new',component:CreateEventComponent, canDeactivate:['canDeactivateCreateEvent']},
  {path:'events',component:EventsListComponent},
  {path:'events/:id', component:EventDetailComponent,canActivate:[EventRouteActivator]},
  {path:'404',component:Error404Component},
  {path:'', redirectTo:'/events', pathMatch:'full'}
]