import React from 'react'

function GithubBtn({ link, className, btnName }) {
  return (
    <>
        <a href={link} 
            target="_blank" className={className}>
            {btnName}
        </a>
    </>
  )
}

export default GithubBtn