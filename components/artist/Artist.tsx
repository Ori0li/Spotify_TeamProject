import { Colorize } from "@/common/Style/color";
import Image from "next/image";
// import Link from "next/link";

// type Artist = {
//   id: number;
//   image: string;
//   name: string;
//   title: string;
// };

// const Artist = ({ id, image, name, title }: Artist) => {
const Artist = () => {
  return (
    // <Link
    //   href={`/detail/${id}`}
    //   style={{
    //     maxWidth: "152px",
    //   }}
    // >
    //   <Image src={image} alt={name} width={80} height={80} />
    //   <div>{title}</div>
    //   <div>{name}</div>
    // </Link>
    <article
      style={{
        maxWidth: "152px",
        padding: "7px",
      }}
    >
      <Image
        src={"/user.jpg"}
        alt={"아티스트 이미지"}
        width={138}
        height={138}
        style={{ borderRadius: "100%" }}
      />
      <div style={{ marginTop: "11px" }}>
        <p style={{ color: Colorize.Secondary_03, fontSize: "14px" }}>
          {"노래제목"}
        </p>
        <div style={{ color: Colorize.Neutral_01, fontSize: "12px" }}>
          {"아티스트"}
        </div>
      </div>
    </article>
  );
};

export default Artist;
