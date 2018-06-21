import React, { Component } from "react";
import { connect } from "react-redux";
import { writing, searchDone, hasStoppedWriting } from "../../actions/SearchBoxActions";
import axios from "axios";

const CancelToken = axios.CancelToken;
const source = CancelToken.source();

export class SearchBox extends Component {
  searching = word => {
    axios
      .get(`https://api.github.com/search/users?q=${word}+in:login`, {
        cancelToken: source.token
      })
      .then(response => {
        this.props.searchDone(response.data);
      })
      /* .catch( (e, response) => {
        let counter = 0;
        const timeOut = setInterval(() => {
          counter++;
          counter === 3
            ? clearInterval(timeOut)
            : this.props.searchDone(response.data);
        }, 2000);
        console.log(e)}
      ); */
  };

  render() {
    return (
      <div>
        <input
          type="text"
          onChange={e => {
            this.props.writing(e.target.value)
          }}
          onKeyUp={ e => {
            this.searching(e.target.value);
            this.props.hasStoppedWriting()
          }
          }
        />
      </div>
    );
  }
}

const mapStateToProps = state => ({
  init: state.init,
  input: state.userInput,
  isWriting: state.isWriting,
  hasStoppedWriting: state.hasStoppedWriting
});

const mapDispatchToProps = { writing, searchDone, hasStoppedWriting };

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SearchBox);
