// 얕은 비교 실습하기
import { useState } from "react"

const TopComp = ({MyData}) => { // 컴포넌트 정의
    return(<>
        <ol>
            <li>프론트엔드</li>
            <ul>
                {MyData.front.map((item, i) => <li key={i}>{item}</li>)}
            </ul>
            <li>백엔드</li>
            <ul>
                {MyData.back.map((item, i) => <li key={i}>{item}</li>)}
            </ul>
        </ol>
    </>)
}

function App(){
    const [MyData, setMyData] = useState({ // 객체를 초기값으로 상태 정의
        front: ['HTML5', 'CSS3', 'Javascript', 'jQuery'],
        back: ['Java', 'Oracle', 'JSP', 'Spring Boot'],
    })
    const addFront = () => { // front에 항목을 추가 (리렌더링 X)
        MyData.front.push('React');
        setMyData(MyData);
    }

    const addBack = () => {
        const newBack = [...MyData.back, 'Node.js']; // back의 복사본을 만든 후 추가함
        
        const newMyData = { ...MyData, back: newBack }; // MyData의 복사본을 만든 후 변경(리렌더링 O)
        setMyData(newMyData);
    }

    return(<>
        <h2>React-Shallow Comparison</h2>
        <TopComp MyData={MyData} /> {/* 컴포넌트를 UI에 추가하고 MyData를 프롭스로 전달함 */}
        <button type="button" onClick={addFront}>프론트추가</button> {/* 항목 추가 버튼(리렌더링 X) */}
        <button type="button" onClick={addBack}>백엔드추가</button>  {/* 항목 추가 버튼(리렌더링 O) */}
    </>)
}

export default App