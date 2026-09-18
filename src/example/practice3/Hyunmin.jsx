import axios from "axios";
import { useEffect, useState } from "react";

export default function Hyunmin() {
    // 1. 음식점 목록을 저장하는 state
    const [restaurants, setRestaurants] = useState([]);

    // 2. 화면이 처음 열릴 때 Spring에 음식점 목록 요청
    useEffect(() => {
        axios.get(/*"http://localhost:8080/practice6/restaurants"*/ "/practice6/restaurants")
            .then((response) => {
                console.log(response.data);
                // 응답 JSON에서 음식점 배열을 가져오기
                setRestaurants(response.data.response.body.items.item);
            });
    }, []);

    // 3. 음식점 목록을 표의 행으로 만들기
    const trTag = restaurants.map((restaurant, index) => {
        return (
            <tr key={index}>
                <td>{index + 1}</td>
                <td>{restaurant.BPLC_NM}</td>
                <td>{restaurant.SALS_STTS_NM}</td>
                <td>{restaurant.ROAD_NM_ADDR}</td>
            </tr>
        );
    });

    return (
        <div>
            <h2>박현민 [일반음식점 조회]</h2>
            <div>
                <span>학과: </span>
                <span>정보통신공학과</span>
            </div>
            <div>
                <span>자기소개: </span>
                <span>2002년생, 경기도 시흥시 거주, 남자입니다. 잘 부탁드립니다.</span>
            </div>
            <h3>음식점 목록 (첫 페이지 10건)</h3>
            <table border="1">
                <thead>
                    <tr>
                        <th>번호</th>
                        <th>음식점명</th>
                        <th>영업 상태</th>
                        <th>도로명 주소</th>
                    </tr>
                </thead>
                <tbody>{trTag}</tbody>
            </table>
        </div>
    );
}