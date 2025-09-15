// React 라이브러리 불러오기
import React from "react";

// 함수형 컴포넌트 
// 비구조화 할당 (Destructuring) 문법 > props 객체에서 children이라는 속성만 꺼낸 것
// 즉 이 컴포넌트는 부모 컴포넌트로부터 전달된 자식 요소(들)를 받습니다.
function Contents({ children }) {
  return <main id="main">{children}</main>;
}

// Contents 컴포넌트를 외부 파일에서 사용할 수 있도록 내보내는(export) 문장
export default Contents;
