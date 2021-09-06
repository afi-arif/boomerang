import React, { FC } from "react";
import Header from "../parts/header";
import Footer from "../parts/footer";


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