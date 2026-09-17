// p171 생명주기 실습

import { Route, Routes } from "react-router-dom";
import TopNavi from "./TopNavi";
import Lifecycle from "./Lifecycle";
import ApiFetcher from "./ApiFetcher"

export default function App(props) {
    return (<>
        생명주기 실습
        <TopNavi></TopNavi>
        <Routes>
            <Route path="/" element={<Lifecycle/>}></Route>
            <Route path="/external" element={<ApiFetcher/>}></Route>
        </Routes>
    </>)
}