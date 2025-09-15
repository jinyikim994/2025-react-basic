// React 라이브러리 불러오기
import React from "react";

// 공통된 Layout component 불러오기
import Header from "../layout/Header";
import Contents from "../layout/Contents";

// 서브 페이지에 종속된 컨텐츠 component 불러오기
import Page1Cont from "../includes/Page1Cont";
import Title from "../layout/Title";

function Page1() {
  return (
    <>
    {/* Layout component > Header */}
      <Header />
      {/* Layout component > Contents */}
      <Contents>
        {/* 타이틀 */}
        <Title title={["Props"]} />
        {/* includes > Page1Cont */}
        <Page1Cont />
      </Contents>
      {/* Layout component > Footer */}
    </>
  );
}
export default Page1;
