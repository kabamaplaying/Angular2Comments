/* * * ./app/comments/app.component.ts * * */
// Imports
import { Component } from '@angular/core';
import { CommentComponent } from './Comments/components/index'

@Component({
    selector: 'my-app',

    template: `
        <h1>Comments</h1>

        <comment-widget></comment-widget>
        `,
     
})
export class AppComponent { }