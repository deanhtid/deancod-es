import styles from "./pegcast.module.css";

/** The washing on the line, as in the app. `Breeze.garments` holds the colours. */
const garments = [
  { kind: "shirt", position: 0.16, colour: "#FFFFFF", width: 64, height: 58, phase: 0 },
  { kind: "towel", position: 0.36, colour: "#FF7A6B", width: 46, height: 76, phase: 1.1 },
  { kind: "shirt", position: 0.56, colour: "#FFD34F", width: 54, height: 50, phase: 2.3 },
  { kind: "sock", position: 0.72, colour: "#7DE0C2", width: 24, height: 58, phase: 3.4 },
  { kind: "towel", position: 0.87, colour: "#C7B5FF", width: 38, height: 62, phase: 4.2 },
] as const;

type Garment = (typeof garments)[number];

/** The line's height at a horizontal fraction, as the app's quadratic curve gives it. */
const lineHeight = (fraction: number) => 18 + 80 * fraction * (1 - fraction);

function GarmentShape({ kind, colour, width, height }: Garment) {
  switch (kind) {
    case "shirt":
      return (
        <svg width={width} height={height} viewBox="0 0 64 58">
          <path
            d="M20 2 L3 11 L9 25 L15 22 L15 56 L49 56 L49 22 L55 25 L61 11 L44 2 C40 8 24 8 20 2 Z"
            fill={colour}
            stroke={colour}
            strokeWidth="4"
            strokeLinejoin="round"
          />
        </svg>
      );
    case "towel":
      return (
        <svg width={width} height={height} viewBox={`0 0 ${width} ${height}`}>
          <rect width={width} height={height} rx="6" fill={colour} />
          <rect y={height - 22} width={width} height="4" fill="#FFFFFF" fillOpacity="0.7" />
          <rect y={height - 14} width={width} height="4" fill="#FFFFFF" fillOpacity="0.7" />
        </svg>
      );
    case "sock":
      return (
        <svg width={width} height={height} viewBox={`0 0 ${width} ${height}`}>
          <rect width={width} height={height} rx={width / 2} fill={colour} />
        </svg>
      );
  }
}

export default function WashingLine() {
  return (
    <div className={styles.line} aria-hidden="true">
      <svg className={styles.cord} viewBox="0 0 100 110" preserveAspectRatio="none">
        <path
          d="M0 18 Q50 58 100 18"
          fill="none"
          vectorEffect="non-scaling-stroke"
        />
      </svg>
      {garments.map((garment) => (
        <div
          key={garment.position}
          className={styles.garment}
          style={{
            left: `${garment.position * 100}%`,
            top: `calc(${lineHeight(garment.position)}px * var(--line-scale))`,
            animationDelay: `${-garment.phase}s`,
          }}
        >
          <span className={styles.peg} />
          <GarmentShape {...garment} />
        </div>
      ))}
    </div>
  );
}
