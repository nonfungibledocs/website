import React, { Fragment, useContext, useEffect, useState } from "react"
import { Route, Routes, Link, Outlet, BrowserRouter, useNavigate } from "react-router-dom"
import ReactDOM from "react-dom/client";
import Header from "./partials/Header";
import Footer from "./partials/Footer";
import Home from "./Home";
import App from "./App";
import pico from './pico.min.css'
import styles from './styles.module.css'
import './index.css'
import {UserContext, UserProvider} from "./context.js";

const NotFoundPage = () => {
  return (<p>Not found</p>)
};

const Layout = ({onLogout, brand}) => {
  const {theme} = useContext(UserContext);
  return (<>
    <article className={styles.softwareasaservicedashboard} data-theme={theme}>
      <Header brand={brand} className={pico.container} onLogout={onLogout}></Header>
      <main className={"container " + styles.softwareasaservicedashboard.outlet}><br />
        <Outlet theme={theme} />
      </main>
      <Footer></Footer>
    </article>
  </>)
}

const Page = ({children}) => {
  return (<div className={styles.softwareasaservicedashboard}>
      <div className={pico.container}>
        <div className={pico.row}>
            {children}
        </div>
      </div>
  </div>)
}

const Mvp = ({ brand, home, settings, login, header, children, onLogin, onError }) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [user, setUser] = useState();
  const [theme, setTheme] = useState("light");
  const userContext = useContext(UserContext);
  const loggingIn = (credentials) => {
    setIsLoggedIn(credentials);
  };
  const loggingOut = () => {
    setIsLoggedIn(false);
    setUser(null);
  };
  useEffect(() => {
    if (isLoggedIn) {
      const accessToken = isLoggedIn.credential || isLoggedIn.access_token;
      fetch(
        "https://www.googleapis.com/oauth2/v3/userinfo", {
          headers: {
            Authorization: `Bearer ${accessToken}`
          },
          method: 'GET'
        }).then((res) => {
          return res.json();
        }).then((_user) => {
          setUser(_user);
        }).catch((err) => {
          if(onError){
            onError({login:err});
          }
        });
    }
  }, [isLoggedIn]);

  useEffect(()=> {
    if(onLogin && user){
      onLogin(user);
      userContext.setUser(user);
    }
  }, [user]);

  return (<UserContext.Provider value = {{theme, setTheme }}>
        <BrowserRouter>
          <Routes>
            {/* Route for Layout wrapping all other pages */}
            <Route element={<Layout>{header}</Layout>}>
              <Route index element={<Page><Home /></Page>} />
              <Route path="/talk" element={<Page><Home /></Page>} />
            </Route>

            {/* Route for /app without Layout */}
            <Route path="/v2" element={<Page><App /></Page>} />
          </Routes>
        </BrowserRouter>
  </UserContext.Provider>)
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Mvp />
  </React.StrictMode>
);
