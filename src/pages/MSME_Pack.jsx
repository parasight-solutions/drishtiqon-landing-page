import React from 'react'
import Banner from '../components/Banner/Banner'
import bannerImage from "/section-images/MSME_Pack_Banner_Image.png";
import Breadcrumb from '../components/Breadcrumb/Breadcrumb';
import WhyChooseUs from '../components/whyChoose/why'
import Plans from '../components/Plans/Plans'
import OrangeIcon from "/logo-icons/orange-tick.png";
import BlueIcon from "/logo-icons/blue-tick.png";
import GreenIcon from "/logo-icons/green-tick.png";

const plans = [
    {
        icon: "/logo-icons/rocket.png",
        name: "Starter",
        shortDescription:
            "For businesses just getting off paper and spreadsheets",
        price: "",
        duration: "",
        billing: "",
        tickIcon: OrangeIcon,
        description: "Get all your data into one place, accessible from anywhere Simple entry, no training required See your business clearly for the first time",
        featurehead: "Key Features",
        features: [
            "Compiled Reports",
            "E-Invoicing Ready",
            "SLA Based Support",
        ],
        bestfor: "Best For",
        bestdescription: "Small businesses looking for an affordable ERP solution.",
        buttonText: "Book A Demo",
        buttonLink: "/book-a-demo",
    },
    {
        icon: "/logo-icons/growth-icon.png",
        name: "Core",
        shortDescription:
            "For businesses ready to run daily operations from one system",
        price: "",
        duration: "",
        billing: "",
        tickIcon: BlueIcon,
        description: "Everything in Starter, plus the tools you'll actually use every day Built-in reports so you stop guessing Multiple team members, without the chaos",
        featurehead: "Everything in Starter, and:",
        features: [
            "Automated OTC Modules",
            "GST Complied Reports",
            "Access to Finance & Banking",

        ],
        bestfor: "Best For",
        bestdescription: "Businesses looking to streamline operations and reduce manual work.",
        buttonText: "Book A Demo",
        buttonLink: "/book-a-demo",
        cardClass: "middle",
        pill: "Most Popular",
        note: "",
    },
    {
        icon: "/logo-icons/rocket.png",
        name: "Growth",
        shortDescription:
            "For businesses ready to stop doing repetitive work by hand",
        price: "",
        duration: "",
        billing: "",
        tickIcon: OrangeIcon,
        description: "Everything in Core, plus automation for your busiest tasks Save hours every week on repeat work Ready to scale without switching systems later",
        featurehead: "Everything in Core, and:",
        features: [
            "Automated Pricing Strategy",
            "PnL/ BS Overview",
            "Business Intelligence",
        ],
        bestfor: "Best For",
        bestdescription: "Small businesses looking for an affordable ERP solution.",
        buttonText: "Book A Demo",
        buttonLink: "/book-a-demo",
        cardClass: "end",
        note: "",
    },
];
const MSME_Pack = () => {
    const whycards = [
        {
            id: 1,
            whyIcon: "/logo-icons/timeManaged.png",
            title: "Faster Operations",
            description: "Automate repetitive tasks and improve efficiency.",
        },
        {
            id: 2,
            whyIcon: "/logo-icons/strategic 1.png",
            title: "Real-Time Insights",
            description: "Make informed decisions with live dashboards and reports.",
        },
        {
            id: 3,
            whyIcon: "/logo-icons/inventory 2.png",
            title: "Inventory Control",
            description: "Track inventory, purchases, and stock movement effortlessly.",
        },
        {
            id: 4,
            whyIcon: "/logo-icons/money (1) 1.png",
            title: "Finance Management",
            description: "Simplify accounting and banking processes.",
        },
        {
            id: 5,
            whyIcon: "/logo-icons/gst 1.png",
            title: "GST Compliance",
            description: "Stay compliant with GST and E-Invoicing regulations.",
        },
    ];

    return (
        <>
            <Breadcrumb
                items={[
                    { label: "Home", path: "/" },
                    { label: "Pricing", path: "/pricing" },
                    { label: "MSME Pack", path: "/pricing/msme-pack" }
                ]}
            />
            <Banner
                bannerClass='msme-banner'
                title={
                    <>
                        {/* <span>MSME </span>Pack */}
                        Built for businesses that don't run on guesswork.
                    </>
                }
                description="Sales, inventory, and finance on one platform, run the way it should have been from the start."
                image={bannerImage}
                bullets={[
                    // "Easy to use",
                    // "GST Compliant",
                    // "E-Invoicing Ready",
                    // "SLA Based Support",
                ]}
                primaryBtn={{
                    text: "Book A Demo",
                    link: "/book-a-demo",
                }}
                secondaryBtn={{
                    text: "Talk to an Expert",
                    link: "#",
                }}
                showPlayIcon={false}
            />
            <WhyChooseUs
                wchClass='msme-wch'
                title="Sound familiar?"
                spanTitle=""
                description={
                    <>
                       <ul>
                        <li>Data scattered across notebooks, Excel sheets, and someone's memory.</li>
                        <li>Mistakes that only get caught after a customer complains.</li>
                        <li>No time (or budget) to learn "enterprise" software built for someone else's business.</li>
                       </ul>
                    </>
                }
                cardsTitle={
                    <>
                        That's exactly what the Msme pack was built to fix.
                        <br />
                        Nothing more. Nothing you don't need.
                    </>
                }
                cards={whycards}
            />
            <Plans
                title="Choose Your Edition"
                description="Flexible plans designed for businesses at every stage of growth."
                plans={plans}
                containerClass="bg-blue msme-card"
            />

        </>
    )
}

export default MSME_Pack
