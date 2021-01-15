import React from 'react';
import {signIn, signOut} from '../actions'
import { connect }  from 'react-redux'

class GoogleAuth extends React.Component {

    componentDidMount() {
        window.gapi.load('client:auth2', () => {
            window.gapi.client
                .init({
                    clientId:
                        '326340100943-09fig1f5p7it5ju6q6oasnk4meg85j0m.apps.googleusercontent.com',
                    scope: 'email'
                })
                .then(() => {
                    this.auth = window.gapi.auth2.getAuthInstance();
                    this.onAuthChange(this.auth.isSignedIn.get());
                    this.auth.isSignedIn.listen(this.onAuthChange);
                });
        });
    }

    onAuthChange = (isSignedIn) => {
        if (isSignedIn){
            this.props.signIn(this.auth.currentUser.get().getId());
        }else{
            this.props.signOut();
        }
    };

    OnClickSignIn =() =>{
        this.auth.signIn();
    }

    OnClickSignOut = () => {
        this.auth.signOut();
    }

    renderAuthButton() {
        if (this.props.isSignedIn === null) {
            return null;
        } else if (this.props.isSignedIn) {
            return (<button className="ui red google button" onClick={this.OnClickSignOut}>
            <i className="google icon"/>
            Sign Out
            </button>
            );
        } else {
            return (<button className="ui red google button" onClick={this.OnClickSignIn}>
                <i className="google icon" />
                Sign In With Google
            </button>);
        }
    }

    render() {
        return <div>{this.renderAuthButton()}</div>;
    }
}

const mapStateToProps = state => {
    return { isSignedIn: state.auth.isSignedIn };
};

export default connect(mapStateToProps, {signIn, signOut})(GoogleAuth);