// 스타일 적용 실습 p127~

import jquertLogo from '/2026B_REACT/src/assets/jquery.png'

export default function Component1() {
    // [3] CSS 객체 방식의 CSS 적용
    const myStyle = {
        color: 'white', backgroundColor: "DodgerBlue",
        padding: "10px", fontFamily: "궁서"
    }
    const iWidth = { maxWidth: '300px' }
    return (<>
        <h2> 리액트 스타일 </h2>
        <ol>
            {/* 인라인방식의 CSS적용 , {key : value} */}
        <li style={ {color:"red"} }>프론트엔드</li> 
        <ul>
            <li><img src={logo} style={ iWidth } alt="로고" /></li>
            <li><img src={image2} style={ iWidth } alt="예시 이미지 2" /></li>
            <li><img src={image3} style={ iWidth } alt="예시 이미지 3" /></li>
        </ul>
        <li className="backEnd">백엔드</li>
        <ul>
            {/* 전통방식의 CSS 적용 */}
            <li id="backEndSub">java</li>
            <li class="warnings">oracle</li>
            <li style={myStyle}>jsp</li>
        </ul>
        </ol>
    </>)
}