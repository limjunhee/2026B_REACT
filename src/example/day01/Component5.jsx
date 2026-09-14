export default function Component5 (props) {
    
    function event1 (){ alert("이벤트발생1") }

    const event2 = function () { alert("이벤트발생2") }

    const event3 = () => {alert("이벤트발생3")}

    // onclick = "함수명()"  === React 방식으로 변경 ===> onClick = 함수명
    // 1. c -> C 
    // 2. 함수 실행 X , 함수 전달 O
    return (<>
        <button onClick = {event1} > 이벤트1 </button>
        <button onClick = {event2} > 이벤트2 </button>
        <button onClick = {event3} > 이벤트3 </button>
        <button onClick ={ () => { alert('이벤트발생') } }> 이벤트4 </button>
    </>)
}