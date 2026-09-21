import { useEffect, useRef } from "react";

export default function UseRefExam2 (props) {
    const passRef1 = useRef();
    const passRef2 = useRef();

    // useEffect(() => {}, [])              ===>  컴포넌트 생성 시 최초 1번 실행
    // useEffect(() => {})                  ===>  컴포넌트 생성 시 최초 1번 실행 + 재렌더링마다 실행
    // useEffect(() => {}, [state변수명] )  ===>  컴포넌트 생성 시 최초 1번 실행 + 특정한 state 변경 시 재렌더링 실행
    useEffect(() => { // 렌더링 후 패스워드1 입력 상자에 포커싱
        console.log('passRef', passRef1, passRef2);
        passRef1.current.focus();
    }, []);

    const checkPassword = () => {
        // 빈 값 검증 및 passRef1 포커싱
        if( !passRef1.current.value || passRef2.current.value=='') {
            alert("비밀번호를 입력하세요.");
            passRef1.current.focus();
            return;
        }
        // 패스워드 일치 여부 확인
        if(passRef1.current.value === passRef2.current.value) {
            alert("비밀번호 확인이 완료되었습니다.");
        } else {
            // 비밀번호 다르면 입력값 초기화시키고, 패스워드1에 포커싱
            alert('비밀번호가 일치하지 않습니다.')
            passRef1.current.value = '';
            passRef2.current.value = '';
            passRef1.current.focus();
        }
    }

    return(<>
        <h2> useRef 사용하기2</h2>
        <form>
            {/* 패스워드 입력 상자 */}
            패스워드1: <input type="text" ref={passRef1} name="pass1" /> <br />
            패스워드2: <input type="text" ref={passRef2} name="pass2" /> <br />
            <button type="button" onClick={checkPassword}>패스워드확인</button>
        </form>
    </>);
}

/* 
    입력상자 내 입력받은 값 제어
    1. useState
        const [title, setTitle] = useState('');
        <input value={title} onChange={ (e) => { setTitle( e.target.value ); }}/>
    
    2. useRef
        const titleRef = useRef('');
        <input ref = {titleRef} />
    --------------------------------------------------------------------------------------------
    const formRef = useRef( );
    <form ref = {formRef}>
    
    </form>
*/