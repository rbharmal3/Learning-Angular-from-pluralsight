"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
var core_1 = require("@angular/core");
var EventThumbnailComponent = /** @class */ (function () {
    function EventThumbnailComponent() {
    }
    EventThumbnailComponent.prototype.getStartClass = function () {
        if (this.event && this.event.time === '8:00 am')
            return ['green', 'bold'];
        return [];
    };
    __decorate([
        core_1.Input()
    ], EventThumbnailComponent.prototype, "event");
    EventThumbnailComponent = __decorate([
        core_1.Component({
            selector: 'event-thumbnail',
            template: "\n \n  <div [routerLink]=\"['/events',event.id]\" class=\"well hoverwell thumbnail\">\n        <h2>{{event?.name}}</h2>\n        <div>Date: {{event?.date}}</div>\n        <div [ngClass]=\"getStartClass()\" [ngSwitch]=\"event?.time\">\n             Time: {{event?.time}}\n             <span *ngSwitchCase=\"'8:00 am'\">(Early start)</span>\n             <span *ngSwitchCase=\"'10:00 am'\">(Late start)</span>\n             <span *ngSwitchDefault>(Normal start)</span>\n        \n        </div>\n        <div>Price: {{event?.price | currency}}</div>\n        <div *ngIf=\"event?.location\">\n            <span>Location: {{event?.location?.address}}</span>\n           \n            <span class=\"pad-left\">{{event?.location?.city}},{{event?.location?.country}}</span>\n        </div>\n        <div *ngIf=\"event?.onlineUrl\">\n        OnlineUrl: {{event?.onlineUrl}}\n        </div>\n      \n    </div>\n  ",
            styles: ["\n   .green{color:#003300 !important;}\n   .bold{font-weight:bold;}\n   .thumbnail{min-height:210px;}\n   .pad-left{margin-left:10px;}\n   .well div{color:#bbb;}\n  \n  "]
        })
    ], EventThumbnailComponent);
    return EventThumbnailComponent;
}());
exports.EventThumbnailComponent = EventThumbnailComponent;
