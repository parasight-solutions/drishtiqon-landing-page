import React from 'react'
import './Plans.css'
import OrangeIcon from '/logo-icons/orange-tick.png'
import BlueIcon from '/logo-icons/blue-tick.png'
import GreenIcon from '/logo-icons/green-tick.png'

const Plans = () => {
    return (
        <section className='plans pt-0'>
            <div className="container bg-cyan">
                <div className="row mb-lg-5 mb-4 text-center">
                    <div className="common-title">
                        <h2>Simple Plans, Powerful Platform. </h2>
                        <p className='mb-0'>Start with a plan that fits your business today and expand with modules as your operations grow.</p>
                    </div>
                </div>
                <div className="row">
                    <div className="col-lg-4 col-md-6 col-sm-12 mb-lg-0 mb-4">
                        <div className="card">
                            <div className="card-header">
                                <div className="image">
                                    <img src="/logo-icons/rocket.png" alt="" />
                                </div>
                                <div className="header-content">
                                    <h6>Starter</h6>
                                    <p>Perfect for small businesses starting their digital transformation journey.</p>
                                </div>
                            </div>
                            <div className="card-body">
                                <div class="need-card-price">
                                    <span class="amount">₹9,999</span>
                                    <span class="duration">/ month</span>
                                </div>
                                <p>Billed Annually</p>
                                <div className="list-wrapper">
                                    <div className="list">
                                        <img src={OrangeIcon} alt="tick" />
                                        <p>Core Platform Access</p>
                                    </div>
                                    <div className="list">
                                        <img src={OrangeIcon} />
                                        <p>User Management</p>
                                    </div>
                                    <div className="list">
                                        <img src={OrangeIcon} />
                                        <p>Business Dashboard</p>
                                    </div>
                                    <div className="list">
                                        <img src={OrangeIcon} />
                                        <p>Workflow Automation</p>
                                    </div>
                                    <div className="list">
                                        <img src={OrangeIcon} />
                                        <p>Email Support</p>
                                    </div>
                                </div>
                            </div>
                            <div className="card-footer">
                                <a href="#" className="common-btn">
                                    <p>Get Started</p>
                                </a>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-6 col-sm-12 mb-lg-0 mb-4">
                        <div className="card middle">
                            <div className="card-header">
                                <div className="image">
                                    <img src="/logo-icons/growth-icon.png" alt="" />
                                </div>
                                <div className="header-content">
                                    <h6>Growth</h6>
                                    <p>Built for growing businesses that need deeper insights and automation.</p>
                                </div>
                            </div>
                            <div className="card-body">
                                <div class="need-card-price">
                                    <span class="amount">₹19,999</span>
                                    <span class="duration">/ month</span>
                                </div>
                                <p>Billed Annually</p>
                                <div className="list-wrapper">
                                    <div className="list">
                                        <img src={BlueIcon} />
                                        <p>Everything in Starter</p>
                                    </div>
                                    <div className="list">
                                        <img src={BlueIcon} />
                                        <p>Advanced Analytics</p>
                                    </div>
                                    <div className="list">
                                        <img src={BlueIcon} />
                                        <p>Role-Based Access</p>
                                    </div>
                                    <div className="list">
                                        <img src={BlueIcon} />
                                        <p>Priority Support</p>
                                    </div>
                                    <div className="list">
                                        <img src={BlueIcon} />
                                        <p>API Integration</p>
                                    </div>
                                </div>
                            </div>
                            <h6>Adds On Modules</h6>
                            <div className="card-footer">
                                <a href="#" className="common-btn">
                                    <p>Start Free Trial</p>
                                </a>
                            </div>
                            <div className="pill">
                                <p>Most Popular</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-6 col-sm-12 mb-lg-0 mb-4">
                        <div className="card end">
                            <div className="card-header">
                                <div className="image">
                                    <img src="/logo-icons/enterprises.png" alt="" />
                                </div>
                                <div className="header-content">
                                    <h6>Enterprise</h6>
                                    <p>For organizations managing complex workflows across teams and locations.</p>
                                </div>
                            </div>
                            <div className="card-body">
                                <div class="need-card-price">
                                    <span class="amount">₹29,999</span>
                                    <span class="duration">/ month</span>
                                </div>
                                <p>Billed Annually</p>
                                <div className="list-wrapper">
                                    <div className="list">
                                        <img src={GreenIcon} alt="tick" />
                                        <p>Everything in Growth</p>
                                    </div>
                                    <div className="list">
                                        <img src={GreenIcon} alt="tick" />
                                        <p>Multi-Location Management</p>
                                    </div>
                                    <div className="list">
                                        <img src={GreenIcon} alt="tick" />
                                        <p>Dedicated Account Manager</p>
                                    </div>
                                    <div className="list">
                                        <img src={GreenIcon} alt="tick" />
                                        <p>SLA Support</p>
                                    </div>
                                    <div className="list">
                                        <img src={GreenIcon} alt="tick" />
                                        <p>Enterprise Security Controls</p>
                                    </div>
                                </div>
                            </div>
                            <h6>Adds On Modules</h6>

                            <div className="card-footer">
                                <a href="#" className="common-btn">
                                    <p>Talk To Sales</p>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Plans