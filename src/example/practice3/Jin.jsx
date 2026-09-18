import axios from "axios";
import { useEffect, useState } from "react";

export default function Jin() {

    const [myJSON, setMyJSON] = useState({ products: [] });

    useEffect(function () {
        const getProductList = async function () {
            const products = await axios.get(
                /*"http://localhost:8080/testJin"*/ "/api/testJin"
            );
            const data = products.data.data;
            setMyJSON({ products: data });
        };
        getProductList();

    }, []);

    let trTag = myJSON.products.map((data) => {
        return (
            <tr key={data.분류코드}>
                <td>{data.정렬번호}</td>
                <td>{data.분류코드}</td>
                <td>{data.분류명}</td>
                <td>{data.분류영문명}</td>
            </tr>
        )
    });

    return (
        <>
            <div>
                <h2>정형진 [제품 전체 조회기능]</h2>

                <div>
                    <div>
                        학과 : 컴퓨터공학과
                    </div>

                    <div>
                        자기소개 : 2026년생, 경기도 군포시 거주, 남자,
                        소환사의 협곡 주 라인: 넥서스
                    </div>

                    <div>
                        <h3>제품 목록</h3>

                        <table border="1">
                            <thead>
                                <tr>
                                    <th>정렬번호</th>
                                    <th>분류코드</th>
                                    <th>분류명</th>
                                    <th>분류영문명</th>
                                </tr>
                            </thead>

                            <tbody>
                                {trTag}
                            </tbody>
                        </table>
                    </div>

                </div>
            </div>
        </>
    );
}