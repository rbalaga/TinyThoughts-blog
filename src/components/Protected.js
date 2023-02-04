import React from "react";
import { connect } from "react-redux";

const Protected = ({ user, children }) => {
  return <>{user.id !== undefined && children}</>;
};

const mapStateToProps = (state) => ({
  user: state.users
});

export default connect(mapStateToProps)(Protected);