import { useRef, useState } from "react";

export default function UseRefExam1 (props) {
    const [stateNum, setStateNum] = useState(0); // 1. 상태 변수 생성
    const refNum = useRef(0)                     // 2. Ref 변수 생성
    let myNum = 0;                               // 3. 일반 변수 생성

    const plusState = () => { // 상태 변수를 1 증가시키는 함수를 정의함
        setStateNum( stateNum + 1 );
        console.log('State 증가!', stateNum);
    };

    const plusRef = () => { // Ref를 1 증가시키는 함수를 정의함
        refNum.current = refNum.current + 1;
        console.log('Ref 증가!', refNum.current);
    };

    const plusMyNum = () => { // 일반 변수를 1 증가시키는 함수 정의
        console.log('일반 변수증가', ++myNum);
    };

    return(<>
        <h2> useRef 사용하기1 </h2>
        <div>
            <p> State : {stateNum} </p>
            <p> Ref : {refNum.current} </p>
            <p> myNum : {myNum} </p>
            <button onClick={plusState}> State증가 </button>
            <button onClick={plusRef}> Ref증가 </button>
            <button onClick={plusMyNum}> myNum증가 </button>
        </div>
    </>)
}

// 상태변수 증가 버튼 클릭 : 콘솔에 증가하는 게 보임, 화면에도 증가하는 게 보임.(리렌더링 O)
// Ref 변수 증가 버튼 클릭 : 콘솔에 증가하는 게 보임, 화면에서는 증가 안하다가 상태변수가 증가하면 그제서야 변함 (리렌더링 X)
// 일반변수 증가 버튼 클릭 : 콘솔에만 증가하는 게 보임, state 증가하면 0으로 초기화됨 (리렌더랑 X, 초기화 성질 때문에 임시 사용용도)