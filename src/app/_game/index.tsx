"use client";

import { useEffect, useState } from "react";
import { Route, Routes, MemoryRouter, useLocation } from "react-router-dom";
import { Game } from "./routes/game";
import { GameSettings } from "./routes/game-settings";

const InitialRouteKey = "game-route";

function DetectRouteChanges() {
  const location = useLocation();

  useEffect(() => {
    window.localStorage.setItem(InitialRouteKey, location.pathname);
  }, [location]);
  return <></>;
}

export default function GameRouter() {
  const [initialRoute, setInitialRoute] = useState("");

  useEffect(() => {
    const initialRoute = window.localStorage.getItem(InitialRouteKey);
    setInitialRoute(initialRoute ?? "/");
  }, []);

  if (initialRoute === "") {
    return <></>;
  }

  return (
    <MemoryRouter initialEntries={[initialRoute]}>
      <DetectRouteChanges />
      <Routes>
        <Route path="/" element={<Game />} />
        <Route path="/game-settings" element={<GameSettings />} />
      </Routes>
    </MemoryRouter>
  );
}
