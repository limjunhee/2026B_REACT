// function 컴포넌트명(props){ return }

// JSX란? HTML과 우사한 확장 문법

// 주의점 : 리액트가 만든 가상의 HTML(DOM)

// 차이점: class --> className , onclick --> onClick

// 실제 존재하는 DOM의 개수 한계가 있고, 상태도 없기 때문에 
// 가짜 DOM으로 새로운 DOM을 만들어 상태(props)를 가지게 했다. 

export default function MyMarkup(props){
    return <div> 내가 만든 마크업/컴포넌트 </div>
}