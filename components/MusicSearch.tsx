"use client";

import { FormEvent, useState } from "react";

export default function MusicSearch({ updateMusicList }: any) {
  const [searchText, setSearchText] = useState("");

  const handleMusicSearch = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    updateMusicList(searchText);
  };

  return (
    <form className="my-5 relative" onSubmit={handleMusicSearch}>
      <input
        className=" p-2 rounded-lg shadow-md w-full"
        type="text"
        value={searchText}
        name="searchText"
        id="searchText"
        placeholder="Enter any music title or artist name"
        onChange={(e) => setSearchText(e.target.value)}
      />
      <button className="absolute right-2 bottom-2" type="submit">
        <svg
          className="w-6 h-6 fill-red-500"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
        >
          <path
            d="M18.031 16.6168L22.3137 20.8995L20.8995 22.3137L16.6168 18.031C15.0769 19.263 13.124 20 11 20C6.032 20 2 15.968 2 11C2 6.032 6.032 2 11 2C15.968 2 20 6.032 20 11C20 13.124 19.263 15.0769 18.031 16.6168ZM16.0247 15.8748C17.2475 14.6146 18 12.8956 18 11C18 7.1325 14.8675 4 11 4C7.1325 4 4 7.1325 4 11C4 14.8675 7.1325 18 11 18C12.8956 18 14.6146 17.2475 15.8748 16.0247L16.0247 15.8748Z"
            fill="currentColor"
          ></path>
        </svg>
      </button>
    </form>
  );
}
