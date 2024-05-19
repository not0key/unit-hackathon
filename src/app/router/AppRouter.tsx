import { Route, Routes } from "react-router-dom";
import { Suspense } from "react";
import { AppRoute } from "@/app/constants/AppRoute.ts";
import {
  AboutProduct,
  Authorization,
  CatalogProducts
} from "@/pages";
import { LayoutApp } from "@/components";

const AppRouter = () => {
  return(
    <Suspense fallback={<div>Загрузка...</div>}>
      <Routes>
        <Route path="/" element={<LayoutApp />}>
          <Route path={AppRoute.CATALOG_PRODUCTS} element={<CatalogProducts />} />
          <Route path={AppRoute.ABOUT_PRODUCT} element={<AboutProduct />} />
          <Route path={AppRoute.AUTHORIZATION} element={<Authorization />} />
        </Route>
      </Routes>
    </Suspense>
  )
}

export default AppRouter
