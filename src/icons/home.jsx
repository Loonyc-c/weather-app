import * as React from "react"
const Home = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={24}
    height={26}
    fill="none"
    {...props}
  >
    <path
      stroke="url(#a)"
      strokeWidth={2}
      d="m1.924 9.541 8-7.667a3 3 0 0 1 4.152 0l8 7.667A3 3 0 0 1 23 11.707V22a3 3 0 0 1-3 3H4a3 3 0 0 1-3-3V11.707a3 3 0 0 1 .924-2.166Z"
    />
    <defs>
      <linearGradient
        id="a"
        x1={12}
        x2={12}
        y1={-1.5}
        y2={26}
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#111827" />
        <stop offset={1} stopColor="#6B7280" />
      </linearGradient>
    </defs>
  </svg>
)
export default Home
