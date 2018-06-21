import React from 'react';
import classes from './Layout.css';
import SearchBox from '../containers/SearchBox/SearchBox';
import { Loading } from './Loading/Loading';
import { connect } from "react-redux";

export const Layout = (props) => {
  return (
    <div>
      <div className={classes.Header}>
          GitHub User finder
      </div>
      <div>Content
          <SearchBox />
          {props.isLoading ? <Loading /> : null}
      </div>
      <div className={classes.Footer}>
          <p>Hecho en casa</p>
      </div>
    </div>
  )
}

const mapStateToProps = state => ({ isLoading: state.isLoading});

export default connect(mapStateToProps, null)(Layout);
