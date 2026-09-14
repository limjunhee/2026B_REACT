// props = onMyEvent1 = { () => { alert('프론트엔드 클릭됨(부모전달)'); } }
function FrontComp(props) {
    //prop를 통해 전달한 프롭스를 한꺼번에 받는다
    return(<>
        <li><a href="/" onClick={() => { props.onMyEvent1(); }}>프론트엔드</a>
        </li>
        <ul>
            <li>HTML5</li>
            <li>CSS3</li>
            <li>Javascript</li>
            <li>jQuery</li>
        </ul>
    </>)
}

// event 객체를 매개변수로 받아 기본 동작 방지 : (event) => {event.preventDefault();}
const BackComp = ({onMyEvent2}) => {
    return (<>
        <li><a href="/" onClick={(event) => {event.preventDefault(); onMyEvent2}}>백엔드</a></li>
        <ul>
            <li>Java</li>
            <li>Oracle</li>
            <li>JSP</li>
            <li>Spring Boot</li>
        </ul>
        
    </>)
}
function App() {
    return (<>
        <h2> React-Event </h2>
        <ol>
            <FrontComp onMyEvent1={ ()=>{ alert('프론트엔드 클릭됨(부모전달)'); } }></FrontComp>
            <BackComp onMyEvent2={(msg) => {alert(msg);}}></BackComp>
        </ol>
    </>)
}

export default App;