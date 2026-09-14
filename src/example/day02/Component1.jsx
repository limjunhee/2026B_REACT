// example/day02/Component1.jsx

// 컴포넌트 모듈화 관련 실습

import FrontComp from "./Components/FrontComp";
import BackComp from "./Components/BackComp";
function App(props){
    return(<>
        <h2>React-Modules</h2>
        <ol>
            <FrontComp onMyEvent1={() => {
                alert('프론트엔드 클릭됨(부모전달)')
            }}></FrontComp>
            <BackComp onMyEvent2={(msg) =>{
                alert(msg);
            }}/>
        </ol>
    </>)
}

export default App;