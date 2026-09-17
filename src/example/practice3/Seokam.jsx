import axios from "axios";

export default function Seokam(props){

    async function create(e) {
        e.preventDefault();
        let value = e.target.category.value;
        await axios.post('https://wellness-exclusion-surfing-advisory.trycloudflare.com/api/categories', { name: value })
    }

    return (<>
        <>
            <div>
                <h2>주석암</h2>
                <div>
                    <span>학과: </span>
                    <span>컴퓨터공학과</span>
                </div>
                <div>
                    <span>자기소개: </span>
                    <span>1997년생, 경기도 안양시 거주, 남자, 소환사의 협곡 주 라인: 바텀</span>
                </div>
                <form onSubmit={create}>
                    <input type='text' name='category' placeholder='새 카테고리 명' />
                    <button type='submit'> 등록 </button>
                </form>
            </div>
        </>
    </>)
}