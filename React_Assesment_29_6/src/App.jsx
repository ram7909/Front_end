import React from 'react'
import Sidebar from './Sidebar/Sidebar.jsx'
import Story from './Story/Story.jsx'
import Post from './Posts-/Post.jsx'
import Message from './Message/Message.jsx'
const App = () => {
  return (
    <>
      <div className="main" style={{ display: 'flex' }}>
        <Sidebar />
        <div className="section">
          <Story />
          <Post />
        </div>
        <Message />
      </div>
    </>
  )
}

export default App