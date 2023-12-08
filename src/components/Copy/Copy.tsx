import React, { useState } from "react";

interface copyProps {
  textToCopy: any;
  style?: any;
  copyButtonStyle?: { beforeCopy: any; afterCopy: any };
}
const CopyToClipboardButton = ({
  textToCopy,
  style,
  copyButtonStyle,
}: copyProps) => {
  const [isCopied, setIsCopied] = useState(false);

  const copyToClipboard = () => {
    navigator.clipboard
      .writeText(textToCopy)
      .then(() => {
        setIsCopied(true);
        setTimeout(() => setIsCopied(false), 500); // Reset the "Copied" state after 2 seconds
      })
      .catch((err) => {
        console.error("Unable to copy text to clipboard", err);
      });
  };

  return (
    <div>
      {isCopied
        ? <div>{copyButtonStyle?.afterCopy}</div> || (
            <button style={{ ...style }}>Copied!</button>
          )
        : (
            <div onClick={copyToClipboard}> {copyButtonStyle?.beforeCopy}</div>
          ) || <button onClick={copyToClipboard}> Copy to Clipboard</button>}
    </div>
  );
};

export default CopyToClipboardButton;
