import React from "react";


function Title(props) {
  return (
    <section className="cont__title">
      <div className="container">
        <h1>
          <strong>{props.title[0]}</strong>
        </h1>
      </div>
    </section>
  );
}

export default Title;
