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
          backgroundImage:
            "linear-gradient(135deg, #66BB6A 0%, #2E7D32 55%, #1B5E20 100%)",
          color: "white",
          fontFamily: "Georgia, 'Times New Roman', serif",
          fontWeight: 600,
          fontSize: 22,
          lineHeight: 1,
          letterSpacing: "-0.02em",
          borderRadius: 8,
        }}
      >
        S
      </div>
    ),
    { ...size },
  );
}
