import React from "react";
import { connect } from "react-redux";

export const UserCards = props => {
    console.log(props.users)
    return (
        <div>
            {props.users.items ? props.users.items.map(e => <p>{e.login}</p>) : ""}
        </div>
    )
}

const mapStateToProps = state => ({users: state.foundUsers});

export default connect(mapStateToProps)(UserCards);
