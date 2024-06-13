import React, { useContext, useState, useEffect, createContext } from "react";
const apiUrl = import.meta.env.VITE_APP_API_URL

const PostsContext = createContext();

export function PostsContextProvider({ children }) {
    const [posts, setPosts] = useState([])
    const [toggleReload, setToggleReload] = useState(false)

    useEffect(() => {
        fetch(apiUrl)
        .then((response) => response.json())
        .then((result) => {
            setPosts([...result])
        })
        }, [toggleReload])

        function reload() {
        setToggleReload((oldToggle) => !oldToggle);
    }

    const deletePost = (id) => {
        console.log("del from context", id)
        fetch(`${apiUrl}/${id}`, {
            method: "DELETE",
        }).then(() => {
            reload()})
    }

    function createPost(data) {
        fetch(apiUrl, {
            method: "POST",
            headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
        }).then(() => { reload() })
    }

    function updatePost(data) {
        fetch(`${apiUrl}/${data.id}`, {
            method: "PUT",
            headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
        }).then(() => { reload() })
    }
 
    return (
        <PostsContext.Provider value={{ posts, deletePost, createPost, updatePost }}>
            {children}
        </PostsContext.Provider>
    )
}

export function usePosts() {
    const context = useContext(PostsContext)
    if (context === undefined) {
        throw new Error("Context must be used within a Provider")
    }
    return context
}