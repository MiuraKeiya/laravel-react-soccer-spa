import { useEffect, useState } from "react";
import axios from "axios";
import { HomeTemplate } from "../components/templates/Home/HomeTemplate";
import { GamesDate } from "../components/organisms/Home/GamesDate";
import { Header } from "../components/organisms/Header";
import { Footer } from "../components/atoms/footer/Footer";

export const HomePage = () => {
    return (
        <HomeTemplate header={<Header />} footer={<Footer />}>
            <GamesDate />
        </HomeTemplate>
    );
};
