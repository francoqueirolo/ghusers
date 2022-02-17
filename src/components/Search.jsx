import React, { useContext } from 'react';
import { GithubContext } from '../context/context';
import Alert from '../components/Alert'

export default function Search() {
  const [user, setUser] = React.useState('');
  const { error, searchGithubUser, isLoading } = useContext(GithubContext);
  const handleSubmit = (e) => {
    e.preventDefault();
    if (user) {
      searchGithubUser(user);
      // setUser('');
    }
  };

  return (
    <>
      {error.show && (
        <Alert/>
      )}
      <div className="flex items-center justify-center mt-5">
        <form onSubmit={handleSubmit}>
          <div className="flex border-2 border-gray-200 rounded">
            <input
              type="text"
              className="px-4 py-2 w-80"
              placeholder="enter user github"
              value={user}
              onChange={(e) => setUser(e.target.value)}
            ></input>

            {!isLoading && (
              <button className="px-4 text-white bg-gray-600 border-l">
                <span className="fas fa-search"></span>
              </button>
            )}
          </div>
        </form>
      </div>
    </>
  );
}
