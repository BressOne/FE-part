let apiAdress = "https://chat-back-end.herokuapp.com:3000";

export function apiCall(url, options) {
  return fetch(url, options).then(response => {
    if (response.status === 200) {
      return res => res.json();
    } else if (response.status === 401) {
      throw new Error("Not authorized");
    }
  });
}

export function get(url, data) {
  return apiCall(url, {
    method: "get"
    // ...
  });
}

export function post(url, payload) {
  return apiCall(`${apiAdress}${url}`, {
    credentials: "include",
    method: "post",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json"
    },
    credentials: "include",
    body: JSON.stringify(payload)
  });
}

// А дальше твои обращения к api

export function login(userName, password) {
  const payload = {
    username: userName,
    password: password
  };
  let responseMessge = this.state.responseMessge;
  const thisClosure = this;

  post("/login", payload)
    .then(response => {
      responseMessge = response.message;
      thisClosure.setState({ responseMessge });

      if (response.loginPermission === true) {
        thisClosure.props.handleLogin(true);
      }
    })

    .catch(err => {
      console.log(err);
    });
}

export function register(email, userName, password, passwordConf) {
  const payload = {
    email,
    username: userName,
    password,
    passwordConf
  };
  let responseMessge = this.state.responseMessge;
  const thisClosure = this;

  post("/register", payload)
    .then(response => {
      responseMessge = response.message;
      thisClosure.setState({ responseMessge });
      console.log(response.message);
    })
    .catch(err => {
      console.log(err);
    });
}

export function handleSearchFetch(event) {
  event.preventDefault();
  let searchResult = this.state.searchResult;
  const thisClosure = this;
  const payload = {
    searchValue: this.state.searchValue
  };

  post("/search_person", payload)
    .then(response => {
      console.log(response);
      searchResult = response.resultList;
      thisClosure.setState({ searchResult });
      console.log(this.state.searchResult);
    })
    .catch(err => {
      console.log(err);
    });
}
