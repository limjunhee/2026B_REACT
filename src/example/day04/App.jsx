// 라우터 실습

import { Route, Routes } from "react-router-dom";
import Home from "./Home"
import TopNavi from "./TopNavi";
import NotFound from "./NotFound";
import CommonLayout from "./CommonLayout";
import LayoutIndex from "./LayoutIndex";
import RouterHooks from "./RouterHooks";

export default function App (props){
    return(<> 
    <TopNavi></TopNavi>
        <Routes> {/*여기에 들어가는 경로들은 주소 정의에 따라 렌더링됨*/}
            <Route path="/" element={<Home />}/>
            <Route path="*" element={<NotFound/>}></Route>
            <Route path="/intro" element={<CommonLayout/>}>
                <Route index element = {<LayoutIndex/>}/>
                <Route path="router" element={<RouterHooks/>}/>
            </Route>
        </Routes>
    </>)
}

//<Route path="/도메인이후경로(URL)" element={<컴포넌트 />}></Route>

// path에 * -> 와일드카드, 존재하지 않는 URL들을 포함