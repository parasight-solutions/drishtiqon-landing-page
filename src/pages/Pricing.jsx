import React from 'react'
import Breadcrumb from '../components/Breadcrumb/Breadcrumb';

const Pricing = () => {
    return (
        <>
            <Breadcrumb
                items={[
                    { label: "Home", path: "/" },
                    { label: "Pricing", path: "/pricing" },
                ]}
            />
        </>
    )
}

export default Pricing
