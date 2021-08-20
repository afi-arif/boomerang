import React, { FC } from "react";
import MyImage from './../../assets/images/OIP.jpg';

const Home: FC = () => {
    return <main style={{ border: "1px solid red" }}>Home <img src={MyImage} /></main>
}

export default Home;