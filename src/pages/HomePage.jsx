import React from 'react'
import Banner from '../components/Banner/Banner'
import Clients from '../components/Clients/Clients'
import WhyChooseUs from '../components/whyChoose/why'
import Analytics from '../components/Analytics/Analytics'
import Solutions from '../components/Solutions/Solutions'
import Need from '../components/Need/Need'
import Module from '../components/Module/Module'
import Plans from '../components/Plans/Plans'
import Breadcrumb from '../components/Breadcrumb/Breadcrumb'
import bannerImage from "/section-images/banner-img.png";

import OrangeIcon from "/logo-icons/orange-tick.png";
import BlueIcon from "/logo-icons/blue-tick.png";
import GreenIcon from "/logo-icons/green-tick.png";

const plans = [
    {
        icon: "/logo-icons/rocket.png",
        name: "MSME Pack",
        shortDescription:
            "Designed for growing small and medium businesses.",
        price: "",
        duration: "",
        billing: "",
        tickIcon: OrangeIcon,
        description: "Automate daily operations, simplify accounting, ensure GST compliance, and manage your business from a single platform.",
        features: [
            "Easy to implement",
            "GST & E-Invoicing Ready",
            "Business Reports",
            "Scalable Packages",
        ],
        buttonText: "Explore MSME Pack",
        buttonLink: "/msme-pack",
    },
    {
        icon: "/logo-icons/growth-icon.png",
        name: "Distributor Management System",
        shortDescription:
            "Complete for modern businesses.",
        price: "",
        duration: "",
        billing: "",
        tickIcon: BlueIcon,
        description: "Manage distributors, dealers, stock movement, pricing, sales operations, and financial workflows with ease.",
        features: [
            "OTC Automation",
            "Distributor Network Management",
            "Pricing Strategy",
            "Sales Performance",

        ],
        buttonText: "Explore Distributor Management System",
        buttonLink: "/dms",
        cardClass: "middle",
        pill: "Most Popular",
        note: "",
    },
    {
        icon: "/logo-icons/enterprises.png",
        name: "Business Enterprise Suite",
        shortDescription:
            "A fully customizable ERP solution built around your business.",
        price: "",
        duration: "",
        billing: "",
        tickIcon: GreenIcon,
        description: "Enterprise-grade software tailored to your workflows, departments, approvals, and operational requirements.",
        features: [
            "Fully Customization",
            "Enterprise Modules",
            "Dedicated Support",
            "Unlimited Scalability",
        ],
        buttonText: "Business Enterprise Suite",
        buttonLink: "/bes",
        cardClass: "end",
        note: "",
    },
];

const HomePage = () => {
    const whycards = [
        {
            id: 1,
            whyIcon: "/logo-icons/timeManaged.png",
            title: "Real-Time Visibility",
            description: "See stock counts and cash position the moment they change. The #1 gap",
        },
        {
            id: 2,
            whyIcon: "/logo-icons/realTime.png",
            title: "Intelligent Automation",
            description: "Kill the manual reconciliation work our consultants watched teams redo every single month.",
        },
        {
            id: 3,
            whyIcon: "/logo-icons/centralized.png",
            title: "Centralized Control",
            description: "One login instead of the 4-5 disconnected tools most clients started with.",
        },
        {
            id: 4,
            whyIcon: "/logo-icons/scalability.png",
            title: "Scalable Architecture",
            description: "Built to grow with you from a 10-person team to multi-location operations.",
        },
        {
            id: 5,
            whyIcon: "/logo-icons/shield.png",
            title: "Secure & Reliable",
            description: "ISO-aligned access control & encrypted data, informed by real client compliance needs.",
        },
    ];

    return (
        <>
            {/* <Breadcrumb
                items={[
                    { label: "Home", path: "/" }
                ]}
            /> */}
            <Banner
                title={
                    <>
                        Your Business Has Outgrown Excel, Tally & WhatsApp Groups.<span>Your ERP Should Too.</span>

                    </>
                }
                description="DrishtlQon unifies Finance, Inventory, Procurement, Sales &
Warehouse into one platform, designed by our consulting team’s 6 years inside businesses just like yours."
                image={bannerImage}
                primaryBtn={{
                    text: "Book A Demo -->",
                    link: "#",
                }}
                secondaryBtn={{
                    text: "Watch 2-Min Walkthrough",
                    link: "#",
                }}
                showPlayIcon={true}
            />
            <Clients />
            <Module />
            <WhyChooseUs
                title="Why Businesses Choose DrishtIQon"
                description="Manage every critical business process from a centralized ERP ecosystem designed to improve collaboration, productivity, and operational excellence."
                cards={whycards}
            />
            <Analytics />
            <Solutions />
            {/* <Need /> */}
            <Plans
                title="Simple Plans, Powerful Platform."
                description="Start with a plan that fits your business today and expand with modules as your operations grow."
                plans={plans}
                containerClass="bg-cyan"
            />
        </>
    )
}

export default HomePage
