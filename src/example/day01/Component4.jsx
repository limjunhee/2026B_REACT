// [매개변수] props = { propData1 : frontData(배열) , frTitle : "프론트엔드"}
// 프롭스를 한꺼번에 받아 'props.프롭스명'의 형태로 따로 사용함
// 리스트 내의 각 자식 요소는 고유한 key prop을 가져야 한다. (key에다 pk값 넣으면 렌더링 성능) 없으면 Each child in a list should have a unique "key" prop. 뜬다(되긴 함)
function FrontComp(props) {
    const liRows = []; 
    for(let  i = 0; i < props.propData1.length; i++){
        liRows.push(
            <li key={i}> {props.propData1[i]} </li>
        )
    }

    return(<>
        <li> {props.frTitle}</li>
        <ul>
            {liRows}
        </ul>
    </>)
}

// [매개변수] props = { propData2 : backData(배열) , baTitle : "프론트엔드"}
// props를 구조분해하여 propData2, baTitle로 따로 사용할 수 있음
const BackComp = ({ propData2, baTitle }) => {
    const liRows = [];
    let keyCnt = 0;
    for(let row of propData2){
        liRows.push(
            <li key={keyCnt++}>{row}</li> 
        );
    }

    return (<>
        <li>{baTitle}</li>
        <ul>
            {liRows}
        </ul>
    </>)
}
function Component4( ) {
    // 추후에 연동할 *AXIOS* = 백엔드와의 통신
    const frontData = ['HTML5', 'CSS3', 'Javascript', 'jQuery']
    const backData = ['Java', 'Oracle', 'JSP', 'Spring Boot']

    return(<>
        <div>
            <h2>React - Props</h2>
            <ol>
                <FrontComp propData1 = {frontData} frTitle = "프론트엔드"></FrontComp>
                <BackComp propData2 = {backData} baTitle= "백엔드" />
            </ol>
        </div>
    </>)
}

export default Component4;
