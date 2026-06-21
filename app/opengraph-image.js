import { ImageResponse } from "next/og";

export const alt = "Outage Ready Home";
export const size = {
  width: 1200,
  height: 630,
};

export const contentType = "image/png";

export default function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          background: "#f8fafc",
          color: "#0f172a",
          position: "relative",
          overflow: "hidden",
          fontFamily: "Arial",
        }}
      >
        <div
          style={{
            position: "absolute",
            top: -160,
            right: -120,
            width: 520,
            height: 520,
            borderRadius: 999,
            background: "#dbeafe",
          }}
        />

        <div
          style={{
            position: "absolute",
            bottom: -180,
            left: -120,
            width: 520,
            height: 520,
            borderRadius: 999,
            background: "#fef08a",
          }}
        />

        <div
          style={{
            position: "relative",
            zIndex: 2,
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            padding: "72px",
            width: "100%",
          }}
        >
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: 20,
              marginBottom: 44,
            }}
          >
            <div
              style={{
                width: 76,
                height: 76,
                borderRadius: 18,
                background: "#2563eb",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                color: "#facc15",
                fontSize: 42,
                fontWeight: 900,
              }}
            >
              ⚡
            </div>

            <div
              style={{
                fontSize: 34,
                fontWeight: 900,
                letterSpacing: "-0.03em",
              }}
            >
              Outage Ready Home
            </div>
          </div>

          <div
            style={{
              fontSize: 68,
              fontWeight: 900,
              letterSpacing: "-0.06em",
              lineHeight: 1.03,
              maxWidth: 920,
            }}
          >
            Practical Backup Power Guides & Outage Calculators
          </div>

          <div
            style={{
              marginTop: 34,
              fontSize: 28,
              lineHeight: 1.45,
              color: "#475569",
              maxWidth: 850,
            }}
          >
            Plan power outages calmly with calculators, guides, and simple home
            preparedness advice.
          </div>

          <div
            style={{
              display: "flex",
              gap: 18,
              marginTop: 46,
            }}
          >
            {["Backup Power", "Fridge Runtime", "Wi-Fi Backup"].map((item) => (
              <div
                key={item}
                style={{
                  borderRadius: 999,
                  background: "#0f172a",
                  color: "#ffffff",
                  padding: "14px 22px",
                  fontSize: 22,
                  fontWeight: 800,
                }}
              >
                {item}
              </div>
            ))}
          </div>
        </div>
      </div>
    ),
    {
      ...size,
    }
  );
}