import React, { Component } from "react";
import { connect } from "react-redux";
import { writing, searchDone } from "../../actions/SearchBoxActions";
import axios from "axios";

export class SearchBox extends Component {
  searching = word => {
    axios
      .get(`https://api.github.com/search/users?q=${word}+in:login`)
      .then(response => {
        let counter = 0;
        const timeOut = setInterval(() => {
          counter++
          counter === 3 ? clearInterval(timeOut)
            : this.props.searchDone(response.data);
        }, 200);
      })
      .catch(e => console.log(e));
  };

  render() {
    return (
      <div>
        <input type="text" onChange={e => {
          this.props.writing(e.target.value)
          this.searching(e.target.value)}} />
      </div>
    );
  }
}

const mapStateToProps = state => ({ input: state.userInput });

const mapDispatchToProps = { writing, searchDone };

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SearchBox);
