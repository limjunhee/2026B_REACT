import axios from "axios";
import { Link, useNavigate } from "react-router-dom";

export default function Write (props) {
    const navigate = useNavigate(); // [1] 화면을 이동하기 위한 훅
    // html에선 화면 이동을 위해 <a></a> 마크업을 사용, REACT에선 <Link>를 사용한다.
    // js에서는 location.href="" 를 사용, REACT에선 navigate(""); 사용한다
    // 왜 html/js 코드 그대로 안쓰고 다른 거 쓸까? -> html/js 코드를 사용하면 화면 깜빡거림이 발생하기 때문이다.


    // [ 등록함수 ]
    const 등록함수 = async (event) => {
        event.preventDefault();
        console.log( event.target ) // 등록 함수를 실행한 마크업이 target이다. === target: 이벤트를 발생시킨 주범
        // 이벤트 발생시킨 form 마크업 내 name 속성으로 입력값 반환
        const obj = {
            name: event.target.writer.value ,
            subject: event.target.title.value ,
            content: event.target.contents.value
        }

        // axios( url, body ); : 백엔드에게 http post 방식으로 통신 시도
        const response = await axios.post("http://localhost:8080/api", obj); // post로 http://localhost:8080 경로로 obj 전달
        const data = response.data;
        if(data == true){
            navigate("/list") // 반환값 true : 목록 페이지로 전환
        } 
    }

    return(<>
        <div>
            <h2>게시판-작성</h2>
        </div>
        <nav>
            <Link to="/list"> 목록 </Link>
        </nav>
        <article>
            <form onSubmit={(event) => {등록함수(event); }  }>
                작성자 : <input name="writer" /><br />
                제목 : <input name="title" /><br />
                내용 : <textarea name="contents" rows="3"></textarea> <br />
                <input type="submit" value="작성" />
            </form>
        </article>
    </>)
}