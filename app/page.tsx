"use client";

import MusicSearch from "@/components/MusicSearch";
import axios from "axios";
import { useEffect, useState } from "react";

export default function Home() {
  const [musicList, setMusicList] = useState([]);
  const [loading, setLoading] = useState(true);

  const getAllMusic = async () => {
    const { data } = await axios.get(
      "https://singularity-backend-0px4.onrender.com/api/v1/music/find-all"
    );
    setMusicList(data.result);
    setLoading(false);
  };

  useEffect(() => {
    getAllMusic();
  }, []);

  const handleMusicList = async (searchText: string) => {
    const { data } = await axios.get(
      `http://localhost:4000/api/v1/music/find-all?searchtext=${searchText}`
    );
    setMusicList(data.result);
  };

  return (
    <div className="mt-10 w-full lg:w-[700px] mx-auto bg-gray-100 shadow-sm p-5">
      <p className="text-2xl font-bold mt-2">Music List</p>

      <MusicSearch updateMusicList={handleMusicList} />
      <>
        {loading ? (
          <p>Loading...</p>
        ) : (
          <>
            {musicList?.length ? (
              <div className="flex justify-between items-center font-bold px-2">
                <p>Title</p>
                <p>Track</p>
              </div>
            ) : (
              <p>Music Not Found!</p>
            )}
            <div className="[&>*:nth-child(even)]:bg-gray-200">
              {musicList?.map((item: any) => (
                <div
                  key={item._id}
                  className="flex justify-between items-center px-2"
                >
                  <p>{item.title}</p>
                  <p>{item.artist}</p>
                  <div>
                    <audio
                      className="rounded-none"
                      src={item.url}
                      controls
                    ></audio>
                  </div>
                </div>
              ))}
            </div>
          </>
        )}
      </>
    </div>
  );
}
