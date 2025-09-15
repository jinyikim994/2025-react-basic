// React 라이브러리 불러오기
import React from "react";

// 공통된 Layout component 불러오기
import Header from "../layout/Header";
import Contents from "../layout/Contents";

// 서브 페이지에 종속된 컨텐츠 component 불러오기
import Page3Cont from "../includes/Page3Cont";
import Title from "../layout/Title";

function Page2() {
  return (
    <>
      <Header />
      <Contents>
        {/* 타이틀 */}
        <Title title={["react란?"]} />
        {/* Page2 */}
        <Page3Cont />
      </Contents>
    </>
  );
}
export default Page2;
