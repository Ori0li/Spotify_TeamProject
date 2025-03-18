"use client";

import { useEffect, useState } from "react";

type Album = {
  id: string;
  name: string;
  images: { url: string }[];
  artists: { name: string }[];
};

const AlbumList = () => {
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

  if (loading)
    return <div className="text-white">앨범 데이터를 불러오는 중...</div>;
  if (error) return <div className="text-white">에러 발생: {error}</div>;

  return (
    <div className="text">
      <h1 className="text-white">Spotify 새로운 릴리즈 앨범 목록</h1>
      <ul className="grid grid-cols-6">
        {albums.map((album) => (
          <li key={album.id} style={{ marginBottom: "20px" }}>
            <img
              src={album.images[0].url}
              alt={album.name}
              width={100}
              height={100}
            />
            <p>
              <strong>{album.name}</strong>
            </p>
            <p>{album.artists.map((artist) => artist.name).join(", ")}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default AlbumList;
