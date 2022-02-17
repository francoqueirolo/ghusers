import React, { useState, useEffect } from 'react';
import axios from 'axios';

const rootUrl = 'https://api.github.com';

const GithubContext = React.createContext();

const GithubProvider = ({ children }) => {
  const [githubUser, setGithubUser] = useState([]);

  const [requests, setRequests] = useState(0);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState({ show: false, msg: '' });

  const searchGithubUser = async (user) => {
    toggleError();
    setIsLoading(true);

    const usersInfo = [];

    const queryUsers = await axios(`${rootUrl}/search/users?q=${user}`).catch(
      (err) => console.log('err')
    );

    const filteredUsers = queryUsers.data.items;

    
    if (filteredUsers) {
      // console.log(filteredUsers);

      /*
      for (const user of filteredUsers) {
        const responseInfoUser = await axios(user.url).catch((err) => {
          console.log(err);
          checkRequests();
        });
        if (responseInfoUser) usersInfo.push(responseInfoUser.data);
      }
      */

      setGithubUser(filteredUsers);
    } else {
      toggleError(true, 'there is no user with that username');
    }
    checkRequests();
    setIsLoading(false);
  };

  const checkRequests = () => {
    axios(`${rootUrl}/rate_limit`)
      .then(({ data }) => {
        let {
          rate: { remaining },
        } = data;
        setRequests(remaining);
        if (remaining === 0) {
          toggleError(true, 'sorry, you have exceeded your hourly rate limit!');
        }
      })
      .catch((err) => console.log(err));
  };

  function toggleError(show = false, msg = '') {
    setError({ show, msg });
  }

  useEffect(checkRequests, []);

  useEffect(() => {
    searchGithubUser('francoqueirolo');
  }, []);

  return (
    <GithubContext.Provider
      value={{
        githubUser,
        requests,
        error,
        searchGithubUser,
        isLoading,
      }}
    >
      {children}
    </GithubContext.Provider>
  );
};

export { GithubProvider, GithubContext };
