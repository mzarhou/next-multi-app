"use client";

import { Link } from "react-router-dom";

export function GameSettings() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center space-y-4">
      <Link to="/">Go To Game</Link>
      <div>Game Settings</div>
    </div>
  );
}
