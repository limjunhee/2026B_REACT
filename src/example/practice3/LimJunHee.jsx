import axios from "axios";
import { useEffect, useState } from "react"

export default function LimJunHee (props) {

    const [myJSON, setMyJSON] = useState({ products: [] });

    useEffect(function () {
        const getProductList = async function () {
            const products = await axios.get(
                /*"http://localhost:8080/testJunHee"*/ "/api/testJunHee"
            );
            const data = products.data.response.body.items;
            setMyJSON({ products: data });
        };
        getProductList();

    }, []);

    let trTag = myJSON.products.map((data) => {
        return (
            <tr key={data.smkng_zone_nm}>
                <td>{data.se}</td>
                <td>{data.lctn_road_nm_addr}</td>
                <td>{data.mgc}</td>
                <td>{data.lctn_lonto_addr}</td>
            </tr>
        )
    });

    // 제품 등록 함수
    async function addProduct (e) {
        e.preventDefault();
        const form = e.target;
        const object = {
            name: form.name.value,
            price: Number(form.price.value),
            cno: Number(form.cno.value),
        }

        await axios.post("https://wellness-exclusion-surfing-advisory.trycloudflare.com/api/products", object)
    }

    return(<>
        <div>
            <h2>임준희 [제품 등록] </h2>
            <div>
                <span>학과: </span>
                <span>미디어소프트웨어학과</span>
            </div>
            <div>
                <span>자기소개: </span>
                <span>2002년생, 경기도 안양시 거주, 남자, 소환사의 협곡 주 라인: 탑</span>
            </div>
            <br/>
            <div>
                <span>제품 등록 폼 </span>
                <form onSubmit={addProduct}>
                    <input type = 'text' name = 'name' placeholder="제품명 (예 : 기계식 키보드)" />
                    <input type = "text" name = 'price' placeholder="가격 (예 : 45000)" />
                    <input type = 'text' name = "cno" placeholder="카테고리 번호(cno) (예:1)" />
                    <button type='submit'> 제품 등록 </button>
                </form>
            </div>
            <div>
                <h2>안양 흡연구역</h2>
                <table border="1">
                    <thead>
                        <tr>
                            <th>장소이름</th>
                            <th>동안구/만안구</th>
                            <th>주소</th>
                            <th>상세주소</th>
                        </tr>
                    </thead>
                    <tbody>
                        {trTag}
                    </tbody>
                </table>
            </div>
        </div>
    </>)
}