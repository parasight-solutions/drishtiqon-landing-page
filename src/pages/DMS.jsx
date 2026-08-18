import React from 'react'
import Banner from '../components/Banner/Banner'
import bannerImage from "/section-images/dms_banner.png";
import Breadcrumb from '../components/Breadcrumb/Breadcrumb';
import WhyChooseUs from '../components/whyChoose/why'
import Plans from '../components/Plans/Plans'
import OrangeIcon from "/logo-icons/orange-tick.png";
import BlueIcon from "/logo-icons/blue-tick.png";
import GreenIcon from "/logo-icons/green-tick.png";
import ImplementationProcess from "../components/ImplementationProcess/ImplementationProcess";

const plans = [
    {
        icon: "/logo-icons/rocket.png",
        name: "Starter",
        shortDescription:
            "For distributors ready to get order and stock records out of scattered spreadsheets",
        price: "",
        duration: "",
        billing: "",
        tickIcon: BlueIcon,
        description: "One system for orders, stock, and retailer records See what's actually in stock, in real time Simple entry, no retraining required",
        featurehead: "Key features:",
        features: [
            "Complied Reports",
            "E-Invoicing Ready",
            "SLA Based Support",
        ],
        bestfor: "Best For",
        bestdescription: "Businesses looking for a simple and affordable Distributor Management System.",
        buttonText: "Book A Demo",
        buttonLink: "/book-a-demo",
    },
    {
        icon: "/logo-icons/growth-icon.png",
        name: "Core",
        shortDescription:
            "For distributors managing credit, collections, and multiple retailers day to day",
        price: "",
        duration: "",
        billing: "",
        tickIcon: OrangeIcon,
        description: "One system for orders, stock, and retailer records See what's actually in stock, in real time Simple entry, no retraining required",
        featurehead: "Everything in Starter, and:",
        features: [
            "Automated OTC Modules",
            "GST Complied Reports",
            "Access to Finance & Banking",
            "Automated Pricing Strategy",
        ],
        bestfor: "Best For",
        bestdescription: "Businesses aiming to streamline distribution processes and improve operational efficiency.",
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
            "For distributors ready to automate the reconciliation and routine order work",
        price: "",
        duration: "",
        billing: "",
        tickIcon: BlueIcon,
        description: "Automated reconciliation across locations Low-stock and overdue-payment alerts, before they become problems Ready to scale to more retailers without adding headcount",
        featurehead: "Everything in Core, and:",
        features: [
            "Business Intelligence (BI)",
            "Sales Force Automation (SFA)",
        ],
        bestfor: "Best For",
        bestdescription: "Organizations looking for complete visibility, field sales automation, and data-driven decision-making.",
        buttonText: "Book A Demo",
        buttonLink: "/book-a-demo",
        cardClass: "end",
        note: "",
    },
];
const DMS = () => {
    const whycards = [
        {
            id: 1,
            whyIcon: "/logo-icons/channels.png",
            title: "Centralized Distributor Management",
            description: "Manage distributors, dealers, territories, and products from one unified platform.",
        },
        {
            id: 2,
            whyIcon: "/logo-icons/strategic 1.png",
            title: "Real-Time Business Insights",
            description: "Monitor distributor performance, sales trends, and inventory through live dashboards.",
        },
        {
            id: 3,
            whyIcon: "/logo-icons/inventory 2.png",
            title: "Order & Inventory Control",
            description: "Track orders, stock movement, and inventory availability across your distribution network.",
        },
        {
            id: 4,
            whyIcon: "/logo-icons/engineering 1.png",
            title: "Automated Business Processes",
            description: "Reduce manual work by automating order processing, pricing, schemes, and approvals.",
        },
        {
            id: 5,
            whyIcon: "/logo-icons/product.png",
            title: "Stronger Distribution Network",
            description: "Build better relationships with distributors using transparent operations and efficient communication.",
        },
    ];

    const familiarCards = [
        {
            id: 1,
            text: "Forty retailers, half of them behind on payment, and you're the only one who actually knows who owes what",
        },
        {
            id: 2,
            text: "Stock says one thing. The warehouse says another.",
        },
        {
            id: 3,
            text: "An order goes out wrong, and you find out from an angry retailer not from your own system",
        },
    ];


    return (
        <>
            <Breadcrumb
                items={[
                    { label: "Home", path: "/" },
                    { label: "Pricing", path: "/pricing" },
                    { label: "Distributor Management System", path: "/pricing/dms" }
                ]}
            />
            <Banner
                bannerClass='dms-banner'
                title={
                    <>
                        {/* Distributor <br />
                        <span>Management System</span> */}
                        Stop reconciling five sources that all disagree.
                    </>
                }
                description="Track stock across locations, orders across retailers, and payments across everyone in one system that matches what's actually happening, not what was last updated."
                image={bannerImage}
                bullets={[
                    // "Real-Time Visibility",
                    // "Automated Workflows",
                    // "Better Collaboration",
                    // "Accurate Reporting",
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
                wchClass='dms-wch'
                title="Sound familiar?"
                spanTitle=""
                description=""
                familiarCards={familiarCards}
                cardsTitle={
                    <>
                        That's exactly what Distributor Pack was built to fix.
                    </>
                }
                cards={whycards}
            />
            <ImplementationProcess />
            <Plans
                title="Choose Your Edition"
                description="Flexible plans designed for businesses at every stage of growth."
                plans={plans}
                containerClass="bg-blue dms-card"
            />

        </>
    )
}

export default DMS
