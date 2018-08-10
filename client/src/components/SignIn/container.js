import {authorize } from '../../actions/signIn'
import {connect} from 'react-redux';
import signIn from './index'

const mapStateToProps = (state) => {
    const { isPending, isSuccess, errorMessage} = state.signIn;
    return {
        isSuccess,
        isPending,
        errorMessage
    };
}

const mapDispatchToProps = {
    authorize
};

export default connect(mapStateToProps, mapDispatchToProps)(signIn);