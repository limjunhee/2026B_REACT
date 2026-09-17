import { useState, useEffect } from "react";

import axios from "axios";


function RandomUser(props){
    // API 응답 결과 저장하는 상태 변수
    const [myJSON, setMyJSON] = useState({results:[]}); // 객체 안에 빈 배열 속성으로 초기화함

    // useEffect( () => { 작성하는코드} , []) // 최초 한번만 실행
    // AXIOS 이용하여 API 통신하고 응답 결과 상태변수에 저장
    useEffect( () => {
        const fetchData = async() => {
            // await axios.get("통신할HTTP주소", body값)
            const response = await axios.get("https://api.randomuser.me?results=10"); // 10 data request
            const data = response.data;
            setMyJSON( data );
        };
        fetchData();
    }, []); // 의존성 배열은 빈 배열로 설정하여 딱 한번만 실행

    // 현재 상태변수에 존재하는 리스트들을 tr 구성하여 하나씩 html 만들기
    let trTag = myJSON.results.map((data) => {
        return (
            <tr key={data.login.md5}>
                <td><img src={data.picture.thumbnail} alt={data.login.username}/></td>
                <td><a href="/" onClick={ (e) => {
                    e.preventDefault();
                    props.onProfile( data );
                }}>{data.login.username}</a>
                </td>
                <td>{data.name.title} {data.name.first} {data.name.last} </td>
                <td>{data.nat}</td>
                <td>{data.email}</td>
            </tr>
        );
    });

    // 간단한 표를 이용해 위에서 정의한 tr 대입
    return(     // UI 렌더링
        <div>
            <table border='1'>
                <thead>
                    <tr>
                        <th>사진</th><th>로그인</th><th>이름</th>
                        <th>국가</th><th>Email</th>
                    </tr>
                </thead>
                <tbody>{trTag}</tbody>
            </table>
        </div>
    );
}

export default function ExternalApiFetcher( props ){
    return(<>
        <h2> 외부 서버 통신 </h2>
        <RandomUser onProfile = {(sData)=>{ // 사용자 정보 출력을 위한 함수를 프롭스로 전달함
            console.log(sData);
            let info = `전화번호 : ${sData.cell}
                        성별 : ${sData.gender}
                        username: ${sData.login.username}
                        password: ${sData.login.password}`;
                        alert(info); // 경고창으로 내용 출력하기
        }}></RandomUser>
    </>);
}


/*
    axios란? 주로 api 비동기 통신
    - 주로 외부 API와 백엔드 API(controller)와 통실하는 도구 역할을 맡는다
    - content-type 기본값이 application/json이라서 편하다
    1. 사용법
        const 함수명 = async( ) => {
            const response = await axios.HTTP메소드명("통신할주소?쿼리스트링", {body});
            const data = response.data
        }
*/