import { useState } from "react";

export default function ShareBar() {
  const [copied, setCopied] = useState(false);
  const url = "https://hianimealternative.net";
  const text = "Check out the best HiAnime alternatives for free anime streaming!";

  function handleShare() {
    if (navigator.share) {
      navigator.share({ title: "HiAnime Alternative", text, url });
    } else {
      navigator.clipboard.writeText(url).then(() => {
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
      });
    }
  }

  function shareTwitter() {
    window.open(
      `https://twitter.com/intent/tweet?text=${encodeURIComponent(text)}&url=${encodeURIComponent(url)}`,
      "_blank"
    );
  }

  function shareReddit() {
    window.open(
      `https://reddit.com/submit?url=${encodeURIComponent(url)}&title=${encodeURIComponent(text)}`,
      "_blank"
    );
  }

  return (
    <div className="share-bar">
      <span className="share-text">Enjoying this? Share with friends</span>
      <div className="share-buttons">
        <button className="share-btn share-main" onClick={handleShare}>
          {copied ? "✓ Copied!" : "⛓ Share"}
        </button>
        <button className="share-btn share-twitter" onClick={shareTwitter}>
          𝕏
        </button>
        <button className="share-btn share-reddit" onClick={shareReddit}>
          ↗ Reddit
        </button>
      </div>
    </div>
  );
}
