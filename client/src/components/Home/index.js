import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as securityActions from '../../actions/securityActions';
import Home from './page.js';

const mapStateToProps = state => ({
  security: state.security,
});

const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators(securityActions, dispatch),
})

export default connect(mapStateToProps, mapDispatchToProps)(
  Home,
);


