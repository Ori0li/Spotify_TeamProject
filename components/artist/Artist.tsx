import { Colorize } from "@/common/Style/color";
import Image from "next/image";

type ArtistProps = {
  id: string;
  name: string;
  image: string;
  title: string;
};

const Artist = ({ id, image, name, title }: ArtistProps) => {
  return (
    <article
      style={{
        maxWidth: "152px",
        padding: "7px",
      }}
    >
      <Image
        src={image}
        alt={id}
        width={138}
        height={138}
        style={{ borderRadius: "100%" }}
      />
      <div style={{ marginTop: "11px" }}>
        <p style={{ color: Colorize.Secondary_03, fontSize: "14px" }}>
          {title}
        </p>
        <div style={{ color: Colorize.Neutral_01, fontSize: "12px" }}>
          {name}
        </div>
      </div>
    </article>
  );
};

export default Artist;
