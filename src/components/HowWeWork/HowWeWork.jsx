import React from "react";
import "./HowWeWork.css";

const HowWeWork = ({
    title = "How We",
    highlightedTitle = "Work?",

    items = [],

    quote = "We're not a software implementation company. We're solution architects.",

    authorName = "Hemraj Naidu",
    authorRole = "Founder, DrishtiQon",
    authorImage,
}) => {
    return (
        <section className="how-we-work">
            <div className="container">
                <div className="how-we-work-wrapper">

                    {/* TITLE */}
                    <div className="common-title text-center">
                        <h2>
                            {title}{" "}
                            <span>{highlightedTitle}</span>
                        </h2>
                    </div>

                    {/* WORK ITEMS */}
                    <div className="how-work-items">

                        {items.map((item, index) => (
                            <div
                                className="how-work-item"
                                key={item.id || index}
                            >

                                <div className="how-work-item-header">

                                    <div className="how-work-icon">
                                        {item.icon && (
                                            <img
                                                src={item.icon}
                                                alt={item.title}
                                            />
                                        )}
                                    </div>

                                    <h6>
                                        {item.title}
                                    </h6>

                                </div>

                                <p>
                                    {item.description}
                                </p>

                            </div>
                        ))}

                    </div>

                    {/* QUOTE */}
                    <div className="how-work-quote">

                        <div className="quote-mark">
                            "
                        </div>

                        <h4>{quote}</h4>

                        <div className="quote-author">

                            <div className="author-image">
                                {authorImage && (
                                    <img
                                        src={authorImage}
                                        alt={authorName}
                                    />
                                )}
                            </div>

                            <div className="author-content">
                                <h6>{authorName}</h6>
                                <p>{authorRole}</p>
                            </div>

                        </div>

                    </div>

                </div>
            </div>
        </section>
    );
};

export default HowWeWork;