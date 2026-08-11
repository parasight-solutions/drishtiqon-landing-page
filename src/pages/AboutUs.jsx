import React from "react";

import Breadcrumb from "../components/Breadcrumb/Breadcrumb";
import Clients from "../components/Clients/Clients";

import AboutIntro from "../components/AboutIntro/AboutIntro";
import WhyWeBuilt from "../components/WhyWeBuilt/WhyWeBuilt";
import HowWeWork from "../components/HowWeWork/HowWeWork";

import businessIcon from "/logo-icons/business.png";
import configureIcon from "/logo-icons/configure.png";
import founderImage from "/logo-icons/HN.png";

const AboutUs = () => {
    return (
        <>
            <Breadcrumb
                items={[
                    {
                        label: "Home",
                        path: "/",
                    },
                    {
                        label: "About Us",
                        path: "/aboutus",
                    },
                ]}
            />

            <AboutIntro
                title="About Us"
                description="We looked at why SMEs struggle. The software wasn't the excuse, it was usually the cause."
                secondDescription="DrishtiQon exists because we spent real time understanding why SME systems fail — and not guessing at it."
            />

            <WhyWeBuilt
                title="Why We"
                highlightedTitle="Built"
                titleSuffix="This?"
                paragraphs={[
                    "Before writing a line of code, we asked a simpler question: why do so many growing businesses stay stuck on spreadsheets, fragmented tools, and manual reconciliation long after they've outgrown them.",

                    "The answer wasn't a lack of software. It was too much of the wrong kind — tools that solved one problem each, none of them talking to the others.",

                    "The businesses weren't failing because their teams weren't capable. They were failing because the systems around them couldn't keep up.",
                ]}
                highlightPrefix="That's the gap"
                highlightText="DrishtiQon"
                highlightSuffix="was built to close."
            />

            <HowWeWork
                title="How We"
                highlightedTitle="Work?"

                items={[
                    {
                        id: 1,
                        icon: businessIcon,
                        title: "Built around your business",
                        description:
                            "We start by asking why you're asking for it, then build around your operations — not a product's default settings.",
                    },
                    {
                        id: 2,
                        icon: configureIcon,
                        title: "Configured, not rigid",
                        description:
                            "DrishtiQon isn't one rigid package. It's built to be configured around how you actually operate.",
                    },
                ]}

                quote="We're not a software implementation company. We're solution architects."

                authorName="Hemraj Naidu"
                authorRole="Founder, DrishtiQon"
                authorImage={founderImage}
            />

            <Clients />
        </>
    );
};

export default AboutUs;