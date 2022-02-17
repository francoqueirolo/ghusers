import React from 'react';

export default function Card({ info }) {
  const linkProfile = () => `https://github.com/${info.login}`;

  return (
    <div className="rounded overflow-hidden shadow-lg">
      <div className="px-6 py-4">
        <a href={linkProfile()}>
          <img
            className="inline-block h-20 w-20 rounded-full ring-2 ring-white"
            src={info.avatar_url}
            alt=""
          ></img>
        </a>
      </div>
      <div className="px-6 py-4">
        <div className="font-bold text-xl mb-2">@{info.login}</div>
        <div className="font-bold text-xs mb-2">{info.name}</div>
        <p className="text-gray-700 text-base">{info.bio}</p>
      </div>
      <div className="px-6 pt-4 pb-2">
        {info.public_repos && (
          <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
            Repos: {info.public_repos}
          </span>
        )}
      </div>
    </div>
  );
}
