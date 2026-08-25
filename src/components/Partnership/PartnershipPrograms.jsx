import React from "react";
import "./PartnershipPrograms.css";
import { Handshake, Wrench } from "lucide-react";

const PartnershipPrograms = () => {
  return (
    <section className="partnership-programs " data-aos="fade-up"  >
      <div className="container">
        {/* Heading */}
        <div className="programs-header" data-aos="fade-up">
          <h2>
            DrishtIQon's Partnership{" "}
            <span className="programs-highlight">Programs</span>
          </h2>

          <p>
            Choose the model that fits your expertise, team size and appetite
            for delivery work.
          </p>
        </div>

        {/* Cards */}
        <div className="row justify-content-center programs-row" data-aos="fade-up"  data-aos-delay="200">
          {/* Affiliate Partner */}
          <div className="col-lg-6"> 
            <div className="program-card affiliate-card">
              <div className="program-icon affiliate-icon">
                <Handshake />
              </div>

              <h3>Affiliate Partner</h3>

              <p className="program-description">
                For consultants, CAs and IT advisors who refer growing
                businesses and earn recurring commission on every deployment.
              </p>

              <ul className="program-benefits">
                <li>
                  <span className="program-dot" />
                  Referral commission on ARR
                </li>

                <li>
                  <span className="program-dot" />
                  Sales collateral &amp; demo access
                </li>
              </ul>
            </div>
          </div>

          {/* Service Partner */}
          <div className="col-lg-6">
            <div className="program-card service-card">
              <div className="program-icon service-icon">
                <Wrench />
              </div>

              <h3>Service Partner</h3>

              <p className="program-description">
                For implementation teams delivering configuration, data
                migration, training and ongoing functional support.
              </p>

              <ul className="program-benefits">
                <li>
                  <span className="program-dot" />
                  100% service revenue retention
                </li>

                <li>
                  <span className="program-dot" />
                  Certification &amp; sandbox access
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PartnershipPrograms;