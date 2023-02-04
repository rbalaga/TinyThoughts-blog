import React, { memo } from "react";
import { connect } from "react-redux";

const Unprotected = memo((user, children) => {
  return <>{user.id === undefined && children}</>;
});

const mapStateToProps = (state) => ({
  user: state.users,
});

export default connect(mapStateToProps)(Unprotected);
