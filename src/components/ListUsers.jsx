import React from 'react';
import Card from '../components/Card';
import { GithubContext } from '../context/context';

export default function ListUsers() {
  const { githubUser } = React.useContext(GithubContext);

/*   const infoSample = [
    {
      avatar_url: 'http://placekitten.com/g/200/200',
      login: 'gatonejo',
      name: 'Test',
      bio: 'Bio.....',
      public_repos: '100',
      location: 'Peru',
    },
  ]; */

  const showItems = () => {
    return githubUser.map((user, i) => <Card key={i} info={user} />);
  };

  return (
    <>
      <div className="p-10 grid grid-cols-1 sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-3 gap-5">
        {showItems()}
      </div>
    </>
  );
}
