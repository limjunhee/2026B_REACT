// Component3.jsx
// 변수 : 하나의 값을 저장하는 수
// 매개변수 : 함수/메소드에서 인수 받아서 안에서 이용할 수 있는 변수
// 인수/인자값 : 함수를 실행할 때 함수에게 전달하는 값
function plus (x,y){ } // 함수 정의 -> x,y는 매개변수
plus (5,3) // 함수 호출 -> 5,3은 인수(인자값) ==> 5를 x, 3을 y에 대입

//프롭스? : 상위 컴포넌트에서 하위 컴포넌트로 데이터를 전달하기 위한 *객체*(읽기 전용)
function plus2 (props) {}
plus2 ( {v1: 5, v2: 3 } ) // 5, 3을 객체 [하나]가 인수로 들어간다.
// =============================================================================

export default function Component3( props ){    // 상위 요소
    let name = "유재석";
    
    // ---> return부터 jsx 문법 구역, 주석: { /* */ }
    // jsx에서는 html문법 { JS표현식 } HTML문법 {JS표현식}
    return (<>
        {/* 이게 주석, 웬만하면 주석은 return 밖에서 쓰자 */}
        <div> {name} </div> <div> { 10 + 20} </div>
        <input type="text" value="안녕" name="입력상자" />
        <SubComp1 name="유재석" age="40" />
        <SubComp1 name="강호동" age="50" />
        <SubComp2 name="신동엽" age="60" />
    </>)
}

function SubComp1(props){                       // 하위 요소
    console.log(props);     // { name: "유재석", age : "40"}
    return (<>
        <h4> {props.name}님 {props.age}세 </h4>
    </>)
}

function SubComp2( { name, age } ){ // props를 name, age 변수로 나누어 저장!
    return(<>
        <h4>{ name }님 { age }세 </h4>
    </>)
}

// props: 객체 { }
// { name, age } = props() , 구조분해 -> props를 name, age 변수로 나누어 저장

// 구조분해란? 객체를 각각의 변수로 저장