import React from "react";
import imgfile from '../../assets/img/2.png';

//  데이터 배열 만들기
const cssModulesFeatures = [
  {
    title: "특징",
    description: [
      "클래스 이름이 자동으로 고유해짐 (scoped)",
      ".module.css 파일을 만들어서 사용",
      "기존 CSS 문법 그대로 사용 가능"
    ],
  },
];


function Page4() {
  return (
    <div className="sub-page-04">
        <h2 className="title1">CSS Modules (CSS 모듈)</h2>
        <p className="mb20">CSS 파일을 컴포넌트별로 분리해서, 클래스 이름 충돌 없이 사용하는 방식</p>
        {/* cssModulesFeatures 배열을 기반으로 JSX를 동적으로 생성 (map 반복 출력) */}
        <ul className="desc">
          {cssModulesFeatures.map((feature, index) => (
            <li key={index}>
              <p className="title2 mb20">{feature.title}</p>
              {feature.description.map((text, i) => (
                <p key={i}>{text}</p>
              ))}
            </li>
            
          ))}
        </ul>
        <div className="img-box">
          <img src={imgfile} alt="test"/>
        </div>
    </div>
  );
}

export default Page4;
