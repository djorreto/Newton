import { ImageResponse } from "next/og";

export const size = { width: 32, height: 32 };
export const contentType = "image/png";

export default function Icon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          background: "linear-gradient(145deg, #061220 0%, #0d2734 100%)",
          borderRadius: 8,
        }}
      >
        <div
          style={{
            fontSize: 18,
            fontWeight: 700,
            fontFamily: "system-ui, sans-serif",
            background: "linear-gradient(135deg, #28aec1 0%, #46c9db 100%)",
            backgroundClip: "text",
            color: "transparent",
          }}
        >
          N
        </div>
      </div>
    ),
    { ...size },
  );
}
