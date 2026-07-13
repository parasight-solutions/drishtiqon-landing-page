import { Link } from "react-router-dom";
import React from "react";
import "../Breadcrumb/Breadcrumb.css"
import { section } from "motion/react-client";

const Breadcrumb = ({ items }) => {
    return (
        <section className="breadcrumb">
            <div className="container">
                {items.map((item, index) => (
                    <span key={index}>
                        {index !== items.length - 1 ? (
                            <>
                                <Link to={item.path}>{item.label}</Link>
                                <span className="separator"> &gt; </span>
                            </>
                        ) : (
                            <span className="active">{item.label}</span>
                        )}
                    </span>
                ))}
            </div>
        </section>
    );
};

export default Breadcrumb;