import React from 'react'
import ProfileImage from '../ProfileImage'
import SocialMediaLinks from '../SocialMediaLinks'
import CvDownloadBtn from '../CvDownloadBtn'
import TopMainTitle from '../TopMainTitle'
import Navbar from '../Navbar'

function MainLayout(props) {
  return (
    <>
        <TopMainTitle />

        <div className="container mt-4">
            <div className="row align-items-start">
                <div className="col-12 col-md-4 mt-4 d-flex flex-column align-items-center">
                    <ProfileImage />
                    <SocialMediaLinks />
                    <CvDownloadBtn />
                
                </div>
                <div className="col-12 col-md-8 mt-4">
                    <Navbar />
                        <div className="bg-white p-4 mt-4 rounded-3 shadow-lg text-justify" style={{ "--bs-bg-opacity": "0.75" }}>
                            
                            {/* page content */}
                            {props.children}

                        </div>
                </div>
            </div> 
        </div>
                    
    </>
  )
}

export default MainLayout