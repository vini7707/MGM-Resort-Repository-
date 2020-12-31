import React, { useState, useEffect } from 'react';
import axios from 'axios';

function ApicallFun() {
    const [posts, setPosts] = useState([])

    useEffect(() => {
        axios.get("https://jsonplaceholder.typicode.com/users")
            .then((res) => {
                console.log(res)
                setPosts(res.data)
            })
            .catch((err) => {
                console.log(err)
            })
    }, [])

    return (
        <div >
            <ul>
                {
                    posts.map((post, i) => (
                        <p>
                            <li>
                                {i}-----
                                {post.name}----
                                {post.username}
                            </li>
                        </p>
                    ))
                }
            </ul>

        </div>
    );
}
export default ApicallFun;