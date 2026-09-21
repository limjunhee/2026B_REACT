// 게시글 쓰기 화면에서 보여줄 내비게이션 

export default function NavWrite(props) {
    return(<>
        <nav>
            <a
                href="/"
                onClick={function (event) { // 이벤트 핸들러 함수 시작
                    event.preventDefault(); // 화면 이동을 위한 기본 동작 방지
                    props.onChangeMode();   // 모드 변경 함수 호출
                }}>
                목록
            </a>
        </nav>
    </>)
}