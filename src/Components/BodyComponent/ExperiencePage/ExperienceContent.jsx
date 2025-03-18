import React from 'react'

function ExperienceContent() {
  return (
    <>
    <h3 className="text-center fw-bold">👨‍💻 Experience</h3>
    <hr />

    {/* Experience Item */}
    <div className="experience">
        <div className="shadow-sm rounded-3 border-0 bg-white text-center py-2" style={{"--bs-bg-opacity": "0.10"}}>
            <h3 className="fw-bold">Software Engineer Intern</h3>
            <h5 className="fw-bold">Nanosoft Solutions (Pvt)Ltd</h5>

            <p><span className="fw-semibold">From:</span> 2024/08/01 <span className="fw-semibold">To:</span> 2025/01/31 
            <br />
            <mark>(6 months)</mark>
            </p>
            <a href="https://www.google.com/search?kgmid=/g/11g88y5jp0&hl=en-LK&q=Nanosoft+Solutions+(Pvt)+Limited.&shndl=30&source=sh/x/loc/osrp/m5/4&kgs=7cd23548cd4f8c59"
            target="_blank" className="text-decoration-none">
            No - 277/A, Gattuwana Road, Kurunegala↗ </a>
        </div>

        <br />

        <p><span className="fs-5 fw-semibold">🔰 What I Learned</span> 
        <br />
        During my internship, I expanded my technical skills and learned several new technologies:</p>
        <ul>
            <li>Node.js & Express.js</li>
            <li>React.js</li>
            <li>Tailwind CSS & ShadUI</li>
            <li>Postman</li>
            <li>SQLyog</li>
            <li>API Development</li>
            <li>Git & GitHub</li>
        </ul>


        <p><span className="fs-5 fw-semibold">🔰 What I Worked On</span> 
        <br />
        Before this internship, I had a basic understanding of Laravel and completed a small project. During my time at Nanosoft Solutions, I gained hands-on experience by working on various projects:</p>

        <ul>
            <li><span className="fw-semibold">Developed three full-stack web applications using Laravel:</span>
                <ul>
                    <li>
                        <a className="text-decoration-none" href="https://github.com/Dilan032/Bank-Complaining-Web-Appilaction" target="_blank">Bank Complaining System↗</a>
                    </li>
                    <li>
                        <a className="text-decoration-none" href="https://github.com/Dilan032/Task-Management-web-system" target="_blank">Task Management System↗</a>
                    </li>
                    <li> 
                        <a className="text-decoration-none" href="https://github.com/Dilan032/Loyalty-application" target="_blank">Loyalty Program System↗</a>
                    </li>
                </ul>
                </li>

                <br />

            <li><span className="fw-semibold">Designed and deployed three APIs using Node.js for mobile applications:</span>
                <ul>
                    <li>
                        <a className="text-decoration-none" href="https://github.com/Dilan032/API-for-Cash-Collector-Mobile-App" target="_blank">Cash Collector API↗</a>
                    </li>
                    <li>
                        <a className="text-decoration-none" href="https://github.com/Dilan032/API-for-holcemlk-banker-dataentry" target="_blank">Bank Data Entry API↗</a>
                    </li>
                    <li>
                        <a className="text-decoration-none" href="https://github.com/Dilan032/nanosoft_banker_images_API" target="_blank">Nanosoft Bank Image API↗</a>
                    </li>
                 </ul>
            </li>
        </ul>

        <ul>
            <li><span className="fw-semibold">Last two weeks of internship:</span> Started learning React.js, Tailwind CSS, and ShadUI to develop an online payment web application <span className="fw-semibold"><small>(nPay Wallet)</small></span>. Although I was unable to complete it before the end of my internship, the project gave me experience in modern front-end development.
                <a className="text-decoration-none" href="https://github.com/Dilan032/nPay-wallet" target="_blank"><small>GitHub repo↗</small></a>
            </li>
        </ul>

    </div>
                 
    </>
  )
}

export default ExperienceContent