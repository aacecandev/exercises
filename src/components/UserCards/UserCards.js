import React from "react";
import { connect } from "react-redux";
import { IndividualCard } from "./IndividualCard/IndividualCard";

export const UserCards = props => {
    return (
        <div>
            {props.users.items ? props.users.items.map(e => <IndividualCard key={e.login} userInfo={e} />) : ""}
        </div>
    )
}

const mapStateToProps = state => ({users: state.foundUsers});

export default connect(mapStateToProps)(UserCards);
