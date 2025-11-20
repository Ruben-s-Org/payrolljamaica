import React from "react";

const PayrollJamaicaLogo = (props: React.SVGProps<SVGSVGElement>) => (
  <svg
    width={24}
    height={24}
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <circle cx="12" cy="12" r="10" fill="currentColor" opacity="0.15" />
    <path
      d="M6 13c2.5-1.5 5.5-1.5 8 0m-6-4l10 10M6 19l12-12"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path d="M8.5 7.5h7v2h-7z" fill="currentColor" />
  </svg>
);
export default PayrollJamaicaLogo;
