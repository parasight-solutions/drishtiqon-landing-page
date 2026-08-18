import React from "react";
import "./Module.css";
import TabImg from "/section-images/finance-tab.png";

const Module = () => {
    const modules = [
        {
            id: "sales",
            title: "Sales",
            icon: "/logo-icons/sales.png",
            img: "/section-images/sales.png"
        },
        {
            id: "purchase",
            title: "Purchase",
            icon: "/logo-icons/procurement.png",
            img: "/section-images/purchase.png"
        },
        {
            id: "inventory",
            title: "Inventory",
            icon: "/logo-icons/shipping.png",
            img: "/section-images/inventory.png"
        },
        {
            id: "finance",
            title: "Finance & Banking",
            icon: "/logo-icons/money.png",
            img: "/section-images/finance&banking.png"
        },
        {
            id: "master-administration",
            title: "Master Administration",
            icon: "/logo-icons/cube.png",
            img: "/section-images/master_administration.png"
        },
    ];

    return (
        <section className="module pt-0">
            <div className="container">

                <div className="row mb-lg-5 mb-4 text-center">
                    <div className="common-title" data-aos="fade-up">
                        <h2>All Modules. One Seamless Experience.</h2>
                        <p className="mb-0">
                            Manage every critical business process from a centralized
                            ERP ecosystem designed to improve collaboration,
                            productivity, and operational excellence.
                        </p>
                    </div>
                </div>

                <div className="row">

                    {/* Module Navigation */}
                    <div
                        className="col-lg-3 col-md-4 col-sm-6 mb-lg-0 mb-md-0 mb-3"
                        data-aos="fade-right"
                    >
                        <ul className="nav nav-tabs" id="myTab" role="tablist">

                            {modules.map((module, index) => (
                                <li
                                    className="nav-item"
                                    role="presentation"
                                    key={module.id}
                                >
                                    <button
                                        className={`nav-link ${index === 3 ? "active" : ""
                                            }`}
                                        id={`${module.id}-tab`}
                                        data-bs-toggle="tab"
                                        data-bs-target={`#${module.id}`}
                                        type="button"
                                        role="tab"
                                        aria-controls={module.id}
                                        aria-selected={index === 3}
                                    >
                                        <div className="nav-flex">
                                            <div className="image">
                                                <img
                                                    src={module.icon}
                                                    alt={module.title}
                                                />
                                            </div>

                                            <h6>{module.title}</h6>
                                        </div>
                                    </button>
                                </li>
                            ))}

                        </ul>
                    </div>

                    {/* Module Content */}
                    <div
                        className="col-lg-9 col-md-8 col-sm-6"
                        data-aos="fade-left"
                    >
                        <div
                            className="tab-content"
                            id="myTabContent"
                        >

                            {modules.map((module, index) => (
                                <div
                                    className={`tab-pane fade ${index === 3 ? "show active" : ""
                                        }`}
                                    id={module.id}
                                    role="tabpanel"
                                    aria-labelledby={`${module.id}-tab`}
                                    key={module.id}
                                >
                                    <div className="image">
                                        <img
                                            src={module.img}
                                            alt={module.title}
                                        />
                                    </div>
                                </div>
                            ))}

                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
};

export default Module;