import React from 'react'
import Banner from '../components/Banner/Banner'
import bannerImage from "/section-images/dms_banner.png";
import Breadcrumb from '../components/Breadcrumb/Breadcrumb';
import WhyChooseUs from '../components/whyChoose/why'
import Plans from '../components/Plans/Plans'
import OrangeIcon from "/logo-icons/orange-tick.png";
import BlueIcon from "/logo-icons/blue-tick.png";
import GreenIcon from "/logo-icons/green-tick.png";

const plans = [
    {
        icon: "/logo-icons/rocket.png",
        name: "Basic Edition",
        shortDescription:
            "",
        price: "",
        duration: "",
        billing: "",
        tickIcon: BlueIcon,
        description: "Perfect for businesses beginning their digital transformation.",
        featurehead: "Features Included:",
        features: [
            "Zero Automation",
            "Basic Reports",
            "E-Invoicing Ready",
            "SLA Based Support",
        ],
        bestfor: "Best For",
        bestdescription: "Businesses looking for a simple and affordable Distributor Management System.",
        buttonText: "Book A Demo",
        buttonLink: "#",
    },
    {
        icon: "/logo-icons/growth-icon.png",
        name: "Silver Edition",
        shortDescription:
            "",
        price: "",
        duration: "",
        billing: "",
        tickIcon: OrangeIcon,
        description: "Automation designed for growing businesses.",
        featurehead: "Everything in Basic, plus:",
        features: [
            "OTC Automation",
            "GST Complied Reports",
            "Basic Finance & Banking",
            "Automated Pricing Strategy",
        ],
        bestfor: "Best For",
        bestdescription: "Businesses aiming to streamline distribution processes and improve operational efficiency.",
        buttonText: "Book A Demo",
        buttonLink: "#",
        cardClass: "middle",
        pill: "Most Popular",
        note: "",
    },
    {
        icon: "/logo-icons/rocket.png",
        name: "Gold Edition",
        shortDescription:
            "",
        price: "",
        duration: "",
        billing: "",
        tickIcon: BlueIcon,
        description: "Advanced automation and business intelligence for scaling organizations.",
        featurehead: "Features Included:",
        features: [
            "Business Intelligence (BI)",
            "Sales Force Automation (SFA)",
        ],
        bestfor: "Best For",
        bestdescription: "Organizations looking for complete visibility, field sales automation, and data-driven decision-making.",
        buttonText: "Book A Demo",
        buttonLink: "#",
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
                        Distributor <br />
                        <span>Management System</span>

                    </>
                }
                description="Streamline and automate your distributor network, sales operations, order fulfillment, and inventory management with an intelligent platform designed to improve visibility, collaboration, and business performance."
                image={bannerImage}
                bullets={[
                    "Real-Time Visibility",
                    "Automated Workflows",
                    "Better Collaboration",
                    "Accurate Reporting",
                ]}
                primaryBtn={{
                    text: "Book A Demo",
                    link: "#",
                }}
                secondaryBtn={{
                    text: "Talk to an Expert",
                    link: "#",
                }}
                showPlayIcon={false}
            />
            <WhyChooseUs
                wchClass='dms-wch'
                title="Why Choose"
                spanTitle="Distributor Management System?"
                description="Managing distributors across multiple locations can be complex. DrishtiQon Distributor Management System centralizes your entire distribution ecosystem—from order processing and inventory to pricing, schemes, and performance analytics—so you can make faster, data-driven decisions."
                cards={whycards}
            />
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
