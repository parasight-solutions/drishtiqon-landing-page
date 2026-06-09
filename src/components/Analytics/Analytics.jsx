import React from 'react'
import './Analytics.css'
import ListIcon from '/logo-icons/list-icon.png'
import AnaImg from '/section-images/analytics-img.png'

const Analytics = () => {
  const List = [
    {
      text: 'Real-Time Dashboards'
    },
    {
      text: 'Department Performance Tracking'
    },
    {
      text: 'Custom Reports & Analytics'
    },
    {
      text: 'Inventory & Production Insights'
    },
    {
      text: 'Financial Performance Monitoring'
    },
    {
      text: 'Faster Business Decisions'
    },



  ]
  return (
    <section className='analytics py-0' data-aos="fade-up">
      <div className="container">
        <div className="row bg-big">
          <div className="col-lg-6 col-md-12 col-sm-12">
            <div className="common-title">
              <h2 style={{ color: '#fff' }}>See the bigger picture.
                Act with Confidence. </h2>
              <p style={{ color: '#fff' }}>Transform operational data into actionable insights through powerful analytics and intelligent reporting.</p>
            </div>
            <div className="ana-list">
              {List.map((item, index) => (
                <div className="ana-links" key={index}>
                  <img src={ListIcon} alt="list icon" />
                  <p>{item.text}</p>
                </div>
              ))}
            </div>
          </div>
          <div className="col-lg-6 col-md-12 col-sm-12 mt-lg-0 mt-2">
            <img src={AnaImg} alt="analytics image" />
          </div>
        </div>
      </div>
    </section>
  )
}

export default Analytics