import "../modules/navBar"
import "../modules/security"
import "../modules/profile"
import NavBar from "../modules/navBar";
import {BrowserRouter as Router, Route, Routes} from "react-router-dom";
import Idp from "./idp";
import LoginPage from "./loginPage";
import Profile from "../modules/profile";
import Security from "../modules/security";

function main (props) {
    const username = "哈哈"
    props.setUser("1322")
    props.setUsername("好好")
    // alert(props.username)
    return <>
        <NavBar username={props.username}/>
        <div className="main-container">
            {/*<Router>*/}
                <Routes>
                    <Route path="/security" element={<Security/>}></Route>
                    <Route path="/profile" element={<Profile />}></Route>
                    <Route path="/*" element={<Profile />}></Route>

                </Routes>
            {/*</Router>*/}
        </div>
    </>
}

export default main