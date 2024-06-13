import React from 'react'
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useParams } from 'react-router-dom';
import { usePosts } from '../contexts/PostsContext';
import ClosableHeader from '../components/ClosableHeader';
import PostCreateOrUpdate from '../components/PostCreateOrUpdate';
import PostView from '../components/PostView';

function PostRoute() {
    const [edit, setEdit] = useState(false)
    const { posts, deletePost } = usePosts()
    const navigate = useNavigate()
    const { pId } = useParams()
    const post = posts.find((item) => Number(item.id) === Number(pId))
    const doCreateNew = pId === "new"
    
    function handleDelete(id) {
        deletePost(id)
        navigate("/")
    }
    
    const handleEdit = () => {
        setEdit(true)
    }
    
    const handleCloseEdit = () => {
        setEdit(false)
    }
    
    function NotFound() {
        return <ClosableHeader onClose={handleCloseEdit}>Публикация не найдена</ClosableHeader>
    }
    
    return (
        <>
            {doCreateNew ? (
                <PostCreateOrUpdate />
            ) : post && edit ? (
                <PostCreateOrUpdate
                    post={post}
                    onClose={handleCloseEdit}
                    header="Редактировать"
                />
            ) : post ? (
                <PostView post={post} onEdit={handleEdit} onDelete={handleDelete} />
            ) : (
                <NotFound />
            )}
        </>
    )
}

export default PostRoute 