export default function NavList(props) {
    return(<>
        <nav>
            <a 
                href="/" 
                onClick={function (event) { // 이벤트 핸들러 함수 시작
                    event.preventDefault(); // 화면 이동을 위한 기본 동작 방지
                    props.onChangeMode();   // 모드 변경 함수 호출
                }}>
                    글쓰기
            </a>
        </nav>
    </>)
}

// 화면에서 '글쓰기' 버튼 구성
// 버튼 누르면 App 컴포넌트에서 프롭스로 전달한 onChangeMode() 함수를 호출해 App 컴포넌트의 mode 상태를 write로 바꿔 글쓰기 화면으로 변경시킴