import { Injectable } from '@angular/core';
import { Post } from '../models/post';

@Injectable({
  providedIn: 'root'
})
export class PostsService {

posts: Post[] = []
  constructor() { }
async getPosts() {
  return await(await fetch('../../assets/db.json')).json()
}

}
