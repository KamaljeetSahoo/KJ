import React, {useState} from 'react'
import ProjectDetails from './ProjectDetails'

const projects_all = [
      {
        "title": "Project Omniverse",
        "startDate": "2021",
        "description": "The Omniverse will act as a subsitute to retail shopping. The product is aimed to bridge the gap between the retail shopping experience and virtual one along with its challenges upto a level that hasn't been achieved yet.",
        "images": [
          "images/Project-Omniverse/1.png",
          "images/Project-Omniverse/2.png",
          "images/Project-Omniverse/3.png",
          "images/Project-Omniverse/4.png",
          "images/Project-Omniverse/5.png",
          "images/Project-Omniverse/6.png",
        ],
        "url": "https://github.com/KamaljeetSahoo/Project-Omniverse",
        "technologies": [
          {
            "class": "devicon-react-original",
            "name": "React"
          },
          {
            "class": "devicon-javascript-plain",
            "name": "JavaScript"
          },
          {
            "class": "devicon-python-plain",
            "name": "Python"
          },
          {
            "class": "devicon-django-plain",
            "name": "Django"
          },
          {
            "class": "devicon-unity-original",
            "name": "Unity"
          }
        ]
      },
      {
        "title": "Project Aperture",
        "startDate": "2021",
        "description": "Project Aperture intends to provide an automated platform for the procedure of tagging and labelling the images by use of Image processing and Machine Learning to extract information from the images, using Convolutional Neural Networks and Natural Language Processing to generate labels and similar tags.",
        "images": [
          "images/Project-Aperture/Project-Aperture.png",
          "images/Project-Aperture/1.png",
          "images/Project-Aperture/2.png",
          "images/Project-Aperture/3.png",
          "images/Project-Aperture/4.png",
          "images/Project-Aperture/5.png",
          "images/Project-Aperture/6.png",
          "images/Project-Aperture/7.png",
        ],
        "url": "https://github.com/KamaljeetSahoo/Project-Aperture",
        "technologies": [
          {
            "class": "devicon-python-plain",
            "name": "Python"
          },
          {
            "class": "devicon-django-plain",
            "name": "Django"
          },
          {
            "class": "devicon-azure-plain-wordmark",
            "name": "Microsoft Azure"
          },
        ]
      },
      {
        "title": "April Tag Detector",
        "startDate": "2021",
        "description": "A web-based 36H11 Family April-Tag detector using your webcam",
        "images": [
          "images/AprilTag-Detector/1.gif",
          "images/AprilTag-Detector/2.png"
        ],
        "url": "https://github.com/KamaljeetSahoo/AprilTag-Detector",
        "technologies": [
          {
            "class": "devicon-javascript-plain",
            "name": "JavaScript"
          },
        ]
      },
      {
        "title": "Text to Handwriting",
        "startDate": "2021",
        "description": "The most expanded application I had opportunity to work with. I've learned many technologies and my code was reviewed by awesome curator. Application handles all adoption processess and allows to store all evidence on adopting animals from animal shelter.",
        "images": [
          "images/cat.jpeg",
          "images/cat.jpeg"
        ],
        "url": "",
        "technologies": [
          {
            "class": "devicon-angularjs-plain",
            "name": "Angular"
          },
          {
            "class": "devicon-typescript-plain",
            "name": "TypeScript"
          },
          {
            "class": "devicon-csharp-plain",
            "name": "C#"
          }
        ]
      },
]

const Projects = () => {
    const [deps, setDeps] = useState({})
    const [detailsModalShow, setDetailsModalShow] = useState(false)

    let ModalShow = (data) => {
        setDeps(data)
        setDetailsModalShow(true)
    }

    let ModalClose = () => {
        setDetailsModalShow(false)
    }

    var project_list = projects_all.map(function (p) {
        return (
            <div className="col-sm-12 col-md-6 col-lg-4" key = {p.title} style={{ cursor: "pointer" }}>
                <span className="portfolio-item d-block">
                    <div className="foto" onClick={() => ModalShow(p)}>
                        <div>
                            <img src={p.images[0]} alt="images" height="auto" width="100%" style={{marginBottom: 0, paddingBottom: 0, position: 'relative'}}/>
                            <span className="project-date">{p.startDate}</span>
                            <br/>
                            <p className="project-title-settings mt-3">
                                {p.title}
                            </p>
                        </div>
                    </div>
                </span>
            </div>
        );
    })

    return (
        <section id="portfolio">
            <div className="col-md-12 container">
                <h1 className="section-title" style={{ color: "black" }}>
                    <span>Projects</span>
                </h1>
                <div className="col-md-12 mx-auto">
            <div className="row mx-auto">{project_list}</div>
          </div>
            <ProjectDetails
                show={detailsModalShow}
                onHide={ModalClose}
                data={deps}
            />
            </div>
        </section>
    )
}

export default Projects