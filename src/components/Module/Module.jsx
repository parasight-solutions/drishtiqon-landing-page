import { section } from 'motion/react-client'
import React from 'react'
import './Module.css'
import TabImg from '/section-images/finance-tab.png'

const Module = () => {
    return (
        <section className='module pt-0'>
            <div className="container">
                <div className="row mb-lg-5 mb-4 text-center">
                    <div className="common-title">
                        <h2>All Modules. One Seamless Experience. </h2>
                        <p className='mb-0'>Manage every critical business process from a centralized ERP ecosystem designed to improve collaboration, productivity, and operational excellence.</p>
                    </div>
                </div>
                <div className="row">
                    <div className="col-lg-3 col-md-4 col-sm-6 mb-lg-0 mb-md-0 mb-3">
                        <ul class="nav nav-tabs" id="myTab" role="tablist">
                            <li class="nav-item" role="presentation">
                                <button class="nav-link active" id="finance-tab" data-bs-toggle="tab" data-bs-target="#finance" type="button" role="tab" aria-controls="finance" aria-selected="true">
                                    <div className="nav-flex">
                                        <div className="image">
                                            <img src="/logo-icons/money.png" alt="" />
                                        </div>
                                        <h6>Finance</h6>
                                    </div>
                                </button>
                            </li>
                            <li class="nav-item" role="presentation">
                                <button class="nav-link" id="procurement-tab" data-bs-toggle="tab" data-bs-target="#procurement" type="button" role="tab" aria-controls="procurement" aria-selected="false">
                                    <div className="nav-flex">
                                        <div className="image">
                                            <img src="/logo-icons/procurement.png" alt="" />
                                        </div>
                                        <h6>Procurement</h6>
                                    </div>
                                </button>
                            </li>
                            <li class="nav-item" role="presentation">
                                <button class="nav-link" id="inventory-tab" data-bs-toggle="tab" data-bs-target="#inventory" type="button" role="tab" aria-controls="inventory" aria-selected="false">
                                    <div className="nav-flex">
                                        <div className="image">
                                            <img src="/logo-icons/shipping.png" alt="" />
                                        </div>
                                        <h6>Inventory</h6>
                                    </div>
                                </button>
                            </li>
                            <li class="nav-item" role="presentation">
                                <button class="nav-link" id="production-tab" data-bs-toggle="tab" data-bs-target="#production" type="button" role="tab" aria-controls="production" aria-selected="false">
                                    <div className="nav-flex">
                                        <div className="image">
                                            <img src="/logo-icons/cube.png" alt="" />
                                        </div>
                                        <h6>Production</h6>
                                    </div>
                                </button>
                            </li>
                            <li class="nav-item" role="presentation">
                                <button class="nav-link" id="sales-tab" data-bs-toggle="tab" data-bs-target="#sales" type="button" role="tab" aria-controls="sales" aria-selected="false">
                                    <div className="nav-flex">
                                        <div className="image">
                                            <img src="/logo-icons/sales.png" alt="" />
                                        </div>
                                        <h6>Sales</h6>
                                    </div>
                                </button>
                            </li>
                            <li class="nav-item" role="presentation">
                                <button class="nav-link " id="warehouse-tab" data-bs-toggle="tab" data-bs-target="#warehouse" type="button" role="tab" aria-controls="warehouse" aria-selected="false">
                                    <div className="nav-flex">
                                        <div className="image">
                                            <img src="/logo-icons/warehouse.png" alt="" />
                                        </div>
                                        <h6>Warehouse</h6>
                                    </div>
                                </button>
                            </li>
                        </ul>

                    </div>
                    <div className="col-lg-9 col-md-8 col-sm-6">
                        <div class="tab-content" id="myTabContent">
                            <div class="tab-pane fade show active" id="finance" role="tabpanel" aria-labelledby="finance-tab">
                                <div className="image">
                                    <img src={TabImg} alt="finance" />
                                </div>
                            </div>
                            <div class="tab-pane fade" id="procurement" role="tabpanel" aria-labelledby="procurement-tab"><div className="image">
                                <img src={TabImg} alt="finance" />
                            </div></div>
                            <div class="tab-pane fade" id="inventory" role="tabpanel" aria-labelledby="inventory-tab"><div className="image">
                                <img src={TabImg} alt="finance" />
                            </div></div>
                            <div class="tab-pane fade" id="production" role="tabpanel" aria-labelledby="production-tab"><div className="image">
                                <img src={TabImg} alt="finance" />
                            </div></div>
                            <div class="tab-pane fade" id="sales" role="tabpanel" aria-labelledby="sales-tab"><div className="image">
                                <img src={TabImg} alt="finance" />
                            </div></div>

                            <div class="tab-pane fade" id="warehouse" role="tabpanel" aria-labelledby="warehouse-tab"><div className="image">
                                <img src={TabImg} alt="finance" />
                            </div></div>
                        </div>
                    </div>
                </div>
            </div>

        </section>
    )
}

export default Module