import React from "react";
import Breadcrumb from "../components/Breadcrumb/Breadcrumb";
import BookADemo from "../components/BookADemo/BookADemo";
import Clients from "../components/Clients/Clients";

const BookADemoPage = () => {
    return (
        <>
            <Breadcrumb
                items={[
                    {
                        label: "Home",
                        path: "/",
                    },
                    {
                        label: "Pricing",
                        path: "/pricing",
                    },
                    {
                        label: "Business Enterprise Suite",
                        path: "/pricing/business-enterprise-suite",
                    },
                    {
                        label: "Book A Demo",
                        path: "/book-a-demo",
                    },
                ]}
            />

            <BookADemo />
            <Clients />
        </>
    );
};

export default BookADemoPage;