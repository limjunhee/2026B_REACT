// 프롭스로 전달된 게시글 목록 출력하기

export default function ArticleList(props){
    const lists = []; // 게시글 목록 담을 배열
    for(let i = 0; i < props.boardData.length; i++){ // 게시글 데이터 반목
        let row = props.boardData[i]; // 현재 게시글 데이터 추출

        //게시글 한 행을 lists에 추가하기
        lists.push(
            <tr key={row.no}>
                <td className="cen">{row.no}</td> {/* 게시글 번호 출력하기 */}
                <td><a href={'/read/' + row.no} onClick={(event)=>{{
                    event.preventDefault();
                    props.onChangeMode(row.no); { /* 프롭스로 전달된 화면 전환용 함수 호출 */}
                }}}>{row.title}</a></td> {/* 게시글 제목에 링크 연결하기 */}
                <td className="cen">{row.writer}</td>
                <td className="cen">{row.date}</td>
            </tr>
        )
    }
    return(<>
        <article>
            <table id="boardTable">
                <thead>
                    <tr>
                        <th>No</th>
                        <th>제목</th>
                        <th>작성자</th>
                        <th>날짜</th>
                    </tr>
                </thead>
                <tbody>
                    {lists}
                </tbody>
            </table>
        </article>
    </>)
}

// 게시글 목록 컴포넌트(DB가 없으므로 내용은 하드코딩됨.)