// React 라이브러리 불러오기
import React from "react";

// MapFeatures : 배열
const MapFeatures = [
  {
    description: [
      "map() 함수는 JavaScript의 배열 메서드이다.React에서는 주로 배열의 데이터를 컴포넌트 목록으로 변환할 때 사용함",
    ],
  },
];


// 서브 페이지 > 컨텐츠 컴포넌트 생성
function Page2() {
  return (
    <div className="sub-page-02">
      <div>
        <h2 className="title1">map() 함수</h2>
        <p>배열을 반복하면서 각 요소를 원하는 형태로 변환해주는 함수.</p>
      </div>

      <h2 className="title1">개념 정리</h2>
      {/* MapFeatures 배열을 기반으로 JSX를 동적으로 생성 (map 반복 출력) */}
      <ul className="desc">
        {MapFeatures.map((feature, index) => (
          <li key={index}>
            <p className="title2">{feature.title}</p>
            {feature.description.map((text, i) => (
              <p key={i}>{text}</p>
            ))}
          </li>
        ))}
      </ul>
      <p>이 코드는 MapFeatures 배열을 반복해서 각 항목을 li 목록 항목으로 변환하고, 각 항목의 title과 그에 해당하는 description 배열을 다시 p 태그로 출력하는 구조</p>
      <p>React에서는 리스트 렌더링 시, 각 항목을 고유하게 식별하기 위해 key 속성을 사용합니다. map()을 사용하여 배열을 반복하면서 각 항목에 고유한 key 값을 전달해줘야 성능 최적화와 렌더링 효율을 높일 수 있습니다.</p>
      <p>key=index로 각 항목에 고유의 값을 할당하는 방식입니다. 더 나은 성능을 위해서는 index 대신 고유한 ID를 사용하는 것이 좋습니다.</p>
      <table className="tips-table">
        <thead>
          <tr>
            <th scope="col">목적</th>
            <th scope="col">설명</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>반복</td>
            <td>배열을 반복하며 각 요소를 원하는 형태로 변환</td>
          </tr>
          <tr>
            <td>사용</td>
            <td>JSX 안에서 리스트 컴포넌트 만들 때</td>
          </tr>
          <tr>
            <td>주의</td>
            <td>key props 꼭 사용하기</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default Page2;
