import { IconProps } from "@/interfaces";

export const SearchIcon = ({ color = "" }: IconProps) => (
  <svg
    color={color}
    width="20"
    height="20"
    viewBox="0 0 20 20"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <g clipPath="url(#clip0_253_2685)">
      <path
        d="M9.58341 17.5C13.9557 17.5 17.5001 13.9556 17.5001 9.58333C17.5001 5.21108 13.9557 1.66667 9.58341 1.66667C5.21116 1.66667 1.66675 5.21108 1.66675 9.58333C1.66675 13.9556 5.21116 17.5 9.58341 17.5Z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M18.3334 18.3333L16.6667 16.6667"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </g>
    <defs>
      <clipPath id="clip0_253_2685">
        <rect width="20" height="20" fill="white" />
      </clipPath>
    </defs>
  </svg>
);
