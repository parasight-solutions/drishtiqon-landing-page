import React from "react";
import "./why.css";

const Why = ({
  title,
  spanTitle,
  description,
  cardsTitle,
  cards,
  familiarCards,
  wchClass = "",
}) => {
  return (
    <section className="why pt-4">
      <div className={`container ${wchClass}`}>

        <div className="row text-center mb-lg-2 mb-4">
          <div className="common-title" data-aos="fade-up">
            <h2>
              {title}&nbsp;<span>{spanTitle}</span>
            </h2>
            <p>{description}</p>
          </div>
        </div>

        {/* Sound Familiar cards */}
        {familiarCards?.length > 0 && (
          <div className="familiar-grid mb-lg-5 mb-4" data-aos="fade-up">
            {familiarCards.map((item) => (
              <div className="familiar-card" key={item.id}>
                <p>{item.text}</p>
              </div>
            ))}
          </div>
        )}

        <div className="row common-title text-center mb-lg-5 mb-4">
          <h2 data-aos="fade-up">{cardsTitle}</h2>
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