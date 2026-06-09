import React from 'react'
import './Solutions.css'

const Solutions = () => {
    const solutions = [
        {
            id: 1,
            img: '/logo-icons/manufacturing.png',
            title: 'Manufacturing',
            description: 'Optimize production planning, inventory control, resource utilization, and shop floor operations.'
        },
        {
            id: 2,
            img: '/logo-icons/retail.png',
            title: 'Retail',
            description: 'Unify inventory, sales, procurement, and customer management across all retail channels.'
        },
        {
            id: 3,
            img: '/logo-icons/distribution.png',
            title: 'Distribution',
            description: 'Improve order fulfillment, supply chain visibility, and warehouse efficiency from end to end.'
        },
        {
            id: 4,
            img: '/logo-icons/delivery-truck.png',
            title: 'Logistics',
            description: 'Track shipments, optimize routes, and manage warehouse operations with real-time visibility.'
        },
    ]
    return (
        <section className="solutions">
            <div className="container">
                <div className="row mb-lg-5 mb-3 text-center">
                    <div className="common-title" data-aos="fade-up">
                        <h2>Solutions for Every Industries</h2>
                        <p>Tailored ERP Solutions For Every Industry</p>
                    </div>
                </div>
                <div className="row">
                    {solutions.map((item, index) => (
                        <div className="col-lg-3 col-md-6 col-sm-12 mb-lg-0 mb-3" key={index} data-aos="fade-up">
                            <div className="solution-card">
                                <div className="image">
                                    <img src={item.img} alt="icon" />
                                </div>
                                <div className="content">
                                    <h3>{item.title}</h3>
                                    <p>{item.description}</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default Solutions