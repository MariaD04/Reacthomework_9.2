import React from 'react'
import { Link } from 'react-router-dom'
import LikeAndComment from '../components/LikeAndComment'
import PostCardExtended from '../components/PostCardExtended'

function HomePage({ posts = [] }) {
    return (
      <>
        <nav className="post-create">
          <Link to="/posts/new" className="btn btn-create">
            Создать пост
          </Link>
        </nav>
        {posts.map((item) => (
          <Link to={`/posts/${item.id}`} key={item.id} className="post-page">
            <PostCardExtended post={item}>
              <p className="card-text">{item.content}</p>
              <LikeAndComment />
            </PostCardExtended>
          </Link>
        ))}
      </>
    )
  }
  
  export default HomePage