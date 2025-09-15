// React 라이브러리 불러오기
import React from "react";

const fruits = ['🍎 사과', '🍌 바나나', '🍇 포도', '🍑 복숭아'];

function FruitList({ desc }) {
  return <li className="desc">{desc}</li>;
}

function Page1() {
  return (
    <div className="sub-page-01">
      <p>
        props는 부모 컴포넌트가 자식 컴포넌트로 데이터를 전달하는 방법입니다. props는 properties의 줄임말로, 컴포넌트에 전달되는 읽기 전용(read-only) 값들입니다. 즉, 부모 컴포넌트에서 자식 컴포넌트로 데이터를 전달하고, 자식 컴포넌트는 그 데이터를 받아서 화면에 렌더링하거나 사용할 수 있습니다.
      </p>
      <p class="desc">
        Props 란 ? <br/>
        부모 컴포넌트가 자식 컴포넌트에게 전달하는 값<br/>
        단방향 데이터 흐름을 설정한다.<br/>
        부모에 의해 설정되며 자식 컴포넌트에 의해 변경되지 않는다.<br/>
        비유로 설명하면:<br/>
        prop = 택배 상자<br/>
        부모는 자식에게 **택배 상자(props)**를 보냅니다.<br/>
        자식은 그 택배 안에 든 내용을 보고 필요한 걸 꺼내서 사용합니다.
      </p>
      <ul>
        {fruits.map((fruit) => (
          <FruitList desc={fruit} key={fruit} />
        ))}
      </ul>
    </div>
  );
}
export default Page1;
