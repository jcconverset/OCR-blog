import {Component, Input, OnInit} from '@angular/core';
import {Post} from '../Post';

@Component({
    selector: 'app-post-list-item',
    templateUrl: './post-list-item.component.html',
    styleUrls: ['./post-list-item.component.scss']
})
export class PostListItemComponent implements OnInit {

    @Input()
    post: Post;

    constructor() {
    }

    ngOnInit() {
    }

    onLoveIts() {
        this.post.loveIts++;
    }

    onDontLoveIts() {
        this.post.loveIts--;
    }
}
