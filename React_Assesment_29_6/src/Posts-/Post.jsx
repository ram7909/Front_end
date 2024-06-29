import React from 'react'
import './Post.css'
const Post = () => {
    return (
        <>
            <div className="post">
                <div className="sub-post">
                    <div className="head">
                        <div className="f">
                            <div className="item">
                                <img className='p-img' src="https://cdn.pixabay.com/photo/2023/06/28/19/34/ai-generated-8095071_640.png" alt="" />
                            </div>
                            <div className="items">
                                <p>spiderman</p>
                            </div>
                        </div>
                        <div className="items">
                            <span class="material-symbols-outlined">
                                more_vert
                            </span>
                        </div>
                    </div>
                    <div className="imgs">
                        <img src="https://cdn.pixabay.com/photo/2020/09/11/00/06/spiderman-5561671_640.jpg" alt="" />
                    </div>
                    <div className="bottom">
                        <div className="first">
                            <span class="material-symbols-outlined">
                                favorite
                            </span>
                            <span class="material-symbols-outlined">
                                comment
                            </span>
                            <span class="material-symbols-outlined">
                                send
                            </span>
                        </div>
                        <div className="second">
                        <span class="material-symbols-outlined">
                                bookmark
                            </span>
                        </div>
                    </div>
                    <div className="b2">
                        3,158 likes
                    </div>
                </div>

            </div>
        </>
    )
}

export default Post