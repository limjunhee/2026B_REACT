import { Outlet } from "react-router-dom";

export default function CommonLayout(props){
    return(<>
        <div>
            컴포넌트 헤더(Outlet)
        </div>
        <div>
            <Outlet></Outlet>
        </div>
        <div>
            컴포넌트 푸터
        </div>
    </>)
}

// <Outlet> -> 하위 컴포넌트가 표시되는 위치이다.