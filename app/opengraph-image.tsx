import { readFile } from "node:fs/promises";
import { join } from "node:path";
import { ImageResponse } from "next/og";
import { site } from "@/data/site";

export const alt = `${site.name} | ${site.role}`;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function OpengraphImage() {
  const photo = await readFile(join(process.cwd(), "public", site.photo));
  const photoSrc = `data:image/png;base64,${photo.toString("base64")}`;

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          padding: "0 90px",
          backgroundColor: "#0d0d0d",
          backgroundImage:
            "linear-gradient(rgba(255,255,255,0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.05) 1px, transparent 1px)",
          backgroundSize: "48px 48px",
          color: "#f4f4f5",
        }}
      >
        <div style={{ display: "flex", flexDirection: "column" }}>
          <div style={{ display: "flex", fontSize: 44, fontWeight: 700 }}>
            {site.logo}
            <span style={{ color: "#1d5cff" }}>.</span>
          </div>
          <div style={{ marginTop: 50, fontSize: 72, fontWeight: 700 }}>
            {site.name}
          </div>
          <div
            style={{
              marginTop: 12,
              fontSize: 48,
              fontWeight: 700,
              color: "#1d5cff",
            }}
          >
            {site.role}
          </div>
          <div style={{ marginTop: 28, fontSize: 30, color: "#22d3ee" }}>
            {site.tagline}
          </div>
        </div>

        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={photoSrc}
          alt=""
          width={340}
          height={340}
          style={{ borderRadius: "50%", border: "8px solid #1d5cff" }}
        />
      </div>
    ),
    size,
  );
}
