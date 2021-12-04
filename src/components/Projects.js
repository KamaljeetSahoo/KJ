import React, {useState} from 'react'
import ProjectDetails from './ProjectDetails'

const projects_all = [
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
        "title": "Photography",
        "startDate": "2018",
        "description": "Personal project for study subject. I was responsible for testing photography application that optimizes images with popular algorithms used by graphic editors like Pixlr or Adobe Photoshop. I've earned A grade :)",
        "images": [
          "images/cat.jpeg",
          "images/cat.jpeg"
        ],
        "url": "https://github.com",
        "technologies": [
          {
            "class": "devicon-react-original",
            "name": "React"
          },
          {
            "class": "devicon-javascript-plain",
            "name": "JavaScript"
          }
        ]
      },
      {
        "title": "3D Object Viewer",
        "startDate": "2015",
        "description": "One of the first apps I was working on my internship. I had to develop front-end implementation for app that shows 3D models of known buildings. This was also my first project in Angular framework. I've learned a lot!",
        "images": [
          "images/cat.jpeg",
          "images/cat.jpeg"
        ],
        "url": "https://github.com",
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
            <div className="col-md-12">
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