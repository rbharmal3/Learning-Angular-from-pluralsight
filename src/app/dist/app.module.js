"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
var platform_browser_1 = require("@angular/platform-browser");
var core_1 = require("@angular/core");
var events_app_component_1 = require("./events-app.component");
var events_list_component_1 = require("./events/events-list.component");
var event_thumbnail_component_1 = require("./events/event-thumbnail.component");
var navbar_component_1 = require("./nav/navbar.component");
var event_service_1 = require("./events/shared/event.service");
var toastr_service_1 = require("./common/toastr.service");
var event_detail_component_1 = require("./events/event-detail/event-detail.component");
var router_1 = require("@angular/router");
var routes_1 = require("./routes");
var create_event_component_1 = require("./events/shared/create-event.component");
var _404_component_1 = require("./error/404.component");
var event_route_activator_component_1 = require("./events/event-detail/event-route-activator.component");
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        core_1.NgModule({
            declarations: [
                events_app_component_1.EventsAppComponent,
                events_list_component_1.EventsListComponent,
                event_thumbnail_component_1.EventThumbnailComponent,
                navbar_component_1.NavBarComponent,
                event_detail_component_1.EventDetailComponent,
                create_event_component_1.CreateEventComponent,
                _404_component_1.Error404Component
            ],
            imports: [
                platform_browser_1.BrowserModule,
                router_1.RouterModule.forRoot(routes_1.appRoutes)
            ],
            providers: [event_service_1.EventService,
                toastr_service_1.ToastrService,
                event_route_activator_component_1.EventRouteActivator,
                {
                    provide: 'canDeactivateCreateEvent',
                    useValue: checkDirtyState
                }
            ],
            bootstrap: [events_app_component_1.EventsAppComponent]
        })
    ], AppModule);
    return AppModule;
}());
exports.AppModule = AppModule;
function checkDirtyState(component) {
    if (component.isDirty)
        return window.confirm('You have not saved this event, Do you really want to cancel?');
    return true;
}
exports.checkDirtyState = checkDirtyState;
