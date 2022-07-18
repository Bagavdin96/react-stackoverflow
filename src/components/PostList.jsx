import React from 'react';
import { PostItem } from './PostItem';

export function PostList({posts}) {
  return (
    <div>
      {
        posts.map((post, i) => (
          <PostItem key={i+1} post={post}/>
        ))
      }
    </div>
  );
}

