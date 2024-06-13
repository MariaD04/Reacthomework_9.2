import React, { useState } from 'react';
import { usePosts } from '../contexts/PostsContext';
import { useNavigate } from 'react-router-dom';
import ClosableHeader from './ClosableHeader';
import PostCard from './PostCard';

function PostCreateOrUpdate(props) {
  const { post: initialPost = { id: 0, content: "" }, header = "Публикация", onClose } = props
  const [text, setText] = useState(initialPost.content)
  const { createPost, updatePost } = usePosts()
  const navigate = useNavigate()
  const isUpdate = initialPost.id > 0
  const navTo = isUpdate ? `/posts/${initialPost.id}` : "/"

  function handleSubmit(e) {
    e.preventDefault();
    if (isUpdate) {
      updatePost({ id: initialPost.id, content: text })
    } else {
      createPost({ id: initialPost.id, content: text })
    }
    onClose ? onClose() : navigate(navTo)
  }

  function handleChange(event) {
    const { value } = event.target
    setText(value)
  }

  return (
    <>
      <ClosableHeader onClick={onClose}>
        {header}
      </ClosableHeader>
      <PostCard post={initialPost}>
        <form>
          <div className="row">
            <textarea
              onChange={handleChange}
              value={text}
              name="text"
              required
            />
          </div>
          <div className="row">
            <button
              className={`btn-create-update ${text ? "" : "disabled"}`}
              onClick={handleSubmit}
            >
              {isUpdate ? "Сохранить" : "Опубликовать"}
            </button>
          </div>
        </form>
      </PostCard>
    </>
  );
}

export default PostCreateOrUpdate