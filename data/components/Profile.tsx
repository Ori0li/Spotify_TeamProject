"use client";

import { useEffect, useState } from "react";

type Album = {
  id: string;
  name: string;
  images: { url: string }[];
  artists: { name: string }[];
};

const Profile = () => {
  const [albums, setAlbums] = useState<Album[]>([]);
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const fetchAlbums = async () => {
      try {
        const response = await fetch("/api/spotify");
        if (!response.ok) throw new Error("Failed to fetch albums");
        const data = await response.json();
        setAlbums(data);
      } catch (err: any) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchAlbums();
  }, []);

  if (loading) return <div>앨범 데이터를 불러오는 중...</div>;
  if (error) return <div>에러 발생: {error}</div>;

  return (
    <div>
      <h1 className="text-white">Spotify 새로운 릴리즈 앨범 목록</h1>
      <ul className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
        {albums.map((album) => (
          <li key={album.id} className="bg-gray-800 p-4 rounded-lg shadow-lg">
            <img
              src={album.images[0].url}
              alt={album.name}
              className="w-full h-auto rounded-md mb-2"
            />
            <p className="text-white font-semibold truncate">{album.name}</p>
            <p className="text-gray-400 text-sm truncate">
              {album.artists.map((artist) => artist.name).join(", ")}
            </p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Profile;
