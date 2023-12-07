import React from 'react'

export default function Page({params}) {
    return(
        <div>Property - {`${params.slug}`}</div>
    )
}