import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent }  from './app.component';
import { FormsModule }    from '@angular/forms';
import { HttpModule, JsonpModule } from '@angular/http';

import { CommentModule } from './Comments/comment.module';
import { EmmiterService }          from './emmiter.service';

@NgModule({
  imports:      [ BrowserModule,FormsModule,JsonpModule,HttpModule,CommentModule ],
  declarations: [ AppComponent ],
  bootstrap:    [ AppComponent ],
  providers:[EmmiterService]
})
export class AppModule { }
