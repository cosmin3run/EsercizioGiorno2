import { Component, OnInit } from '@angular/core';
import { PostsService } from 'src/app/service/posts.service';
import { Post } from 'src/app/models/post';

@Component({
  selector: 'app-post-attivi',
  templateUrl: './post-attivi.component.html',
  styleUrls: ['./post-attivi.component.scss']
})

export class PostAttiviComponent implements OnInit {
postsArr: Post[] = []

  constructor(private postSrv: PostsService) {
    this.postSrv.getPosts().then(postArr => {
      this.postsArr = postArr;
      console.log(this.postsArr);
      
    })

   }

  ngOnInit(): void {
  }

}
