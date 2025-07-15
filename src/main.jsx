import React, { useEffect, useState } from "react";
import cities from "./cities.json";

function Input() {
  const [search, setSearch] = useState("");
  const [match, setMatch] = useState("");

  useEffect(() => {
    if (!search) {
      setMatch("");
      return;
    }
    const found = cities.find((city) => city.startsWith(search));
    setMatch(found);
  }, [search]);

  const remaining =
    match && match.startsWith(search) ? match.slice(search.length) : "";

  const sharedStyle = {
    fontSize: "16px",
    fontFamily: "monospace",
    lineHeight: "1.5",
    padding: "8px",
    width: "200px",
    boxSizing: "border-box",
  };

  return (
    <div style={{ position: "relative", display: "inline-block" }}>
      {search.length > 0 && (
        <div
          style={{
            ...sharedStyle,
            position: "absolute",
            top: 0,
            left: 0,
            pointerEvents: "none",
            zIndex: 0,
          }}
        >
          <span style={{ color: "block" }}>{search}</span>
          <span style={{ color: "gray" }}>{remaining}</span>
        </div>
      )}

      <input
        type="text"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        style={{
          ...sharedStyle,
          color: "transparent",
          background: "transparent",
          position: "relative",
          zIndex: 1,
        }}
      />
    </div>
  );
}

export default Input;
