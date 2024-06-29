import React from 'react'
import './Sidebar.css'
const Sidebar = () => {
    return (
        <>
            <div className="sidebar">
                <div className="img">
                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQv2gqxFtnddv-Lfpsu7Ddn19Vt1041sjGp1w&s" alt="" />
                </div>
                <div className="links">
                    <div className="items">
                        <span class="material-symbols-outlined">
                            home
                        </span>Home</div>
                    <div className="items">
                        <span class="material-symbols-outlined">
                            search
                        </span>Search</div>
                    <div className="items">
                        <span class="material-symbols-outlined">
                            explore
                        </span>Explore</div>
                    <div className="items">
                        <span class="material-symbols-outlined">
                            movie
                        </span>Reels</div>
                    <div className="items">
                        <span class="material-symbols-outlined">
                            message
                        </span>Message</div>
                    <div className="items">
                        <span class="material-symbols-outlined">
                            notifications
                        </span>Notification</div>
                    <div className="items">
                        <span class="material-symbols-outlined">
                            create
                        </span>Create</div>
                    <div className="items">
                        <span class="material-symbols-outlined">
                            person
                        </span>Profile</div>
                </div>
            </div>
        </>
    )
}

export default Sidebar