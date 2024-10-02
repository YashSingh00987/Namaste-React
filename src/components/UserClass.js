import React from "react";
import UserContext from "../utils/UserContext";

class UserClass extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      userInfo: {
        login: "",
        url: "",
      },
    };
  }

  async componentDidMount() {
    const data = await fetch("https://api.github.com/users/YashSingh00987");
    const json = await data.json();

    this.setState({
      userInfo: json,
    });
  }

  render() {
    const { login, url, avatar_url } = this.state.userInfo;

    return (
      <div className="user-card">
        <img src={avatar_url} className="avatar"></img>
        <div className="card-info">
          <h3>User:{login} </h3>
          <div>
            Logged In User:
            <UserContext.Consumer>
              {({ loggedInUser }) => <h1>{loggedInUser}</h1>}
            </UserContext.Consumer>
          </div>
          <h4>Location: Varanasi</h4>
          <h5>Contact: {url}</h5>
        </div>
      </div>
    );
  }
}

export default UserClass;
