import React, {Suspense, useContext, useState} from 'react';
import './styles/index.scss';
import {Link, Route, Routes} from "react-router-dom";
import {AboutPageAsync} from "./pages/AboutPage/AboutPage.async";
import {MainPageAsync} from "./pages/MainPage/MainPage.async";
import ThemeProvider from "./theme/ThemeProvider";
import {Theme, ThemeContext} from "./theme/ThemeContext";
import {useTheme} from "./theme/useTheme";
import {classNames} from "./helpers/classNames";

const App = () => {
  const {theme, toggleTheme} = useTheme()

  return (
    <div className={classNames('app', {hovered: true, selected: true}, [theme, 'cls1', 'cls2'])}>
      <button onClick={toggleTheme}>TOGGLE</button>
      <Link to={"/about"}>About</Link>
      <Link to={"/"}>Main</Link>
      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          <Route path={'/about'} element={<AboutPageAsync/>}/>
          <Route path={'/'} element={<MainPageAsync/>}/>
        </Routes>
      </Suspense>
    </div>
  );
};

export default App;
