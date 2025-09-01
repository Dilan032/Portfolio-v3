import React from 'react'

function SocialMediaLinks() {
  return (
    <div>
         {/* Social Media Links  */}
        <div className="social-icons">
            <a href="https://www.linkedin.com/in/wpddilan" target="_blank" className="linkedin" aria-label="Dilan Kanishka on LinkedIn">
                <i className="fab fa-linkedin"></i>
            </a>
            <a href="https://github.com/dilan032" target="_blank" className="github" aria-label="Dilan Kanishka GitHub Profile">
                <i className="fab fa-github"></i>
            </a>
            <a href="https://wa.me/94779922985" target="_blank" className="whatsapp" aria-label="Chat with Dilan Kanishka on WhatsApp">
                <i className="fab fa-whatsapp"></i>
            </a>
            <a href="mailto:dilankanishka032@gmail.com" className="email" aria-label="Email Dilan Kanishka">
                <i className="fas fa-envelope"></i>
            </a>
        </div>
    </div>
  )
}

export default SocialMediaLinks