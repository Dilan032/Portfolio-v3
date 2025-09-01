import React from 'react'
import profileImg from '../assets/profileImg.webp'

function ProfileImage() {
  return (
    <div>
        {/* Profile Image Container */}
        <div className="position-relative p-3 rounded-circle mb-4" style={{ background: "rgba(255, 255, 255, 0.2)", backdropFilter: "blur(10px)", boxShadow: "0px 10px 30px rgba(0,0,0,0.1)"}}>
            <img src={profileImg} alt="Dilan Kanishka - Software Engineer in Sri Lanka" loading="lazy" className="img-fluid rounded-circle shadow" />
        </div>

        {/* name */}
        <div className='text-center text-white'>
            <span>Aspiring Junior software engineer</span>
            <h2>Dilan Kanishka</h2>
        </div>
    </div>
  )
}

export default ProfileImage