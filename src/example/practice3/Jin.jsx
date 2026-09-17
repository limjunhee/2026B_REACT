import axios from "axios";
import { useEffect, useState } from "react";

export default function Jin() {

    const [myJSON, setMyJSON] = useState({ products: [] });

    useEffect(function () {
        const getProductList = async function () {
            const products = await axios.get(
                "https://wellness-exclusion-surfing-advisory.trycloudflare.com/api/products"
            );
            const data = products.data;
            setMyJSON({ products: data });
        };
        getProductList();

    }, []);

    let trTag = myJSON.products.map((data) => {
        return (
            <tr key={data.bno}>
                <td>{data.bno}</td>
                <td>{data.categoryname}</td>
                <td>{data.name}</td>
                <td>{data.price}</td>
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
                                    <th>bno</th>
                                    <th>카테고리</th>
                                    <th>상품명</th>
                                    <th>가격</th>
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