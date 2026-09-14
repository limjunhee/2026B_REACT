// [1] 일반 함수 (선언적)형식으로 작성한 컴포넌트
function FrontComp(){
    return(<>
        <li>프론트엔드</li>
        <ul>
            <li>HTML5</li>
            <li>CSS3</li>
            <li>Javascript</li>
            <li>jQuery</li>
        </ul>
    </>)
}

// [2] 화살표 함수 형식으로 작성한 컴포넌트
const BackComp = () => {
    return (<>
        <li>백엔드</li>
        <ul>
            <li>Java</li>
            <li>Oracle</li>
            <li>JSP</li>
            <li>Spring Boot</li>
        </ul>
    </>)
}

// [3] 익명 함수 형식으로 작성된 컴포넌트
let FormComp = function(){
    return(<>
        <form>
            <select name = "gubun">
                <option value="front">프론트엔드</option>
                <option value="back">백엔드</option>
            </select>
            <input type="text" name="title" />
            <input type="submit" value="추가" />
        </form>
    </>);
}

// [4] // App - 최상위 컴포넌트(3가지의 컴포넌트 합침)
function App (){ 
    return(<>
        <div>
            <h2>React -Component</h2>
            <ol>
                <FrontComp></FrontComp>
                <BackComp/>
            </ol>
            <FormComp/>
        </div>
    </>)
}
export default App;

// html 하나로 하면 안됨? -> 이렇게 하면 재사용성이 좋음