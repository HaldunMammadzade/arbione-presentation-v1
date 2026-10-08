"use client";
import { useEffect, useRef } from "react";

interface Props {
  theme?: "light" | "dark";
}

interface Spark {
  x: number;
  y: number;
  vx: number;
  vy: number;
  size: number;
  alpha: number;
  decay: number;
  color: [number, number, number];
}

const DARK_COLORS: [number, number, number][] = [
  [255, 255, 255], // White
  [129, 140, 248], // Indigo #818cf8
  [192, 132, 252], // Purple #c084fc
  [34, 211, 238],  // Cyan #22d3ee
  [244, 114, 182], // Pink #f472b6
];

const LIGHT_COLORS: [number, number, number][] = [
  [99, 102, 241],  // Primary indigo
  [139, 92, 246],  // Violet
  [14, 165, 233],  // Sky
  [236, 72, 153],  // Rose
];

export default function CursorTrail({ theme = "dark" }: Props) {
  return null;
}
