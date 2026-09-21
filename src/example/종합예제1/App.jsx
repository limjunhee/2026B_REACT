import ArticleList from "./article/ArticleList";
import ArticleView from "./article/ArticleView";
import ArticleWrite from "./article/ArticleWrite";
import ArticleEdit from "./article/ArticleEdit";
import NavList from "./Navigation/NavList";
import NavWrite from "./Navigation/NavWrite";
import NavView from "./Navigation/NavView";
import NavEdit from "./Navigation/NavEdit";


import { useState } from "react";


function Header(props) {
    // header 컴포넌트 정의
    return(
        <header>
            <h2>{props.title}</h2>
        </header>
    );
}

export default function App(props){
    //게시글 데이터 배열
    const [boardData,setBoardData] = useState([
        {
            no: 1,
            title : "오늘은 리액트 공부하는 날",
            writer : "낙짜쌤",
            date : "2025-01-01",
            contents :"리액트를 뽀개봅시당",
        },
        {
            no: 2,
            title: "어제는 자바스크립트 공부했음!",
            writer: "유겸쌤",
            date: "2025-02-02",
            contents: "자바스크립트는 할 게 너무 많아요",
        },
        {
            no: 3,
            title: "내일은 프로젝트 만들어야징",
            writer: "미르쌤",
            date: "2025-03-03",
            contents: "프로젝트는 뭘 만들어볼까?",
        },
    ]);

    const [mode, setMode] = useState("list");       // 모드 상태 관리(list, view, write)
    const [no, setNo] = useState(null);
    const [nextNo, setNextNo] = useState(4);        // 일련번호 no를 생성하기 위한 상태
    
    let articleComp, navComp, titleVar, selectRow;  // 변수 선언
    
    if (mode === "list") {  
        // 목록 모드일 때
        titleVar = "게시판-목록";
        navComp =
            <NavList
                onChangeMode={() => {
                    //목록에서 쓰기 모드로 전환
                    setMode("write");
                }}
            ></NavList>

        articleComp =
            <ArticleList
             boardData = {boardData}
             onChangeMode={(no) => {
                // 목록에서 열람 모드로 전환
                setMode("view");
                setNo(no); // 열람중인 게시물의 번호 지정
            }}
            ></ArticleList>

    } else if (mode === "view"){
        // 열람 모드일 때
        titleVar = "게시판-열림";
        navComp =
            <NavView
                onChangeMode={(pmode) => {
                    setMode(pmode);
                }}
            ></NavView>
            for(let i = 0; i < boardData.length; i++) { // 열람을 위한 객체를 찾아 변수에 저장하기
                if(no === boardData[i].no){
                    selectRow = boardData[i];
                }
            }

        //프롭스를 통해 전달
        articleComp = <ArticleView selectRow={selectRow}></ArticleView>;
    } else if (mode === "write"){
        // 쓰기 모드일 때
        titleVar = "게시판-쓰기";
        navComp = 
            <NavWrite
                onChangeMode={() => {
                    setMode("list");
                }}
            ></NavWrite>
            // 작성한 값을 전송했을 때의 처리 함수
            articleComp = <ArticleWrite writeAction = {(t, w, c) => {
                // 작성일을 0000-00-00 형식으로 생성함
                let nowDate = new Date().toISOString().slice(0,10);
                // 폼값으로 새로운 객체를 생성
                let addBoardData = {no:nextNo, title:t, writer:w, contents:c, date:nowDate};
                let copyBoardData = [...boardData]; // 상태 boardData로 복사본 생성
                copyBoardData.push(addBoardData);   // 복사본 배열에 새로운 객체를 추가
                setBoardData(copyBoardData);        // 상태 변경
                setNextNo(nextNo+1);                // 일련번호 1 증가시킴
                setMode('list')                     // 리스트로 화면 전환
            }}></ArticleWrite>

    } else if (mode === "delete"){
        let newBoardData = []; // 삭제를 위한 빈 배열 생성
        for (let i=0; i<boardData.length; i++){ // 게시물 개수만큼 반복
            if(no != boardData[i].no){ // 삭제할 게시물이 나닌 것만 배열에 추가
                newBoardData.push(boardData[i]);
            }
        }
        setBoardData(newBoardData); // 앞에서 만든 배열로 상태 변경
        setMode('list'); //목록으로 화면 전환
    } else if( mode === "edit" ){
        titleVar = "게시판-수정";
        navComp = <NavEdit
                    onChangeMode={()=>{
                        setMode('list'); // 목록으로 전환
                    }}
                    onBack={()=>{       // 열람으로 전환
                        setMode('view');
                    }
                }></NavEdit>

                for(let i = 0; i < boardData.length; i++){ // 수정할 게시물 찾기
                    if(no===boardData[i].no){
                        selectRow = boardData[i];
                    }
                }
                // 수정할 게시물 전달
                articleComp = <ArticleEdit selectRow = {selectRow}
                    editAction={(t,w,c)=>{ // 수정 처리
                        let editBoardData = {no:no, title:t, writer:w, contents:c, date:selectRow.date}; // 수정용 객체 생성
                        let copyBoardData = [...boardData]; // 복사본 배열 생성
                        for(let i = 0; i<copyBoardData.length; i++){
                            if(copyBoardData[i].no == no){ // 배열 내부에서 수정할 객체 찾기
                                copyBoardData[i] = editBoardData; //객체 변경
                                break;
                            }
                        }
                        setBoardData(copyBoardData); // 변경된 내용으로 상태 변경
                        setMode('view');             // 열람 호면으로 전환
                    }}
                ></ArticleEdit>;

    }
    
    return(<>
        {/* App component에 3개의 컴포넌트 렌더링 */}
        <Header title={titleVar}></Header>
        
        {/* 분기 처리를 끝낸 컴포넌트를 변수에 담아 렌더링 */}
        {navComp}
        {articleComp}
    </>)
}