/* * * ./app/comments/components/comment-box.component.ts * * */
// Imports
import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Comment } from '../model/comment'
import { EmmiterService } from './../../emmiter.service';
import { CommentService } from '../services/comment.service';

// Component decorator
@Component({
    selector: 'comment-box',
    template: `
      <div class="panel panel-default">
            <div class="panel-heading">{{comment.author}}</div>
            <div class="panel-body">
                {{comment.text}}
            </div>
            <div class="panel-footer">
                <button class="btn btn-info" (click)="editComment()"><span class="glyphicon glyphicon-edit"></span></button>
                <button class="btn btn-danger" (click)="deleteComment(comment.id)"><span class="glyphicon glyphicon-remove"></span></button>
            </div>
        </div>
    `
    // No providers here because they are passed down from the parent component
})
// Component class
export class CommentBoxComponent { 
    // Constructor
     constructor(
        private commentService: CommentService
        ){}

    // Define input properties
    @Input() comment: Comment;
    @Input() listId: string;
    @Input() editId:string;

    editComment() {
        // Emit edit event
        EmmiterService.get(this.editId).emit(this.comment);
    }

    deleteComment(id:string) {
        // Call removeComment() from CommentService to delete comment
        this.commentService.removeComment(id).subscribe(
                                comments => {
                                    // Emit list event
                                    EmmiterService.get(this.listId).emit(comments);
                                }, 
                                err => {
                                    // Log errors if any
                                    console.log(err);
                                });
    }
}