import { ImageResponse } from "next/og";
import { siteConfig } from "@/content/siteConfig";
import { siteContent } from "@/content/siteContent";

export const alt = siteContent.meta.title;

export const size = {
  width: 1200,
  height: 630,
};

export const contentType = "image/png";

export default function OpenGraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          height: "100%",
          width: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "flex-start",
          justifyContent: "center",
          padding: 80,
          background: "linear-gradient(165deg, #061220 0%, #0a1c2b 45%, #0d2734 100%)",
        }}
      >
        <div
          style={{
            fontSize: 14,
            letterSpacing: "0.25em",
            textTransform: "uppercase",
            color: "#46c9db",
            fontFamily: "system-ui, sans-serif",
            fontWeight: 600,
          }}
        >
          Venture Studio B2B
        </div>
        <div
          style={{
            marginTop: 24,
            fontSize: 56,
            lineHeight: 1.1,
            fontWeight: 500,
            color: "#eaf4f7",
            fontFamily: "system-ui, sans-serif",
            maxWidth: 900,
          }}
        >
          {siteConfig.name}
        </div>
        <div
          style={{
            marginTop: 20,
            fontSize: 24,
            lineHeight: 1.4,
            color: "#93a9b5",
            fontFamily: "system-ui, sans-serif",
            maxWidth: 800,
          }}
        >
          Innovación aplicada con gravedad propia.
        </div>
      </div>
    ),
    { ...size },
  );
}
