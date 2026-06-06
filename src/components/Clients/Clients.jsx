import React from 'react'
import ClientCarousel from './ClientCarousel'
import "./Clients.css"


const Clients = () => {

    const counterData = [
        {
            id: 1,
            value: 500,
            suffix: "+",
            label: "Businesses Managed"
        },
        {
            id: 2,
            value: 35,
            suffix: "%",
            label: "Increase In Efficiency"
        },
        {
            id: 2,
            value: 99.9,
            suffix: "%",
            label: "Data Accuracy"
        },
        {
            id: 2,
            value: 24,
            suffix: "/",
            SecValue:7,
            label: "Business Visibility"
        },
    ];

  return (
      <section className="clients-section">
          <div className="container">
              <div className="row text-center">
                  <div className="common-title">
                      <h2>Trusted by Growing Businesses Across Industries</h2>
                      <p>Helping organizations streamline operations, improve efficiency, and scale with confidence.</p>
                  </div>
              </div>
              <div className="row mt-5 fade-bg">
                  <ClientCarousel />
              </div>
              <div className="row">
                {counterData.map((counter) => (
                    <div className="col-lg-3 col-md-6 col-sm-12 mb-lg-0 mb-md-2 mb-sm-2 mb-2">
                        <div key={counter.id} className="counter-box" >
                            <h2>{counter.value}{counter.suffix}{counter.SecValue}</h2>
                            <p>{counter.label}</p>
                        </div>
                    </div>
                ))}
              </div>
          </div>
      </section>
  )
}

export default Clients