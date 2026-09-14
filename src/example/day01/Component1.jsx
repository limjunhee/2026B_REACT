/*
    1. 컴포넌트명.jsx 파일 생성한다.
    2. export default function 컴포넌트명 (props) { }
        export default : 내보내기, 다른 파일에서 import할 수 있도록 허락
        컴포넌트명 : 첫글자 무조건 대문자로 시작
    3. { } 안에 return, return 안에서는 JSX 문법을 사용 가능, 그 외엔 JS 문법 사용
        return에서는 2줄 이상 입력 시 (<> </>)로 묶어줄 것
*/
function Header( props ){
    return <div> 헤더구역 </div>
}

function Footer(props){
    return <div> 푸터구역 </div>
}
export default function Component1 ( props ) {
    return (<>
        <Header> </Header>
        <div> 메인페이지 </div>
        <Footer> </Footer>
    </>)
}