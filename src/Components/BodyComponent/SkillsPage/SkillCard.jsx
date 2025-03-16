import React from 'react'

function SkillCard(props) {
  return (
    <>
    <div className="card h-100 shadow-sm border-0 bg-white" style={{"--bs-bg-opacity": "0.10"}}>
        <div className="card-body">
            {props.children}                  
        </div>
    </div>
    </>
  )
}

export default SkillCard