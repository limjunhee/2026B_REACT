// [필수] 1. 리액트 라이브러리 최초로 렌더링(그리기)하는 함수
import { createRoot } from "react-dom/client";

// [필수] 2. index.html 에서 root 마크업 가져오기
const root = document.querySelector( '#root' )

// [필수] 3. 가져온 root 마크업을 createRoot 함수에 전달한다.
const create = createRoot( root );



// // [선택] 최초로 화면을 그리기 할 컴포넌트 가져와서 실행
// // 1. 컴포넌트 가져오기
// import App from "./App.jsx";
// // 2. 가져온 컴포넌트 렌더링하기 - render : 그리기 함수
// create.render( <App> </App>)



// /==========================================================/
// [※] 렌더는 한 번만 가능하므로 이전에 실습한 것은 주석처리 할 것.
// /==========================================================/


// [day01]
// import MyMarkup from "./example/day01/MyMarkup";
// create.render(<MyMarkup> </MyMarkup>)

// import Component1 from "./example/day01/Component1";
// create.render(<Component1> </Component1>)

// import Component2 from "./example/day01/Component2";
// create.render(<Component2/>)

// import Component3 from "./example/day01/Component3";
// create.render(<Component3 />)

// import Component4 from "./example/day01/Component4";
// create.render(<Component4 />)

// import Component5 from "./example/day01/Component5";
// create.render(<Component5 />)

// import Component6 from "./example/day01/Component6";
// create.render(<Component6 />)

// /==========================================================/
// [day02]

// import Practice1 from "./example/day02/Practice1";
// create.render(<Practice1 />)

// import Component1 from "./example/day02/Component1";
// create.render(<Component1 />)

// import Component2 from "./example/day02/Component2";
// create.render(<Component2 />)

// import Component3 from "./example/day02/Component3";
// create.render(<Component3 />)

// // [totalpractice1]
// import ProductManager from "./example/totalpractice1/ProductManager";
// create.render(<ProductManager />)

// /==========================================================/
// [day03]
// import Component3 from "./example/day03/Component3";
// create.render(<Component3 />)

// import Practice2 from "./example/practice2/Practice2";
// create.render(<Practice2 />)

// /==========================================================/
// [day04]

import { BrowserRouter } from "react-router-dom"; // 1. 라우터 라이브러리 가져옴

// import App from "./example/day04/App";
// // 최초 렌더링 되는 컴포넌트 앞뒤로 라우터 컴포넌트 감싼다.
// // <BrowserRouter> <최상위컴포넌트/></></BrowserRouter>
// create.render(<BrowserRouter> <App /> </BrowserRouter>)

import App from "./example/practice3/App"
create.render(<BrowserRouter><App/></BrowserRouter>)