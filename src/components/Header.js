import React, {useState} from 'react'
import Typical from 'react-typical'
import Switch from "react-switch";


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
    return (
        <div>
            <header id="home" style={{ height: window.innerHeight, display: 'block' }}>
                <div className="row aligner" style={{height: '100%'}}>
                    <div className="col-md-12">
                        <div>
                            <span className="iconify header-icon" data-icon="carbon:user-activity" data-inline="false"></span>
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
                                offColor="#baaa80"
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
