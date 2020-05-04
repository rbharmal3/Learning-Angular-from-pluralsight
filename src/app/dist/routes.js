"use strict";
exports.__esModule = true;
var events_list_component_1 = require("./events/events-list.component");
var event_detail_component_1 = require("./events/event-detail/event-detail.component");
var create_event_component_1 = require("./events/shared/create-event.component");
var _404_component_1 = require("./error/404.component");
var event_route_activator_component_1 = require("./events/event-detail/event-route-activator.component");
exports.appRoutes = [
    { path: 'events/new', component: create_event_component_1.CreateEventComponent, canDeactivate: ['canDeactivateCreateEvent'] },
    { path: 'events', component: events_list_component_1.EventsListComponent },
    { path: 'events/:id', component: event_detail_component_1.EventDetailComponent, canActivate: [event_route_activator_component_1.EventRouteActivator] },
    { path: '404', component: _404_component_1.Error404Component },
    { path: '', redirectTo: '/events', pathMatch: 'full' }
];
