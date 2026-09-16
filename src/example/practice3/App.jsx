import { Route, Routes } from "react-router-dom";
import TopNavi from "../practice3/TopNavi";
import LimJunHee from "./LimJunHee";
import Home from "./Home";
import Jin from "./Jin";
import Seokam from "./Seokam";
import Hyunmin from "./Hyunmin";

export default function App (props){

    return (<>
    <div className="layout">
        <TopNavi></TopNavi>
        <Routes>
            <Route path="/" element = {<Home/>}></Route>
            <Route path = "/limjunhee" element = {<LimJunHee />}></Route>
            <Route path="/jin" element={<Jin/>}></Route>
            <Route path="/seokam" element={<Seokam/>}></Route>
            <Route path="/hyunmin" element={<Hyunmin/>}></Route>
        </Routes>
    </div>
    </>)
}