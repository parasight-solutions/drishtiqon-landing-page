import React from "react";
import "./WhyWeBuilt.css";

const WhyWeBuilt = ({
    title = "Why We",
    highlightedTitle = "Built",
    titleSuffix = "This?",
    paragraphs = [],
    highlightPrefix = "",
    highlightText = "",
    highlightSuffix = "",
}) => {
    return (
        <section className="why-we-built">
            <div className="container">

                <div className="common-title text-center">
                    <h2>
                        {title}{" "}
                        <span>{highlightedTitle}</span>{" "}
                        {titleSuffix}
                    </h2>
                </div>

                <div className="why-we-built-content">

                    {paragraphs.map((paragraph, index) => (
                        <p key={index}>
                            {paragraph}
                        </p>
                    ))}

                    {(highlightPrefix || highlightText || highlightSuffix) && (
                        <div className="why-we-built-highlight">
                            <h3>
                                {highlightPrefix}{" "}
                                <span>{highlightText}</span>{" "}
                                {highlightSuffix}
                            </h3>
                        </div>
                    )}

                </div>

            </div>
        </section>
    );
};

export default WhyWeBuilt;