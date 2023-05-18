import { useState } from "react";
import ReactMarkdown from "react-markdown";

function App() {
  const defaultEditorText = `
  # Welcome to the Markdown Previewer!
  
  ## This is a sub-header (H2 size)
  
  Here's a link: [My Github](https://github.com/ckumler)
  
  Here's some inline code: \`const hello = "Hello, world!";\`
  
  Here's a code block:
  
  \`\`\`
  function greet() {
    const greeting = "Hello, world!";
    console.log(greeting);
  }
  \`\`\`
  
  Here's a list:
  - Item 1
  - Item 2
  - Item 3
  
  Here's a blockquote:
  
  > "Hello, world!" - Traditional greeting for new programmers
  
  Here's an image:
  
  ![Image](https://via.placeholder.com/150)
  
  Here's some **bolded text**.
  `;

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
