import React from 'react'
import ClosableHeader from './ClosableHeader'
import PostCardExtended from './PostCardExtended'

export default function PostView(props) {
    const { post, onEdit, onDelete } = props
    return (
        <>
            <ClosableHeader />
            <PostCardExtended post={post} />
            <div className="post-card-controls">
                <button className="btn btn-change" onClick={onEdit}>Изменить</button>
                <button className="btn btn-delete" onClick={() => { onDelete(post.id) }}>Удалить</button>
            </div>
        </>
    );
}