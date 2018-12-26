import React from "react";

let AppContext = React.createContext();

class AppContextProvider extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedUser: "123"
      // setSelectedUser: this.selectedUser()
    };
    this.setSelectedUser = this.setSelectedUser.bind(this);
  }

  setSelectedUser = userName => {
    this.setState({ selectedUser: userName });
  };
  render() {
    return (
      <AppContext.Provider value={this.state}>
        {this.props.children}
      </AppContext.Provider>
    );
  }
}

export default AppContextProvider;
