import { useState } from "react";
import ReactMarkdown from "react-markdown";

function App() {
  const defaultEditorText = "";

  const [markdownContent, setMarkdownContent] = useState(defaultEditorText);

  return (
    <>
      <textarea
        name="editor"
        id="editor"
        cols="30"
        rows="20"
        value={markdownContent}
        onChange={(e) => setMarkdownContent(e.target.value)}
      />
      <div id="preview">
        <ReactMarkdown>{markdownContent}</ReactMarkdown>
      </div>
    </>
  );
}

export default App;
