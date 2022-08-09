import React from 'react'
import { PostContainer,PostTitle,PostBody  } from './Post.style'
const Post = ({post}) => {
  return (
    <PostContainer>
        <PostTitle>
            {post.title}
        </PostTitle>
         <PostBody>
            {post.body}
         </PostBody>
    </PostContainer>
  )
}

export default Post