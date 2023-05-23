import './app/paragraph/paragraph.component.spec.ts';
import './app/file-upload/file-upload.component.spec.ts';
import './app/subscribe-me/subscribe-me.component.spec';
// import './app/profile/profile.component.spec';
import './app/filter/filter.component.spec';
import './app/pipe/minutes-to-hours.pipe.spec.ts';

import { getTestBed } from '@angular/core/testing';
import {
  BrowserDynamicTestingModule,
  platformBrowserDynamicTesting,
} from '@angular/platform-browser-dynamic/testing';

// The TestBed creates a dynamically-constructed Angular test module that emulates an Angular @NgModule
getTestBed().resetTestEnvironment();

// First, initialize the Angular testing environment.
getTestBed().initTestEnvironment(
  BrowserDynamicTestingModule,
  platformBrowserDynamicTesting()
);

// declare const require: any;
// const context = require.context('./', true, /\.spec\.ts$/);
// context.keys().map(context);
