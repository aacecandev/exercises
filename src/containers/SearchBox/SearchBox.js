import React, { Component } from "react";
import { connect } from "react-redux";
import { writing, search } from "../../actions/SearchBoxActions";

export class SearchBox extends Component {
  render() {
    return (
      <div>
        <input type="text" onChange={e => this.props.writing(e.target.value)} />
      </div>
    );
  }
}

const mapStateToProps = state => ({ input: state.userInput });

const mapDispatchToProps = { writing };

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SearchBox);
