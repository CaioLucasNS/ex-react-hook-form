import React from "react";
import "./styles.css";

export default ({ data, reset, defaultValues }) => (
  <>
    <button className="button">submit</button>

    {data && (
      <>
        <p style={{ marginTop: 60 }}>Log:</p>
        <pre
          style={{
            textAlign: "left",
            color: "darkgray",
            backgroundColor: "darkblue",
            borderRadius: 6,
            padding: 6,
          }}
        >
          {JSON.stringify(data, null, 2)}
        </pre>
      </>
    )}
  </>
);
