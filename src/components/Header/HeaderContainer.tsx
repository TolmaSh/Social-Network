import React from "react";
import {Header} from "./Header";
import {connect} from "react-redux";
import {rootReducerType} from "../../store/store";
import {setAuthUserData} from "../../store/authReducer";
import {authAPI} from "../../Api/api";

class HeaderContainer extends React.Component<any, any> {

    componentDidMount() {
        authAPI.isAuth()
            .then(data => {
                if (data.resultCode === 0) {
                    const {id, login, email} = data.data
                    this.props.setAuthUserData(id, email, login);
                }
            })
    }

    render() {
        return <Header isAuth={this.props.isAuth} login={this.props.login}/>;
    }
}

const mapStateToProps = (state: rootReducerType) => ({
    isAuth: state.auth.isAuth,
    login: state.auth.login,

});
export default connect(mapStateToProps, {setAuthUserData})(HeaderContainer);