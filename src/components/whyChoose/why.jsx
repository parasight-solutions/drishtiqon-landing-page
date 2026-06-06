import React from 'react'
import './why.css'

const why = () => {
  const whyData = [
    {
      id: 1,
      whyIcon: "/logo-icons/timeManaged.png",
      title: "Real-Time Visibility",
      description: "Monitor every department and process with live business insights.",
    },
    {
      id: 2,
      whyIcon: "/logo-icons/realTime.png",
      title: "Intelligent Automation",
      description: "Reduce manual work and streamline repetitive business processes.",
    },
    {
      id: 3,
      whyIcon: "/logo-icons/centralized.png",
      title: "Centralized Control",
      description: "Manage operations, resources, and performance from one platform.",
    },
    {
      id: 4,
      whyIcon: "/logo-icons/scalability.png",
      title: "Scalable Architecture",
      description: "Built to support growing businesses across multiple teams and locations.",
    },
    {
      id: 5,
      whyIcon: "/logo-icons/shield.png",
      title: "Secure & Reliable",
      description: "Enterprise-grade security with controlled user access & protection.",
    },
  ];

  return (
    <section className='why pt-0'>
      <div className="container">
        <div className="row text-center mb-lg-5 mb-4">
          <div className="common-title">
            <h2>Why Businesses Choose DrishtIQon </h2>
            <p>Manage every critical business process from a centralized ERP ecosystem designed to improve collaboration, productivity, and operational excellence.</p>
          </div>
        </div>
        <div className="grid-container">
          {whyData.map((item) => (
            <div className="why-card" key={item.id}>
              <div className="image">
                <img src={item.whyIcon} alt={item.title} />
              </div>
              <h3>{item.title}</h3>
              <p>{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default why