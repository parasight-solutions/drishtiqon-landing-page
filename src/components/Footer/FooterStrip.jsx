import React from 'react'

const FooterStrip = () => {
    return (
        <div className="footer-strip">
            <div className="container bg-gray">
                <div className="row">
                    <div className="col-lg-7 col-md-12 col-sm-12">
                        <div className="common-title">
                            <h2>Ready To Transform Your <span>Business?</span> </h2>
                            <p className='mb-lg-0'>Connect Finance, Inventory, Procurement, Production, Sales, and Warehouse operations on a single platform built for visibility, efficiency, and growth.</p>
                        </div>
                    </div>
                    <div className="col-lg-5 col-md-12 col-sm-12 d-flex align-items-center justify-content-lg-end">

                        <div className="btn-group gap-lg-3 gap-sm-1 gap-1 flex-lg-row flex-md-row flex-sm-row flex-column">
                            <a href="#" className="common-btn">
                                <p>Book A Demo</p>
                            </a>
                            <a href="#" className="common-btn">
                                <p>Talk To An ERP Expert</p>
                            </a>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    )
}

export default FooterStrip