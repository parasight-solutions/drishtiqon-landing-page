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
        name: "Basic Edition",
        shortDescription:
            "",
        price: "",
        duration: "",
        billing: "",
        tickIcon: OrangeIcon,
        description: "Perfect for businesses beginning their digital transformation.",
        featurehead: "Features Included:",
        features: [
            "Zero Automation",
            "Basic Reports",
            "E-Invoicing Ready",
            "SLA Based Support",
        ],
        bestfor: "Best For",
        bestdescription: "Small businesses looking for an affordable ERP solution.",
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
        tickIcon: BlueIcon,
        description: "Automation designed for growing businesses.",
        featurehead: "Features Included:",
        features: [
            "Everything in Basic, plus",
            "Automated OTC Modules",
            "Basic Finance & Banking",
            "GST Complied Reports",

        ],
        bestfor: "Best For",
        bestdescription: "Businesses looking to streamline operations and reduce manual work.",
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
        tickIcon: OrangeIcon,
        description: "Advanced automation and business intelligence for scaling organizations.",
        featurehead: "Features Included:",
        features: [
            "Zero Automation",
            "Basic Reports",
            "E-Invoicing Ready",
            "SLA Based Support",
        ],
        bestfor: "Best For",
        bestdescription: "Small businesses looking for an affordable ERP solution.",
        buttonText: "Book A Demo",
        buttonLink: "#",
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
                        <span>MSME </span>Pack
                    </>
                }
                description="Manage sales, purchases, inventory, finance, and compliance from one intelligent platform. MSME Pack helps businesses automate daily operations, improve efficiency, and make smarter decisions with real-time insights."
                image={bannerImage}
                bullets={[
                    "Easy to use",
                    "GST Compliant",
                    "E-Invoicing Ready",
                    "SLA Based Support",
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
              wchClass='msme-wch'
                title="Why Choose"
                spanTitle="MSME Pack?"
                description="Running a growing business involves managing multiple processes every day—from sales and purchases to inventory and accounting. MSME Pack brings everything together into one integrated platform, helping you reduce manual work, improve accuracy, and scale your business with confidence."
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
