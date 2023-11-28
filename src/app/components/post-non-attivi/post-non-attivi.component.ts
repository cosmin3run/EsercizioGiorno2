import { Component, OnInit } from '@angular/core';
import { PostsService } from 'src/app/service/posts.service';
import { Post } from 'src/app/models/post';

@Component({
  selector: 'app-post-non-attivi',
  templateUrl: './post-non-attivi.component.html',
  styleUrls: ['./post-non-attivi.component.scss']
})

export class PostNonAttiviComponent implements OnInit {
postsArr: Post[] = []
  constructor(private postSrv: PostsService) {
    this.postSrv.getPosts().then(postArr => {
      this.postsArr = postArr;
    })
   }

  ngOnInit(): void {
  }

}
