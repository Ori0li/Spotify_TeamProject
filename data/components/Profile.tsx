"use client";

import Artist from "@/components/artist/Artist";
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
        {albums.map((v) => (
          <Artist
            key={v.id}
            id={v.id}
            image={v.images[0].url}
            title={v.name}
            name={v.artists.map((artist) => artist.name).join(", ")}
          />
        ))}
      </ul>
    </div>
  );
};

export default Profile;
