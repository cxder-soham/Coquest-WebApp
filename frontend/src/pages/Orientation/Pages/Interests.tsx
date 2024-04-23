import React, { useState } from "react";
import { gql } from "graphql-request";
import './Interests.css';
import InterestList from "../../../components/CheckboxList";

const topicsQuery = gql`
    query GetTopics {
        options: getTopics {
            name
        }
    }
`;

function Interests(props: any) {
    const [topics, setTopics] = useState(new Set<string>(props.user.topics));

    function setInterests(interests: Set<string>) {
        setTopics(interests);
    }
   
    return (
        <div className="interests-page">
            <h3 className="main-heading">Let's get you stiched in</h3>
            <p className="sub-heading">What are your interests?</p>
            <p className="sub-text">Select all that apply</p>
            <input type="search" className="search" name="search" />
            <i className="fa-solid fa-magnifying-glass"></i>

            
            <InterestList setFuncs={[setInterests, props.updateData]} checkedData={topics} query={topicsQuery} />
        </div>
    );
}

export default Interests;
