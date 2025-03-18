import { Colorize } from "@/common/Style/color";
import Image from "next/image";
import PlayButton from "../icon/PlayButton";

const ArtistHover = () => {
  return (
    <article
      style={{
        maxWidth: "152px",
        padding: "7px",
        backgroundColor: Colorize.Secondary_04,
        borderRadius: "4px",
      }}
    >
      <div style={{ position: "relative", display: "inline-block" }}>
        <Image
          src={"/user.jpg"}
          alt={"아티스트 이미지"}
          width={138}
          height={138}
          style={{ borderRadius: "100%" }}
        />

        <div
          style={{
            width: "32px",
            height: "32px",
            backgroundColor: Colorize.Primary_01,
            borderRadius: "50%",
            position: "absolute",
            bottom: "5px",
            right: "5px",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <PlayButton />
          {/* <span
            style={{
              position: "absolute",
              width: 0,
              height: 0,
              borderTop: "6px solid transparent",
              borderBottom: "6px solid transparent",
              borderLeft: "11px solid " + Colorize.Secondary_01,
              left: "55%", // 왼쪽 기준으로 50% 이동
              top: "50%", // 위쪽 기준으로 50% 이동
              transform: "translate(-50%, -50%)", // 정확한 중앙 정렬
            }}
          /> */}
        </div>
      </div>
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

export default ArtistHover;
