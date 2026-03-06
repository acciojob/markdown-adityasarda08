import React, { useState, useEffect } from "react";
import ReactMarkdown from "react-markdown";
const MarkdownEditor = () => {
  const [markdownText, setMarkdownText] = useState("");
  const [previewText, setPreviewText] = useState("");

  // Update preview in real-time whenever input changes
  useEffect(() => {
    setPreviewText(markdownText);
  }, [markdownText]);

  return (
    <div style={{ display: "flex", gap: "20px" }}>
      {/* Markdown Input Area */}
      <textarea
        className="textarea"
        value={markdownText}
        onChange={(e) => setMarkdownText(e.target.value)}
        placeholder="Write your markdown here..."
        style={{ width: "50%", height: "400px", padding: "10px" }}
      />

      {/* Markdown Preview Area */}
      <div
        className="preview"
        style={{
          width: "50%",
          height: "400px",
          padding: "10px",
          border: "1px solid #ccc",
          overflowY: "auto",
          backgroundColor: "#f9f9f9",
        }}
      >
        <ReactMarkdown>{previewText}</ReactMarkdown>
      </div>
    </div>
  );
};

export default MarkdownEditor;