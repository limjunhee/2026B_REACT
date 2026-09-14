import { useState } from "react";
import FrontComp from "./Components2/FrontComp";
import BackComp from "./Components2/BackComp";

function App(){
    const [mode, setMode] = useState('both');
    const handleSetMode = (mode) => { // 상태 변경을 위한 함수 정의
        setMode(mode);
    };

    let contents = ''; // 컴포넌트 저장용 변수

    if(mode === 'front'){
        //상태에 따른 분기로 FrontComp, BackComp 그리기.
        contents = <>
            <FrontComp onSetMode={(mode)=>{
                setMode(mode); // setMode로 mode값 변경
            }}></FrontComp>
        </>
    } else if(mode === 'back'){
        contents = <>
            <BackComp setMode={setMode} />
        </>
    } else{
        contents = <>
            <FrontComp onSetMode={(mode) => {
                handleSetMode(mode);                {/*상태 변경을 위한 함수 실행*/ }
            }}></FrontComp>
            <BackComp setMode={handleSetMode} /> {/*상태 변경을 위한 함수 실행*/}
        </>
    }

    return (<>
        <h2><a href="/" onClick={(event) => {
            event.preventDefault();
            setMode('both')
        }}>React-State</a></h2>
        <ol>
            {contents}
        </ol>
    </>)
}

export default App