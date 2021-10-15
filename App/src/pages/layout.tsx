import React, { FC } from "react";
import Header from "../parts/header";
import Footer from "../parts/footer";
/* eslint-disable @typescript-eslint/no-explicit-any*/
const cache: any = {};

const importAll = (r: any) => {
    r.keys().forEach((key: any) => (cache[key] = r(key)));
}
importAll(require.context('./../assets/images/', true, /\.(png|jpg|jpeg|gif|svg)$/));
/* eslint-disable @typescript-eslint/no-explicit-any*/

const Layout: FC = ({ children }) => {
    return (
        <section>
            <Header />
            {children}
            <Footer />
        </section >
    )
}
export default Layout;