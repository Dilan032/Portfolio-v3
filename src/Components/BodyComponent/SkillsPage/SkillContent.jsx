import React from 'react'
import SkillCard from './SkillCard'

function SkillContent() {
  return (
    <>
    
        <h3 className="text-center fw-bold">👨‍🎓 Skills</h3>
        <hr />

        {/* first row */}
        <div className="row mt-4 px-2">
          <div className="col">
            <SkillCard>
              <h5 classNameName="card-title fw-bold">Frontend</h5>
                  <p classNameName="card-text">
                    <ul>
                        <li>Html & Css</li>
                        <li>React.js <small>(Learning)</small></li>
                        <li>ShadCN/UI<small>(Learning)</small></li>
                        <li>Tailwind css</li>
                        <li>Bootstrap</li>
                    </ul>
                  </p>                             
            </SkillCard>
          </div>
          <div className="col">
            <SkillCard>
            <h5 class="card-title fw-bold">Backend</h5>
                <p class="card-text">
                   <ul>
                       <li>Laravel</li>
                       <li>Node.js & Express.js</li>
                       <li>MySQL</li>
                       <li>API Development</li>
                    </ul>
                </p>
            </SkillCard>
          </div>
        </div>

        {/* scond row */}
        <div className="row mt-4 px-2">
          <div className="col">
            <SkillCard>
              <h5 class="card-title fw-bold">Tools</h5>
                  <p class="card-text">
                    <ul>
                        <li>Git</li>
                        <li>Postman</li>
                        <li>Figma</li>
                        <li>SQLyog</li>
                      </ul>
                  </p>
              </SkillCard>
          </div>
          <div className="col">
              <SkillCard>
                <h5 class="card-title fw-bold">Soft Skills</h5>
                    <p class="card-text">
                      <ul>
                          <li>Teamwork & Collaboration</li>
                          <li>Creative Thinking</li>
                        </ul>
                    </p>
                </SkillCard>
          </div>
        </div>





    </>
  )
}

export default SkillContent