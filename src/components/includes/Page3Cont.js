// React 라이브러리 불러오기
import React from "react";

// 리액트 특징 데이터 배열 만들기
const reactFeatures = [
  {
    title: "1. 컴포넌트 기반",
    description: [
      "리액트는 UI를 여러 컴포넌트로 쪼개서 만듭니다. 한 페이지 내에서도 각 부분을 독립된 컴포넌트로 만들고, 이 컴포넌트를 조립해 화면을 구성합니다.",
      "컴포넌트 단위로 코드를 관리하기 때문에 재사용성이 높고 유지보수가 용이합니다. 기능 단위, UI 단위로 구성되어 전체 구조를 파악하기 쉬운 장점이 있습니다.",
      "코드가 간결해지고 반복을 줄일 수 있음",
      "나중에 특징 하나만 추가하거나 수정할 때, jsx를 건드릴 필요 없이 데이터만 수정하면 됨",
      "다른 페이지도 재사용 가능",
      "바뀐 뷰를 기존 방식처럼 업데이트 해주지않고 바뀐 뷰만 삭제하고 다시 만들어버린다.",
      "가상 돔을 활용하여 바뀐 부분만 찾아서 바꿔준다."
    ],
  },
  {
    title: "2. props",
    description: [
      "props는 부모 컴포넌트에서 자식 컴포넌트로 전달되는 데이터입니다. 자식 컴포넌트는 전달받은 props를 변경할 수 없습니다.",
      "상위 컴포넌트의 상태를 변경하려면 함수를 props로 전달받아야 합니다.",
    ],
  },
  {
    title: "3. 단방향 데이터 바인딩",
    description: [
      "데이터는 부모 컴포넌트에서 자식 컴포넌트로만 흐릅니다.",
      "이러한 단방향 데이터 흐름은 예측 가능하고 안정적인 앱 구조를 만듭니다.",
    ],
  },
  {
    title: "4. 가상 DOM",
    description: [
      "DOM은 HTML 문서를 트리 구조로 표현한 것입니다. 리액트는 가상 DOM을 사용해 성능을 최적화합니다.",
      "변경 사항이 생기면 새로운 가상 DOM과 이전 가상 DOM을 비교하여 필요한 부분만 실제 DOM에 반영합니다.",
    ],
  },
  {
    title: "5. JSX",
    description: [
      "JSX는 자바스크립트 내에서 HTML 요소를 작성할 수 있게 해주는 문법입니다.",
      "HTML에 자바스크립트 표현식을 중괄호({})로 바로 사용할 수 있습니다.",
    ],
  },
];

const Test = [
  {
    test1 : "TEST입니다."
  }
];

// 배열 사용 팁 컴포넌트로 분리
function ArrayUsageTips() {
  return (
    <div className="array-usage-tips">
      <h2 className="title1">배열 사용 시</h2>
      <p>
        코드 재사용 여부에 따라 배열을 컴포넌트 내부에 둘지 외부로 분리할지 결정할 수 있습니다.
      </p>
      <p>다음은 외부 분리 시 고려할 만한 케이스입니다:</p>

      <table className="tips-table">
        <thead>
          <tr>
            <th scope="col">케이스</th>
            <th scope="col">예시</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>다른 페이지에서 같은 데이터를 써야 함</td>
            <td>Page1, Page3, InfoPage 등에서 리액트 특징 목록 출력</td>
          </tr>
          <tr>
            <td>데이터가 길거나 복잡해짐</td>
            <td>JSON 수십 줄 이상이 되는 경우</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

// 컴포넌트 생성
function Page3() {
  return (
    <div className="sub-page-03">
        <div>
          <h2 className="title1">리액트란?</h2>
          <p>
            리액트는 UI 생성을 위한 자바스크립트 라이브러리로, 싱글 페이지 애플리케이션(SPA)의 UI 구성에 집중합니다.
            자바스크립트에 HTML을 포함할 수 있는 JSX(JavaScript XML) 문법을 사용하며, 단방향 데이터 바인딩을 채택하고 있습니다.
            페이지 전환 기능은 기본적으로 제공하지 않기 때문에, <code>react-router</code>와 같은 외부 라이브러리를 함께 사용해야 합니다.
          </p>
        </div>

        <h2 className="title1">리액트 특징</h2>
        {/* reactFeatures 배열을 기반으로 JSX를 동적으로 생성 (map 반복 출력) */}
        <ul className="desc">
          {reactFeatures.map((feature, index) => (
            <li key={index}>
              <p className="title2">{feature.title}</p>
              {feature.description.map((text, i) => (
                <p key={i}>{text}</p>
              ))}
            </li>
          ))}
        </ul>
        {/* <ul className="test1">
          {Test.map((feature, index) => (
            <li key={index}>
              <p className="title2">{Test.test1}</p>
              {feature.description.map((text, i) => (
                <p key={i}>{text}</p>
              ))}
            </li>
          ))}
        </ul> */}
        {/* 배열 사용 팁 섹션 */}
        <ArrayUsageTips />
    </div>
  );
}

export default Page3;
