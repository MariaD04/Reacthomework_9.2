import React from 'react'
import PostCard from './PostCard'
import LikeAndComment from './LikeAndComment'

function PostCardExtended(param) {
    return (
        <PostCard post={param.post}>
            <p className="card-text">{param.post && param.post.content}</p>
            <LikeAndComment />
        </PostCard>
    )
}

export default PostCardExtended
