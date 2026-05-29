type BrandLogoProps = {
  variant?: "precise" | "image" | "wordmark" | "splitword" | "momentum" | "axis" | "gateway" | "monogram";
};

export default function BrandLogo({ variant = "precise" }: BrandLogoProps) {
  if (variant === "precise") {
    return (
      <span className="brand-logo brand-logo-precise" aria-hidden="true">
        <svg className="precise-mark" viewBox="0 0 92 52" role="img">
          <path className="mark-dark" d="M3 5h16v42H3z" />
          <path className="mark-blue" d="M24 5h58L71 18H29z" />
          <path className="mark-blue" d="M24 24h44l10 8-10 8H34l-6 7H14z" />
          <path className="mark-blue" d="M60 24h18l-10 8z" />
          <path className="mark-divider" d="M90 0v52" />
        </svg>
        <span className="precise-wordmark">
          <span className="precise-invest">Invest</span>
          <span className="precise-forward">Forward</span>
        </span>
      </span>
    );
  }

  if (variant === "image") {
    return (
      <span className="brand-logo brand-logo-image" aria-hidden="true">
        <img src="/assets/invest-forward-logo-site.png" alt="" />
      </span>
    );
  }

  if (variant === "wordmark" || variant === "splitword") {
    return (
      <span className={`brand-logo brand-logo-wordmark brand-logo-${variant}`} aria-hidden="true">
        <span className="logo-invest">
          In<span className="logo-v">v</span>est
        </span>
        <span className="logo-forward">
          For<span className="logo-w"><span>w</span></span>ard
        </span>
      </span>
    );
  }

  return (
    <span className={`brand-logo brand-logo-${variant}`} aria-hidden="true">
      <span className="brand-logo-icon">
        {variant === "momentum" && (
          <svg viewBox="0 0 40 28" role="img">
            <rect x="3" y="4" width="34" height="20" rx="4" />
            <path d="M9 18l7-6 6 4 9-9" />
            <path d="M26 7h5v5" />
            <path d="M16 25h8" />
          </svg>
        )}
        {variant === "axis" && (
          <svg viewBox="0 0 40 28" role="img">
            <path d="M6 22V7" />
            <path d="M6 22h28" />
            <path d="M10 18l7-5 6 3 9-8" />
            <path d="M29 8h4v4" />
          </svg>
        )}
        {variant === "gateway" && (
          <svg viewBox="0 0 40 28" role="img">
            <path d="M7 23V6h26v17" />
            <path d="M13 23V12h14v11" />
            <path d="M18 17h4" />
            <path d="M20 12V6" />
          </svg>
        )}
        {variant === "monogram" && (
          <svg viewBox="0 0 40 28" role="img">
            <path d="M8 23V5h10" />
            <path d="M8 14h8" />
            <path d="M22 23V5" />
            <path d="M22 5h10" />
            <path d="M22 14h8" />
          </svg>
        )}
      </span>
      <span className="brand-logo-text">
        <span>Invest</span>
        <span>Forward</span>
      </span>
    </span>
  );
}
