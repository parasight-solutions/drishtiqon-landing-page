import React from "react";
import "./why.css";

const Why = ({ title, spanTitle, description, cards ,wchClass="",}) => {
  return (
    <section className="why pt-4">
      <div className={`container ${wchClass}`}>
        <div className="row text-center mb-lg-5 mb-4">
          <div className="common-title" data-aos="fade-up">
            <h2>{title}&nbsp;<span>{spanTitle}</span></h2>
            <p>{description}</p>
          </div>
        </div>

        <div className="grid-container" data-aos="fade-up">
          {cards.map((item) => (
            <div className="why-card" key={item.id}>
              <div className="image">
                <img src={item.whyIcon} alt={item.title} />
              </div>

              <h3>{item.title}</h3>
              <p>{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Why;