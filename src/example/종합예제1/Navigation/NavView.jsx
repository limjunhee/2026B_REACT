export default function NavView(props) {
    return(<>
        <nav>
            <a
                href="/"
                onClick={function (event) { // 이벤트 핸들러 함수 시작
                    event.preventDefault(); // 화면 이동을 위한 기본 동작 방지
                    props.onChangeMode("list");   // 모드 변경 함수 호출
                }}>목록 
            </a> {" "}
            
            <a 
                href="/" onClick={function(event){
                event.preventDefault();
                props.onChangeMode('edit');
            }}>수정
            </a> {" "}

            <a 
                href="/" onClick={function(event){ {/* 삭제 링크 정의 */}
                event.preventDefault();
                if(window.confirm("삭제할까요?")){
                    props.onChangeMode('delete');
                }
            }}>삭제</a>
        </nav>
    </>)
}

// 네비게이션에서 게시글 목록으로 이동하는 목록 버튼, 게시글 수정 화면으로 이동하는 수정 버튼, 게시글 삭제하는 삭제 버튼 구성하는 컴포넌트
// 메뉴 사이의 띄어쓰기를 위한 &nbsp; 사용
// &nbsp; -> HTML에서 사용하는 공백 문자