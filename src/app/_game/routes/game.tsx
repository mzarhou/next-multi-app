"use client";

import { Link } from "react-router-dom";

export function Game() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center space-y-4">
      <Link to="/game-settings">Go To Game Settings</Link>
      <div>Game</div>
    </div>
  );
}
