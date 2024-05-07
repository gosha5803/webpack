import { FC, useState } from "react";
import { MainPage } from "./Pages/MainPage";
import * as cls from './App.module.scss'
import { AppRouter } from "./router/AppRouter";
import { Link } from "react-router-dom";
import './App.scss'

export var App:FC = () => {
    var [counter, setCounter] = useState<number>(0)

    if(__PLATFORM__ === 'desktop') {
        return(
            <>
                <h1 className={cls['header']}>App</h1>
                <button onClick={() => setCounter(count => count + 1)}>Count is:{counter}</button>
                <MainPage/>
                <AppRouter/>
                <Link to={'/about'}>About</Link>
                <Link to={'/shop'}>Shop</Link>
            </>
        ) 
    } else {
        return(
            <>
                <h1>Mobile Build</h1>
            </>
        )
    }
}