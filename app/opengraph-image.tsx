import { ImageResponse } from "next/og";

export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          padding: "80px",
          background: "#0a0b0f",
          fontFamily: "sans-serif",
        }}
      >
        <div
          style={{
            display: "flex",
            width: "56px",
            height: "6px",
            borderRadius: "999px",
            background: "linear-gradient(90deg, #4d55ef, #15a9fb)",
            marginBottom: "36px",
          }}
        />
        <div
          style={{
            display: "flex",
            fontSize: "104px",
            fontWeight: 700,
            color: "#f4f5f7",
            letterSpacing: "-0.02em",
          }}
        >
          Vuria
        </div>
        <div
          style={{
            display: "flex",
            marginTop: "24px",
            fontSize: "32px",
            color: "#a5abb8",
            maxWidth: "820px",
          }}
        >
          We invest in validated AI products and help them scale.
        </div>
      </div>
    ),
    { ...size },
  );
}
