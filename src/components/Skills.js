import React from 'react'

const Skills = () => {
    const skills_list = {
        "icons": [
          {
            "name": "Python",
            "class": "devicon-python-plain",
          },
          {
            "name": "HTML 5",
            "class": "devicon-html5-plain",
            "level": "95"
          },
          {
            "name": "CSS 3",
            "class": "devicon-css3-plain",
            "level": "95"
          },
          {
            "name": "Bootstrap",
            "class": "devicon-bootstrap-plain",
            "level": "80"
          },
          {
            "name": "JavaScript",
            "class": "devicon-javascript-plain",
            "level": "90"
          },
          {
            "name": "React",
            "class": "devicon-react-original",
            "level": "70"
          },
          {
            "name": "Sass",
            "class": "devicon-sass-original",
            "level": "75"
          },
          {
            "name": "Bootstrap",
            "class": "devicon-bootstrap-plain",
            "level": "85"
          },
          {
            "name": "Django",
            "class": "devicon-django-plain",
            "level": "65"
          },
          {
            "name": "MySql",
            "class": "devicon-mysql-plain",
            "level": "60"
          },
          {
            "name": "GIT",
            "class": "devicon-git-plain"
          },
          {
            "name": "GitHub",
            "class": "devicon-github-original"
          },
          {
            "name": "Heroku",
            "class": "devicon-heroku-original"
          }
        ]
      }

    const SkillListComponent = 
        skills_list["icons"].map((item, index) => {
            return (
                <li className="list-inline-item mx-3" key={index}>
                    <span>
                        <div className="text-center skills-tile">
                            <i className={item.class} style={{ fontSize: "220%" }}>
                                <p className="text-center" style={{ fontSize: "30%", marginTop: "4px" }}>
                                    {item.name}
                                </p>
                            </i>
                        </div>
                    </span>
                </li>
            )
        })
    
    
    return (
        <section id="skills">
            <div className="col-md-12">
                <div className="col-md-12">
                    <h1 className="section-title">
                    <span className="text-white">Skills</span>
                    </h1>
                </div>
                <div className="col-md-12 text-center">
                    <ul className="list-inline mx-auto skill-icon">
                        {SkillListComponent}
                    </ul>
                </div>
            </div>
        </section>
    )
}

export default Skills
