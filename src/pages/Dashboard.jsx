import React, { useState } from 'react';
import ListUsers from '../components/ListUsers';
import Navbar from '../components/Navbar';
import Search from '../components/Search';

export default function Dashboard() {
  const [dataUsers, setDataUsers] = useState([]);

  /*   const searchByName = async (query) => {
    await fetch(`https://api.github.com/search/users?q=${query}`)
      .then((response) => response.json()) //Converting the response to a JSON object
      .then((data) => {
        setDataUsers(data);
        console.log(data);
      })
      .catch((error) => console.error(error));
  };

  useEffect(() => {
    searchByName('francoqueirolo');
  }, []);

  const showItems = () => {
    const reptiles = ['alligator', 'snake', 'lizard'];
    return reptiles.map((reptile) => <li>{reptile}</li>);
  }; */

  return (
    <main>
      <div>
        <Navbar></Navbar>
        <Search></Search>
        <ListUsers></ListUsers>
      </div>
    </main>
  );
}
