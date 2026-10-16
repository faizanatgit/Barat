import { ImageResponse } from "next/og";

export const alt = "Baraat invitation for Muhammad Zeeshan Azhar Malik";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpenGraphImage() {
  return new ImageResponse(
    <div style={{ width: "100%", height: "100%", display: "flex", position: "relative", overflow: "hidden", background: "#111" }}>
      <img src="https://barat-six.vercel.app/baraat-botanical-backdrop.png" style={{ width: "100%", height: "100%", objectFit: "cover", objectPosition: "center" }} />
      <div style={{ position: "absolute", inset: 0, display: "flex", alignItems: "center", justifyContent: "center", background: "rgba(0, 0, 0, .24)", color: "#f3d38f", fontFamily: "serif", fontSize: 82, fontWeight: 600, letterSpacing: 16, textTransform: "uppercase" }}>Baraat</div>
    </div>,
    { ...size }
  );
}