import React from 'react'
import Breadcrumb from '../components/Breadcrumb/Breadcrumb';
import Plans from '../components/Plans/Plans'

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


const Pricing = () => {
    return (
        <>
            <Breadcrumb
                items={[
                    { label: "Home", path: "/" },
                    { label: "Pricing", path: "/pricing" },
                ]}
            />

            <Plans
                title="Simple Plans, Powerful Platform."
                description="Start with a plan that fits your business today and expand with modules as your operations grow."
                plans={plans}
                containerClass="bg-blue"
            />
        </>
    )
}

export default Pricing
