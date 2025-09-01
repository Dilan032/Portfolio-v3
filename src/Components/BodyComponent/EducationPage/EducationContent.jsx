import React from 'react'

function EducationContent() {
  return (
    <>
        <h3 className="text-center fw-bold mb-3">🎓 Education</h3>
        <hr/>
               
        <div className="row align-items-center">
            <div className="col-md-12 col-12">
                <div className="shadow-sm rounded-3 border border-0 bg-white p-2 mb-2" style={{"--bs-bg-opacity": "0.10"}}>
                    <h5 className="fw-semibold"><i className="bi bi-building"></i> 
                    Sri Lanka Institute of Advanced Technological Education
                    <br />
                    (SLIATE - ATI Kurunegala)
                    </h5>
                </div>
                <ul>
                    <li>2022 - 2025</li>
                    <li>
                        <p className="fw-medium">Higher National Diploma in Information Technology - (HNDIT)</p>
                    </li>
                </ul>
                <ul className="list">
                    <li><i className="bi bi-check-circle text-success"></i> Completed 2 years of coursework in Information Technology.</li>
                    <li><i className="bi bi-award text-warning"></i> Successfully completed a <span className="badge bg-success">6-month internship</span></li>
                    <li><i className="bi bi-hourglass-split text-danger"></i> Completed Cose examinations; results pending.</li>
                </ul>
                <br />        
            </div>
            <br /><br />
        </div>
        <br /><br />
    </>
  )
}

export default EducationContent