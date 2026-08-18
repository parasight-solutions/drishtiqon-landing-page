import React from "react";
import "./ImplementationProcess.css";
import { Check, ChevronRight, Rocket } from "lucide-react";

const ImplementationProcess = ({
    eyebrow = "SMOOTH PROCESS",
    title = "Painless implementation, high-speed returns",
    description = "Get enterprise-level management software without the messy transition. DrishtiQon delivers ROI, not headaches.",

    steps = [
        {
            duration: "1–3 weeks",
            title: "Blueprint",
            points: [
                "Understand how you operate",
                "Agree on the plan",
            ],
        },
        {
            duration: "4–8 weeks",
            title: "Demo build",
            points: [
                "Your real data, sample loaded",
                "A working demo, built to match",
            ],
        },
        {
            duration: "9–12 weeks",
            title: "Testing",
            points: [
                "Both sides put it through its paces",
                "Your team gets trained",
            ],
        },
        {
            duration: "13–16 weeks",
            title: "Go-live",
            points: [
                "Every product, price, and warehouse — live",
                "You're up and running",
            ],
        },
    ],
}) => {
    return (
        <section className="implementation-process">
            <div className="container">

                <div className="implementation-wrapper">

                    <div className="implementation-heading">

                        <p className="implementation-eyebrow">
                            {eyebrow}
                        </p>

                        <h2>
                            {title}
                        </h2>

                        <p className="implementation-description">
                            {description}
                        </p>

                    </div>

                    <div className="implementation-timeline">

                        <div className="timeline-line"></div>

                        {steps.map((step, index) => (

                            <div
                                className="timeline-step"
                                key={index}
                            >

                                <div className="timeline-duration">
                                    {step.duration}
                                </div>

                                <div className="timeline-point-wrapper">

                                    <div
                                        className={`timeline-point ${index === 0
                                            ? "first-point"
                                            : index === steps.length - 1
                                                ? "last-point"
                                                : ""
                                            }`}
                                    >
                                        {index === 0 ? (
                                            <span className="timeline-dot"></span>
                                        ) : index === steps.length - 1 ? (
                                            <Rocket size={20} strokeWidth={2.5} />
                                        ) : (
                                            <ChevronRight
                                                size={22}
                                                strokeWidth={3}
                                            />
                                        )}
                                    </div>

                                </div>


                                <div className="implementation-card">

                                    <h3>
                                        {step.title}
                                    </h3>

                                    <div className="implementation-points">

                                        {step.points.map(
                                            (point, pointIndex) => (

                                                <div
                                                    className="implementation-point"
                                                    key={pointIndex}
                                                >

                                                    <Check
                                                        size={22}
                                                        strokeWidth={2.5}
                                                    />

                                                    <p>
                                                        {point}
                                                    </p>

                                                </div>

                                            )
                                        )}

                                    </div>

                                </div>

                            </div>

                        ))}

                    </div>

                </div>

            </div>
        </section>
    );
};

export default ImplementationProcess;
