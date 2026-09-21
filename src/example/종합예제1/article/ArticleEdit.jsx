import { useState } from "react";

export default function ArticleEdit(props) {
    // 제목, 작성자, 내용에 대한 상태 생성
    const [title, setTitle] = useState(props.selectRow.title);
    const [writer, setWriter] = useState(props.selectRow.writer);
    const [contents, setContents] = useState(props.selectRow.contents);
    return(<>
        <article>
            <form onSubmit={(event) => { {/* 이벤트 핸들러 추가 */}
                event.preventDefault();
                let title = event.target.title.value; {/* 폼값 읽어오기 */}
                let writer = event.target.writer.value;
                let contents = event.target.contents.value;
                props.editAction(title, writer, contents); {/* 게시물 수정 처리 */}
            }}>
                <table id="boardTable">
                    <tbody>
                        <tr>
                            <th>작성자</th>
                            <td><input type="text" name="writer" value={writer}
                            onChange={(event) => {  {/* onChange 이벤트 핸들러에서 값 변경 */}
                                setWriter(event.target.value);
                            }}  
                            /></td> {/* 수정 내용 설정 */}
                        </tr>
                        <tr>
                            <th>제목</th>
                            <td><input type="text" name="title" value={title}
                                onChange={(event) => {
                                    {/* onChange 이벤트 핸들러에서 값 변경 */ }
                                    setTitle(event.target.value);
                                }}  
                            /></td> {/* 수정 내용 설정 */}
                        </tr>
                        <tr>
                            <th>내용</th>
                            <td><textarea name="contents" cols="22" rows='3' value={contents}
                                onChange={(event) => {
                                    {/* onChange 이벤트 핸들러에서 값 변경 */ }
                                    setContents(event.target.value);
                                }}></textarea></td> {/* <textarea> 태그에도 value 속성에 값 설정 */}
                        </tr>
                    </tbody>
                </table>
                <input type="submit" value="수정하기"></input> {/* 수정 처리 버튼 */}
            </form>
        </article>
    </>)
}