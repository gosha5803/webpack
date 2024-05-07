import { FC, Suspense } from "react";
import { Route, Routes } from "react-router-dom";
import { LazyShopPage } from "../Pages/ShopPage.lazy";
import { LazyAboutPage } from "../Pages/AboutPage.lazy";

export var AppRouter:FC = () => {
    return(
        <Suspense fallback={'Loading...'}>
            <Routes>
                    <Route path="/shop" element={<LazyShopPage/>}/>
                    <Route path="/about" element={<LazyAboutPage/>}/>
            </Routes>
        </Suspense>
    )
}