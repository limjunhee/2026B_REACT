// 열람 컴포넌트
export default function ArticleView(props){
    return(<>
        <article>
            <table id="boardTable">
                <colgroup>
                    <col width="30%" />
                    <col width="*" />
                </colgroup>
                <tbody>
                    <tr>
                        <th>작성자</th>
                        <td>{props.selectRow.writer}</td> {/* 프롭스로 전달받은 객체를 출력 */}
                    </tr>
                    <tr>
                        <th>제목</th>
                        <td>{props.selectRow.title}</td>
                    </tr>
                    <tr>
                        <th>날짜</th>
                        <td>{props.selectRow.date}</td>
                    </tr>
                    <tr>
                        <th>내용1</th>
                        <td>{props.selectRow.contents}</td> {/* 개행 처리 없이 출력 */}
                    </tr>
                    <tr>
                        <th>내용2</th>
                        <td>{
                            
                            props.selectRow.contents.split(' /n').map( (currVal) => { {/* map 함수로 반복해서 개행 처리 */}
                                return(<>
                                    {currVal} <br key={Math.random()} />
                                </>);
                            })
                        }</td>
                    </tr>
                    <tr>
                        <th>내용3</th>
                        <td style={{ 'whiteSpace': 'pre-wrap' }}> {/* css를 통해 개행 처리 */}
                            {props.selectRow.contents}
                        </td>
                    </tr>
                </tbody>
            </table>
        </article>
    </>)
}