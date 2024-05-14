export const ArrowInCircle = () => (
  <svg
    fill="none"
    height="32"
    viewBox="0 0 32 32"
    width="32"
    xmlns="http://www.w3.org/2000/svg"
  >
    <circle
      className="svg-fill"
      cx="16"
      cy="16"
      r="16"
      transform="rotate(-180 16 16)"
    />
    <path
      className="svg-stroke-bg"
      d="M24 16H11"
      strokeLinecap="round"
      strokeWidth="2"
    />
    <path
      className="svg-stroke-bg"
      d="M14 11L9 16L14 21"
      strokeLinecap="round"
      strokeWidth="2"
    />
  </svg>
);
