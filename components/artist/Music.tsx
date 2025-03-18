import { Colorize } from "@/common/Style/color";
import Image from "next/image";

const Music = () => {
  return (
    <article
      style={{
        maxWidth: "152px",
        borderRadius: "4px",
      }}
    >
      <Image
        src={"/user.jpg"}
        alt={"아티스트 이미지"}
        width={152}
        height={152}
      />
      <div style={{ paddingTop: "4px", paddingLeft: "8px" }}>
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

export default Music;
