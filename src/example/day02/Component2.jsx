// 상태 관련 실습

//구조분해 : 객체/배열 내 요소들을 각각 변수로 분해
// const { name, age } = { name : "유재석", age: 40 } => 객체를 구조분해
// console.log( name, age );
// const [name, setName] = ["유재석", function setter(){}]
// console.log(name); setName( );

import { useState } from "react";

let 전역변수 = 0; // 함수 밖 변수

export default function Component2(props){
    let 지역변수 = 0; // 함수 안 변수

    // 1. 전역변수, 지역변수 증가함수 1: 화면에는 증가하지 않지만, 콘솔(내부적으론)에선 증가한다.
    // 이유 : Component2의 return은 처음 렌더링 하고 나서 끝. 더 이상 안함
    const 증가함수1 = ( ) => { 전역변수++; 지역변수++; console.log(전역변수, 지역변수)}

    // 2. useState 함수 이용한 새로고침/재렌더링 (함수재호출 --> 함수 return)
    // const [상태변수명, set상태변수명] = useState( 초기값 );
    // 이 함수가 실행되면 재렌더링 되므로, 지역변수는 모두 초기화된다(0으로 회귀)
    const [ count, setCount ] = useState( 0 );
    const 증가함수2 = () => { setCount(count + 1); console.log(count);};

    // 3. 수박 요소 하나를 갖는 배열 초기값으로 상태변수 선언
    // 3 --> 상수(101호) , 4 --> 상수(102호) : 1+2 => 3(101호)
    // 과일상자(201호)[수박(301호)] ==> 과일상자.push( 사과302호 ) , 과일상자의 주소값은 201호이다. 즉 push는 값 변경이 아니라
    // useState 상태값의 주소값이 변경되어야만 새로고침이 된다.
    // 주로 스프레드연산자를 이용하여 배열 객체를 복사한다. -> ...객체명 / ...배열명
    const [array, setArray] = useState(["수박"] );
    //배열 내 '사과' 요소 추가하여 setXXX 배열을 대입한다. (그냥 setArray를 사용하면 내부적으로만 추가됨, 화면에서는 추가 안됨)
    const 증가함수3 = ( ) => {
        // array.push('사과'); setArray(array);
        array.push('사과'); setArray( [...array] ) 
    }

    return (<>
        <h3> 상태 관리 </h3>
        <h4> 전역변수: { 전역변수 } , 지역변수: { 지역변수 } </h4>
        <button onClick={ 증가함수1 }>버튼1</button>
        <h4> 상태변수: {count} </h4>
        <button onClick={증가함수2}>버튼2</button>
        <h4> 배열 : {array }</h4>
        <button onClick={증가함수3}>버튼3</button>
    </>)
}