import { Link, NavLink } from "react-router-dom"
import "./index.css";

export default function TopNavi(props) {
    return (<>
        <div>
            <div className="topNavi">
                <h1> 4조 팀 프로젝트 </h1>
                <Link to="/"> 홈(공통) </Link>
                <h4> 팀원 소개 </h4>
                <Link to="/limjunhee"> 임준희 </Link>
                <NavLink to="/jin"> 장형진 </NavLink>
                <NavLink to="/seokam"> 주석암 </NavLink>
                <NavLink to="/hyunmin"> 박현민 </NavLink>
            </div>
        </div>
    </>)
}