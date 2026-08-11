import React from 'react'
import Banner from '../components/Banner/Banner'
import bannerImage from "/section-images/bes_banner.png";
import Breadcrumb from '../components/Breadcrumb/Breadcrumb';
import WhyChooseUs from '../components/whyChoose/why'
import Plans from '../components/Plans/Plans'
import OrangeIcon from "/logo-icons/orange-tick.png";
import BlueIcon from "/logo-icons/blue-tick.png";
import GreenIcon from "/logo-icons/green-tick.png";
import Need from '../components/Need/Need';


const BES = () => {
    const whycards = [
        {
            id: 1,
            whyIcon: "/logo-icons/settings.png",
            title: "Fully Customizable",
            description: "Configure workflows, dashboards, approvals, and modules based on your business processes.",
        },
        {
            id: 2,
            whyIcon: "/logo-icons/realTime.png",
            title: "Enterprise Integration",
            description: "Connect finance, HR, CRM, manufacturing, procurement, and third-party applications into one platform.",
        },
        {
            id: 3,
            whyIcon: "/logo-icons/bar-chart.png",
            title: "Advanced Analytics",
            description: "Gain real-time business insights through interactive dashboards, KPIs, and Business Intelligence.",
        },
        {
            id: 4,
            whyIcon: "/logo-icons/shield 1.png",
            title: "Enterprise Security",
            description: "Protect sensitive business data with role-based access, audit logs, and enterprise-grade security.",
        },
        {
            id: 5,
            whyIcon: "/logo-icons/customer-service.png",
            title: "Dedicated Support",
            description: "Work with a dedicated implementation team for deployment, training, and ongoing support.",
        },
    ];

    return (
        <>
            <Breadcrumb
                items={[
                    { label: "Home", path: "/" },
                    { label: "Pricing", path: "/pricing" },
                    { label: "Business Enterprise Suit", path: "/pricing/bes" }
                ]}
            />
            <Banner
                bannerClass='bes-banner'
                title={
                    <>
                        {/* Business <br />
                        <span>Enterprise Suit</span> */}
                        Built to be shaped around your organization, not the other way around.

                    </>
                }
                description="Multi-entity operations, enterprise-grade security, and a platform that adapts to your structure. Start with the core, add exactly what your organization needs."
                image={bannerImage}
                bullets={[
                    // "Fully Customizable",
                    // "Enterprise-Grade Security",
                    // "Advanced Analytics & BI",
                    // "Dedicated Implementation",
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
                wchClass='bes-wch'
                title="Why Choose"
                spanTitle="Business Enterprise Suite?"
                description="Every enterprise operates differently. Business Enterprise Suite is built to fit your organization's unique processes, approval hierarchies, departments, and reporting requirements. From implementation to ongoing support, we deliver an ERP solution tailored specifically to your business."
                cards={whycards}
            />
            {/* <Plans
                title="Choose Your Edition"
                description="Flexible plans designed for businesses at every stage of growth."
                plans={plans}
            /> */}
            <Need />

        </>
    )
}

export default BES
