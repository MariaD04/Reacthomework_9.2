import React from 'react'
import moment from 'moment/moment'
import smile from "../assets/smile.png"

function PostCard(props) {
    const { post } = props
    
    return (
        <div className="post-card-container">
                <div className="user-data">
                    <img className="user-img" src={smile} alt="smile" width="50px" />
                    <h5 className="user-name">Имя пользователя</h5>
                </div>
                <p className="post-card-created-time">  
                    { post && post.created && moment(post.created).locale("ru").fromNow() }
                </p>
            <div className="post-card-body">{props.children}</div>
        </div>
    )
}
    
export default PostCard
