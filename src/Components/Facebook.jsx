import React, { Component } from 'react';
import FacebookLogin from 'react-facebook-login';
import { GoogleLogin } from 'react-google-login';

class Facebook extends Component {
    state = {
        isLoggedIn: false,
        userID: "",
        name: "",
        email: "",
        picture: ""
      };

    responseFacebook = response =>{
        this.setState({
            isLoggedIn: true,
            userID: response.userID,
            name: response.name,
            email: response.email,
            picture: response.picture.data.url
          });
    };
    componentClicked = () => console.log('clicked')

    responseGoogle = (response) => {
        console.log(response);
      }

    render() {
        let fbContent;

        if(this.state.isLoggedIn) {
            fbContent = (
                <div
                    style={{
                        width: "400px",
                        margin: "auto",
                        // background: "#f4f4f4",
                        padding: "20px",
                        border: "1px solid red"
                    }}
                >
                <img src={this.state.picture} alt={this.state.name} />
                <h2>Welcome {this.state.name}</h2>
                Email: {this.state.email}
                </div>
            )
        }else{
            fbContent = (
                <FacebookLogin
                    appId="456155955523515"
                    autoLoad={true}
                    fields="name,email,picture"
                    onClick={this.componentClicked}
                    callback={this.responseFacebook} 
                />
            )
        }


        return (
            <>
                {fbContent}
                <br/>
                
                    <GoogleLogin
                        clientId="1063384156150-2o4f5en3u6cp6vksneu06130ampk498v.apps.googleusercontent.com"
                        buttonText="Login"
                        onSuccess={this.responseGoogle}
                        onFailure={this.responseGoogle}
                        // cookiePolicy={'single_host_origin'}
                    />
                
            </>
        );
    }
}

export default Facebook;