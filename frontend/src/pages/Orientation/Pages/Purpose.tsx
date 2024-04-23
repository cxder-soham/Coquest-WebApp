import React, { useState } from "react";
import { gql } from "graphql-request";
import './Purpose.css';
import PurposeList from "../../../components/CheckboxList";

const motivesQuery = gql`
    query GetMotives {
        options: getMotives {
            name
        }
    }
`;

function Purpose(props: any) {
    const [motives, setMotives] = useState<Set<string>>(new Set(props.user.motives));

    return (
        <div className="purpose-page">
            <h3 className="main-heading">Let's get you stiched in</h3>
            <p className="sub-heading">Find your team. What brings you to Regenquest?</p>
            <p className="sub-text">Select all that apply</p>
            
            <PurposeList setFuncs={[setMotives, props.updateData]} checkedData={motives} query={motivesQuery} />
        </div>
    );
}

export default Purpose;
