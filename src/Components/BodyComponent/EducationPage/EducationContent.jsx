import React from 'react'

function EducationContent() {
  return (
    <>
        <h3 className="text-center fw-bold mb-3">🎓 Education</h3>
        <hr/>
               
        <div className="row align-items-center">
            <div className="col-md-4 col-12 text-center">
                <h5 className="fw-bold"><i className="bi bi-calendar"></i> 2022 - 2025</h5>
            </div>
            <div className="col-md-8 col-12">
                <div className="shadow-sm rounded-3 border-0 bg-white p-2" style={{"--bs-bg-opacity": "0.10"}}>
                    <h5 className="fw-semibold text-dark"><i className="bi bi-building"></i> Sri Lanka Institute of Advanced Technological Education</h5>
                    <p className="text-muted">(SLIATE - ATI Kurunegala)</p>
                    <p className="fw-medium">Higher National Diploma in Information Technology - (HNDIT)</p>
                    <ul className="list-unstyled">
                        <li><i className="bi bi-check-circle text-success"></i> Completed 2 years of coursework in Information Technology.</li>
                        <li><i className="bi bi-award text-warning"></i> Successfully completed a <span className="badge bg-success">6-month internship</span></li>
                        <li><i className="bi bi-hourglass-split text-danger"></i> VIVE program <span className="badge bg-secondary">Pending</span></li>
                    </ul>
                </div>
            </div>
        </div>
    </>
  )
}

export default EducationContent