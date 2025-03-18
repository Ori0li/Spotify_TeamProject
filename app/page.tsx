import ArtistHover from "@/components/artist/ArtistHover";
import Music from "@/components/artist/Music";
import Album from "@/components/artist/Album";
import Profile from "@/data/components/Profile";

export default function Home() {
  return (
    <section>
      <article>
        <Profile />
        <ArtistHover />
        <Music />
        <Album />
      </article>
    </section>
  );
}
