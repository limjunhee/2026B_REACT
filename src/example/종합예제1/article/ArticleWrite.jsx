// 작성 컴포넌트 -> 게시글 작성을 위한 <form> 태그로 구성됨.
export default function ArticleWrite(props){
    return(<>
        <article>
            {/* form에 onSubmit 이벤트를 추가해야 게시물이 추가된 것을 확인할 수 있음. (누락됨) */}
            <form onSubmit={(e) => {
                e.preventDefault();
                const title = e.target.title.value;
                const writer = e.target.writer.value;
                const contents = e.target.contents.value;
                props.writeAction(title, writer, contents);
            }}>
                <table id="boardTable">
                    <tbody>
                        <tr>
                            <th>작성자</th>
                            <td>
                                <input type="text" name="writer" />
                            </td>
                        </tr>
                        <tr>
                            <th>제목</th>
                            <td>
                                <input type="text" name="title" />
                            </td>
                        </tr>
                        <tr>
                            <th>내용</th>
                            <td>
                                <textarea name="contents" cols="22" rows="3"></textarea>
                            </td>
                        </tr>
                    </tbody>
                </table>
                <input type="submit" value="전송" />
            </form>
        </article>
    </>)
}
