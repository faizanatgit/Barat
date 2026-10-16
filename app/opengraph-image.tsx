import { ImageResponse } from "next/og";

export const alt = "Baraat Celebration invitation for Muhammad Zeeshan Azhar Malik";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpenGraphImage() {
  return new ImageResponse(
    <div style={{ width: "100%", height: "100%", display: "flex", position: "relative", overflow: "hidden", background: "#461021", color: "#fff7e9", fontFamily: "serif" }}>
      <div style={{ position: "absolute", inset: 24, border: "2px solid #c99b55", display: "flex" }} />
      <div style={{ position: "absolute", left: -90, top: -95, width: 310, height: 310, borderRadius: "50%", border: "2px solid #c99b55", opacity: .45, display: "flex" }} />
      <div style={{ position: "absolute", right: -90, bottom: -95, width: 310, height: 310, borderRadius: "50%", border: "2px solid #c99b55", opacity: .45, display: "flex" }} />
      <div style={{ width: "100%", padding: "44px 78px", display: "flex", flexDirection: "column", alignItems: "center", textAlign: "center" }}>
        <div style={{ color: "#e6c27e", fontSize: 22, letterSpacing: 9, textTransform: "uppercase", display: "flex" }}>Baraat Celebration</div>
        <div style={{ marginTop: 13, fontSize: 22, letterSpacing: 2, display: "flex" }}>MR. AND MRS. AZHAR BASHIR</div>
        <div style={{ marginTop: 16, fontSize: 54, fontWeight: 600, lineHeight: 1.02, display: "flex" }}>Muhammad Zeeshan Azhar Malik</div>
        <div style={{ marginTop: 9, color: "#f2d5a4", fontSize: 24, fontStyle: "italic", display: "flex" }}>with Daughter of Tahir Malik</div>
        <div style={{ marginTop: 15, width: "100%", height: 1, background: "#c99b55", display: "flex" }} />
        <div style={{ marginTop: 16, color: "#f4ddb2", fontSize: 26, letterSpacing: 2, display: "flex" }}>SATURDAY, 7TH NOVEMBER 2026 | 7:00 PM ONWARDS</div>
        <div style={{ marginTop: 9, color: "#f4ddb2", fontSize: 22, letterSpacing: 1, display: "flex" }}>WEST CANAL ROAD, FAROOQABAD, MANSOORABAD</div>
        <div style={{ marginTop: 17, color: "#fff0d1", fontSize: 15, letterSpacing: 1, display: "flex" }}>RSVP: SHAHID MALIK (UK) | ALI IMRAN BAJWA | ENGR FARMAN AZHAR MALIK | IMRAN AZHAR MALIK | MUHAMMAD RAYYAN MALIK</div>
      </div>
    </div>,
    { ...size }
  );
}