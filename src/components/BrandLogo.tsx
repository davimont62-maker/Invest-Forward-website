type BrandLogoProps = {
  variant?: "momentum" | "axis" | "gateway" | "monogram";
};

export default function BrandLogo({ variant = "momentum" }: BrandLogoProps) {
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
