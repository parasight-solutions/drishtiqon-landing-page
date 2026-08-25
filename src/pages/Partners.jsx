import React from 'react'
import Clients from '../components/Clients/Clients'
import Breadcrumb from '../components/Breadcrumb/Breadcrumb'
import PartnershipForm from '../components/Partnership/PartnershipForm'
import Programs from '../components/Partnership/PartnershipPrograms'

const Partners = () => {
    return (
        <>
            <Breadcrumb
                items={[
                    {
                        label: "Home",
                        path: "/",
                    },
                    {
                        label: "Partners",
                        path: "/partners",
                    },
                ]}
            />
            <PartnershipForm />
            <Programs/>
            <Clients className="no-bottom-padding" />
        </>
    )
}

export default Partners
