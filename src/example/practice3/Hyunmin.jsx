import axios from "axios"
import { useEffect, useState } from "react";

export default function Hyunmin(props) {

    const [categories, setCategories] = useState([]);
    useEffect(() => {
        axios.get("https://wellness-exclusion-surfing-advisory.trycloudflare.com/api/categories")
            .then((response) => {
                console.log(response.data);
                setCategories(response.data);
            });
    }, []);
    return (<>
        <div>
            <h2>박현민 [카테고리 전체 조회]</h2>
            <div>
                <span>학과: </span>
                <span>정보통신공학과</span>
            </div>
            <div>
                <span>자기소개: </span>
                <span>2002년생, 경기도 시흥시 거주, 남자입니다. 잘 부탁드립니다.  </span>
            </div>
            {categories.map((category) => {
                return <p key={category.cno}>
                    {category.name} (cno: {category.cno})
                </p>
            })
            }
        </div>
    </>)
}