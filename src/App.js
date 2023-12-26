import logo from './logo.svg';
import './App.css';
import { Helmet } from 'react-helmet';
import {BrowserRouter as Router, Switch, Route, Link, Routes} from "react-router-dom";
// import { BrowserRouter as Route, Route, Switch, } from "react-router-dom";
import LoginPage from "./components/page/loginPage";
import Auth from "./components/page/auth"
import Idp from "./components/page/idp"
import {useState} from "react";
import Main from "./components/page/main";


function App() {

    const [user, setUser] = useState("")
    const [username, setUsername] = useState("")

    return (
  <Router>
      <Routes>
          <Route path="/auth" element={<Idp user={user}/>}></Route>
          <Route path="/login" element={<LoginPage user={user} setUser={setUser} setUsername={setUsername}  />}></Route>
          {/*<Route path="/login" element={<Idp />}></Route>*/}
          <Route path="/index/*" element={<Main user={user} username={username} setUser={setUser} setUsername={setUsername}/>}></Route>

      </Routes>
  </Router>

  );
}
// module.exports = function (app) {
//     app.use(createProxyMiddleware('/api',
//         {
//             target:"http://localhost:9096",
//             changeOrigin:true
//         }
//     ))
// }
export default App;
