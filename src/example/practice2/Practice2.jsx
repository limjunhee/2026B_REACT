import { useState } from "react"

export default function Practice2(props){
    // HTML -> CSS -> JS
    let [name, setName] = useState(''); // 일반 변수(let name) 말고 -> 상태 변수 사용하기!!!
    let [age, setAge] = useState(0);
    let [phone, setPhone] = useState('');
    let [members, setMembers] = useState([]); // 빈 배열 선언
    
    // ============등록함수
    const 등록함수 = ( ) => {
        const obj = {name, age, phone}; // 입력받은 값 3개 객체로 만들기
        members.push(obj); // 배열에 만든 객체를 저장
        setMembers( [...members] ) // 렌더링 위한 members setter에 스프레드연산자로 배열 복사
    }

    // ============삭제함수
    const 삭제함수 = (index) =>{
        members.splice(index, 1); // JS에서 특정 인덱스를 삭제하는 메서드 : splice(인덱스, 삭제할개수)
        setMembers([...members]); // 렌더링을 위해 setter와 스프레드연산자를 응용해 배열 복사해온다. -> 이거 안하면 새로고침 안됨
    }
    return(<>
        <input value={ name } onChange={(e) => {setName(e.target.value)}}/> 
        <input value={ age } onChange={(e) => { setAge(e.target.value) }}/>
        <input value={phone} onChange={(e) => { setPhone(e.target.value) }} />     {/* 입력 구간 */}
        <button onClick={등록함수}> 등록 </button>
        <br />
        {
            members.map( (m, index) => { // 반복변수와 인덱스 선언
                return (<>
                    <div>
                        <span> 성명 : {m.name} </span>
                        <span> 연락처 : {m.phone} </span>
                        <span> 나이 : {m.age} </span>
                        {index}
                        <button onClick = { () => 삭제함수(index) }> 삭제 </button>
                    </div>
                </>)
            })
        }
        
        <div> 총 인원 : {members.length}명</div>
    </>)
}