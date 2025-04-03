// components/CodeBlock.js
export const CodeBlock = ({ children }: { children: React.ReactNode }) => {
  return (
    <pre
      style={{
        background: "#f5f5f5",
        padding: "20px",
        borderRadius: "5px",
        overflowX: "auto",
      }}
    >
      <code>{children}</code>
    </pre>
  );
};
