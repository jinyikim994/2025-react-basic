// React 라이브러리 불러오기
import React from "react";

/* 텍스트 정보 배열 정의
textInfor는 객체 배열입니다.
각 객체는 text라는 속성을 가지고 있으며, 보여주고 싶은 문장이 담겨 있습니다.
이 배열을 바탕으로 반복 렌더링을 할 예정입니다.*/
const textInfor = [
  { text: "we provide" },
  { text: "visual coding" },
  { text: "solution" },
  { text: "for you webs" },
];

/* Info 컴포넌트 정의
// Info는 하나의 텍스트를 받아서 <div> 안에 출력하는 프레젠테이셔널 컴포넌트입니다.
// props에서 구조 분해 할당을 통해 text만 받아 사용합니다.*/

function Info({ text }) {
  return <div>{text}</div>;
}

/* MainCont 컴포넌트 정의 및 내보내기
MainCont는 메인 컴포넌트이며, 여러 개의 Info 컴포넌트를 렌더링합니다.
textInfor.map()을 사용하여 배열의 각 항목을 <Info />로 변환합니다.
각 컴포넌트에 고유한 key로 txt.text를 사용하여 React가 각 항목을 구분할 수 있게 합니다.
.map() 함수는 배열의 각 요소에 대해 새로운 값을 반환하는 고차 함수입니다.
배열 요소 개수만큼 <Info /> 컴포넌트를 만들어 JSX로 출력하려고 사용합니다.
*/

function MainCont() {
  return (
    <section className="main__cont">
      <div className="main__inner">
        {textInfor.map((txt) => (
          <Info text={txt.text} key={txt.text} />
        ))}
      </div>
    </section>
  );
}

export default MainCont;
