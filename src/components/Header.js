import React, {useState} from 'react'
import Typical from 'react-typical'
import { bounce } from 'react-animations';
import Radium, {StyleRoot} from 'radium';
import Switch from "react-switch";
import ProjectDetails from './ProjectDetails';
// import Particles from 'react-particles-js';


const Header = () => {

    const [checked, setChecked] = useState(false)

    var titles = ['Kamaljeet', 'FULL STACK DEVELOPER', 'ML ENTHUSIAST']
    const HeaderTitleAnimation = React.memo( () => {
        return <Typical className="title-styles" steps={titles} loop={300} />
    }, (props, prevProps) => true);


    const handleThemeChange = () => {
        setChecked(!checked)
        var dataThemeAttribute = "data-theme";
        var body = document.body;
        var newTheme = body.getAttribute(dataThemeAttribute) === "dark" ? "light" : "dark";
        body.setAttribute(dataThemeAttribute, newTheme);
    }

    const styles = {
        bounce: {
          animation: 'x 1s',
          animationName: Radium.keyframes(bounce, 'bounce'),
          display: 'inline-block',
          height: '100'
        }
      }

    return (
        <div>
            <header id="home" style={{ height: window.innerHeight, display: 'block' }}>
                <div className="row aligner" style={{height: '100%'}}>
                    <div className="col-md-12">
                        <div>
                            <StyleRoot>
                                <div style={styles.bounce}>
                                    <span className="iconify header-icon" data-icon="carbon:user-activity" data-inline="false"></span>
                                    {/* <div className="">
                                        <Particles height="100%" width="100%"
                                        params={{
                                            "fps_limit": 10,
                                            "particles": {
                                                "collisions": {
                                                    "enable": true
                                                },
                                                "number": {
                                                    "value": 180,
                                                    "density": {
                                                        "enable": false
                                                    }
                                                },
                                                "line_linked": {
                                                    "enable": true,
                                                    "distance": 30,
                                                    "opacity": 0.4
                                                },
                                                "move": {
                                                    "speed": 1
                                                },
                                                "opacity": {
                                                    "anim": {
                                                        "enable": true,
                                                        "opacity_min": 0.05,
                                                        "speed": 1,
                                                        "sync": false
                                                    },
                                                    "value": 0.4
                                                }
                                            },
                                            "polygon": {
                                                "enable": true,
                                                "scale": 0.5,
                                                "type": "inline",
                                                "move": {
                                                    "radius": 10
                                                },
                                                "url": "shaolin.svg",
                                                "inline": {
                                                    "arrangement": "equidistant"
                                                },
                                                "draw": {
                                                    "enable": true,
                                                    "stroke": {
                                                        "color": "rgba(0, 0, 0, .2)"
                                                    }
                                                }
                                            },
                                            "retina_detect": false,
                                            "interactivity": {
                                                "events": {
                                                    "onhover": {
                                                        "enable": true,
                                                        "mode": "repulse"
                                                    }
                                                },
                                                "modes": {
                                                    "bubble": {
                                                        "size": 6,
                                                        "distance": 40
                                                    }
                                                }
                                            }
                                        }} />
                                    </div> */}
                                </div>
                            </StyleRoot>
                            <br/>
                            <h1>
                                <Typical steps={['Kamaljeet']} wrapper="p" />
                            </h1>
                            <div className="title-container">
                                <HeaderTitleAnimation/>
                            </div>
                            <Switch
                                checked={checked}
                                onChange={handleThemeChange}
                                offColor="#80afba"
                                onColor="#353535"
                                className="react-switch mx-auto"
                                width={90}
                                height={40}
                                uncheckedIcon={
                                <span
                                    className="iconify"
                                    data-icon="bx:bxs-moon"
                                    data-inline="false"
                                    style={{
                                    display: "block",
                                    height: "100%",
                                    fontSize: 25,
                                    textAlign: "end",
                                    marginLeft: "20px",
                                    color: "#353239",
                                    }}
                                ></span>
                                }
                                checkedIcon={
                                <span
                                    className="iconify"
                                    data-icon="emojione-v1:sun"
                                    data-inline="false"
                                    style={{
                                    display: "block",
                                    height: "100%",
                                    fontSize: 25,
                                    textAlign: "end",
                                    marginLeft: "10px",
                                    color: "#353239",
                                    }}
                                ></span>
                                }
                                id="icon-switch"
                            />
                        </div>
                    </div>
                </div>
            </header>
        </div>
    )
}

export default Header
