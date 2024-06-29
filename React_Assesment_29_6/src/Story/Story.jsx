import React from 'react'
import './Story.css'
const Story = () => {
    return (
        <>
            <div className="story">
                <div className="items">
                    <img src="https://cdn.pixabay.com/photo/2023/10/05/12/03/ai-generated-8295822_640.jpg" alt="" />
                    <p>superman</p>
                </div>
                <div className="items">
                    <img src="https://cdn.pixabay.com/photo/2023/09/02/18/24/ai-generated-8229394_640.png" alt="" />
                    <p>ironman</p>
                </div>
                <div className="items">
                    <img src="https://cdn.pixabay.com/photo/2024/01/15/11/36/batman-8510027_640.png" alt="" />
                    <p>batman</p>
                </div>
                <div className="items">
                    <img src="https://cdn.pixabay.com/photo/2024/02/24/15/43/ai-generated-8594264_1280.jpg" alt="" />
                    <p>thor</p>
                </div>
                <div className="items">
                    <img src="https://cdn.pixabay.com/photo/2023/06/28/20/04/ai-generated-8095123_640.png" alt="" />
                    <p>hulk</p>
                </div>
                <div className="items">
                    <img src="https://cdn.pixabay.com/photo/2023/06/28/19/34/ai-generated-8095071_640.png" alt="" />
                    <p>spiderman</p>
                </div>
                <div className="items">
                    <img className='cb' src="https://cdn.pixabay.com/photo/2018/01/01/07/30/sketch-3053682_1280.png" alt="" />
                    <p>chota_bheem</p>
                </div>
            </div>
        </>
    )
}

export default Story