// example/day02/Components/BackComp.jsx
const BackComp = ({ onMyEvent2 }) => {
    return (<>
        <li>
            <a href="/" onClick={(event) => { event.preventDefault(); onMyEvent2('백엔드 클릭됨(자식전달)'); }}>백엔드</a>
        </li>
        <ul>
            <li>Java</li>
            <li>Oracle</li>
            <li>JSP</li>
            <li>Spring Boot</li>
        </ul>
    </>)
}

export default BackComp;

/*
    a 마크업 사용 시 주의점 (104p)
        - a 마크업은 HTTP Get 방식 통신 마크업이라서 깜빡거림

        리액트는 CSR(클라이언트 사이드 렌더링)이라서 서버와 통신 딱 한번만 하고 그 이후 X
        깜빡거림을 제거해야 한다.     제거하는 법 -> onClick = { (e) => { e.preventDefault(); } }
        (상단 탭에서 로고가 새로고침 되는지 안되는지를 보면 알 수 있다.)


    콜백함수 형식
        const plus = ( x, y ) => { return x + y }
        const cal = ( x ) => {
            console.log ( x( 3,4) )
        }
    -----------------------------------------------------------
    cal( plus( 3, 5 ) ) ===> 8
    cal( plus ) ===> 7
        cal( (x,y) => {return x+y} ) => (3,4) => {return x+y}
    onClick = {plus(3,4)} ==> [오류]
    onClick = {(x,y)=>{return x+y}} => [정상]
    -----------------------------------------------------------
    let a; : 변수 정의
    a : 변수 호출

    function a(){} : 함수 정의
    a() : 함수 호출

    const a() => {} : 함수 정의
    a() : 함수 호출

    * props란? 상위 컴포넌트로부터 전달받은 속성을 하위로 전달하기 위한 객체
*/