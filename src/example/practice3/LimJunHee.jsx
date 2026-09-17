import axios from "axios";
import { useState } from "react"

export default function LimJunHee (props) {
    // 입력값 받을 상태 변수
    let [name, setName] = useState('');
    let [price, setPrice] = useState('');
    let [cno, setCno] = useState('');

    // API 응답 결과 저장하는 상태 변수

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
        </div>
    </>)
}