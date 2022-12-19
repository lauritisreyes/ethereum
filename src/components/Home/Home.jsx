
import { Details } from "./Details/Details"
import { Header } from "./../Header/Header"
import { Intro } from "./Intro/Intro"
import { Start } from "./Start/Start"
import { Footer } from "../Footer/Footer"
import { Explore } from "./Explore/Explore"
import { Contribute } from "./Contribute/Contribute"



export const Home = () => {


    return (
        <>
            <Header/>
            <Intro/>
            <Start/>
            <Details/>
            <Explore/>
            <Contribute/>
            <Footer/>
        </>
    )
}
