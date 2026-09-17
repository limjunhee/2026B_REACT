// src/example/day02/Practice1.jsx
/*
    컴포넌트 만들기
    1. 첫 글자를 대문자로 한 컴포넌트명.jsx 파일 생성
    2. export default function 컴포넌트명( props ){ }
    3. 컴포넌트 내 return 뒤로 (<> *jsx문법* </>)
        * jsx란? : 가상의 DOM(HTML) 과 JS 함께 표현하는 문법
    컴포넌트 최초 렌더링
    1. main.jsx에서 
*/


// REACT Practice1 : Practice1 과 Profile 컴포넌트를 구현하여 그림과 같이 완성하시오.
// AXIOS 이용하여 서버로 부터 받은 데이터/자료 가정
export default function Practice1(props) {
    const data = [
        { name: 'Hedy Lamarr', imageUrl: 'https://i.pravatar.cc/150?img=47' },
        { name: 'Grace Hopper', imageUrl: 'https://i.pravatar.cc/150?img=48' },
        { name: 'Ada Lovelace', imageUrl: 'https://i.pravatar.cc/150?img=49' },
        { name: 'Margaret Hamilton', imageUrl: 'https://i.pravatar.cc/150?img=50' }
    ];

    return (<>
        {/* <Profile name={data[0].name} imageUrl={data[0].imageUrl}></Profile>
        <Profile name={data[1].name} imageUrl={data[1].imageUrl}></Profile> */}
        
        {
            data.map( i => { return (<>
                <Profile key = {i} name = {i.name} imageUrl = {i.imageUrl}></Profile>
            </>)} )
        }
    </>)
} // func end

/*
    {  <--- JS 시작
        data.map( i => { <--- data 반복하여 요소 하나씩 i 반복대입
            return (<>  < --- 반복하며 반환되는 값 / 컴포넌트 (HTML)
                <Profile name = {i.name} imageUrl = {i.imageUrl}></Profile> 
            </>)} )
    } <--- JS 끝

    VS 1개월 때 했던 방식
    for (let index = 0; index <= data.length - 1; index++){
        let i = data[index];
        html += <div>
        
                
                </div>;
    }
*/
function Profile(props) {
    return (<>
        <h3>{props.name}</h3>
        <img src={props.imageUrl} alt={props.name} />
    </>);
} // func end 