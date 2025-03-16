import React from 'react'

function CvDownloadBtn() {
  return (
    <div>
        <div class="mt-3">
        {/* Download My CV Button */}
            <a href="/DilanKanishka.pdf" className="download-btn" download>
                <i className="fas fa-file-download"></i>
                    Download My CV
            </a>
        </div>
    </div>
  )
}

export default CvDownloadBtn