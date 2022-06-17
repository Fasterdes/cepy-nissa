import React from "react";
import { Helmet } from "react-helmet";

export default function MetaHead({ title }) {
    return (
        <Helmet>
            <title>{title}</title>
            <link rel="preconnect" href="https://fonts.googleapis.com"></link>
            <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin></link>
            <link href="https://fonts.googleapis.com/css2?family=Inter:wght@100;200;400;500;600;700;800;900&family=Lora:ital,wght@0,400;0,500;0,600;0,700;1,400;1,500;1,600;1,700&display=swap" rel="stylesheet"></link>
        </Helmet>
    )
}