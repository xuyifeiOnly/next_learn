import React from "react";
import { kv } from "@vercel/kv";
import Operation from "./operatiton";
export default async function Loading() {
  
  return (
    <div>
      <Operation></Operation>
    </div>
  );
}
