import { Colorize } from "@/common/Style/color";
import Image from "next/image";

const Album = () => {
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
      <div style={{ marginTop: "4px" }}>
        <p
          style={{
            color: Colorize.Neutral_01,
            fontSize: "12px",
            lineHeight: "1.5", // 줄 간격 설정 (적절히 조정 가능)
            maxHeight: "3em", // 2줄까지만 표시 (lineHeight * 줄 수)
            overflow: "hidden", // 넘치는 부분 숨김
            display: "-webkit-box", // flexbox-like 동작
            WebkitLineClamp: 2, // 최대 2줄까지 표시
            WebkitBoxOrient: "vertical", // 세로 방향 정렬
          }}
        >
          노래제목노래제목노래제목노래제목노래제목노래제목노래제목노래제목노래제목노래제목노래제목노래제목노래제목노래제목
        </p>
      </div>
    </article>
  );
};

export default Album;
