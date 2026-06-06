import React from 'react'
import './Need.css'

const Need = () => {
  return (
      <section className="need pt-0">
          <div className="container need-box">
              <div className="row">
                  <div className="col-lg-5 col-md-12 col-sm-12 mb-lg-0 mb-4">
                    <div className="common-title mb-4">
                        <h2>Pay Only For What You Need</h2>
                        <p>Every business is unique. Build your ERP by choosing the modules that fit your operations and scale as your business grows.</p>
                        <p>Add or remove modules as you grow. </p>
                      </div>
                      <div className="row">
                          <div className="col-lg-6 col-md-6 col-6">
                              <div className="need-list">
                                  <div className="image">
                                      <img src="/logo-icons/money.png" alt="money" />
                                  </div>
                                  <h6>Finance</h6>
                              </div>
                              <div className="need-list">
                                  <div className="image">
                                      <img src="/logo-icons/money.png" alt="money" />
                                  </div>
                                  <h6>Inventory</h6>
                              </div>
                              <div className="need-list">
                                  <div className="image">
                                      <img src="/logo-icons/money.png" alt="money" />
                                  </div>
                                  <h6>Sales</h6>
                              </div>
                          </div>
                          <div className="col-lg-6 col-md-6 col-6">
                              <div className="need-list">
                                  <div className="image">
                                      <img src="/logo-icons/money.png" alt="money" />
                                  </div>
                                  <h6>Procurement</h6>
                              </div>
                              <div className="need-list">
                                  <div className="image">
                                      <img src="/logo-icons/money.png" alt="money" />
                                  </div>
                                  <h6>Production</h6>
                              </div>
                              <div className="need-list">
                                  <div className="image">
                                      <img src="/logo-icons/money.png" alt="money" />
                                  </div>
                                  <h6>Warehouse</h6>
                              </div>
                          </div>
                      </div>
                  </div>
                   <div className="col-lg-7 col-md-12 col-sm-12">
                  <div className="row plus">
                      <div className="col-lg-6 col-md-6 col-sm-12 mb-lg-0 mb-md-0 mb-2 pe-lg-5">
                          <div className="need-card">
                               <h3>Base Platform</h3>

                                <div class="need-card-price">
                                    <span class="amount">₹9,999</span>
                                    <span class="duration">/ month</span>
                                </div>

                                <p>Includes Core Platform</p>

                                <ul>
                                    <li>User Management</li>
                                    <li>Dashboards & Reports</li>
                                    <li>Workflow Automation</li>
                                    <li>Email Support</li>
                                </ul>
                          </div>
                      </div>
                      <div className="col-lg-6 col-md-6 col-sm-12 mb-lg-0 mb-md-0 mb-2">
                          <div className="need-card">
                               <h3>Add Modules</h3>

                                <div class="need-card-price">
                                    <span class="amount">₹2,999 </span>
                                    <span class="duration"> / month per module</span>
                                </div>

                                <p>Add the modules you need and scale anytime</p>

                                <a href="#" className="common-btn text-center">
                                    <p>Start Your Journey</p>
                                  </a>
                                  <h5>Request A Custom Quote</h5>
                          </div>
                      </div>
                  </div>
              </div>
              </div>
             

          </div>
    </section>
  )
}

export default Need