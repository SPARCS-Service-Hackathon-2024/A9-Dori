const IconMe = ({ isSelected = false }) => (
  <svg
    width="25"
    height="24"
    viewBox="0 0 25 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M4.71447 15.4645C5.65215 14.5268 6.92392 14 8.25 14H16.25C17.5761 14 18.8479 14.5268 19.7855 15.4645C20.7232 16.4021 21.25 17.6739 21.25 19V21C21.25 21.5523 20.8023 22 20.25 22C19.6977 22 19.25 21.5523 19.25 21V19C19.25 18.2044 18.9339 17.4413 18.3713 16.8787C17.8087 16.3161 17.0456 16 16.25 16H8.25C7.45435 16 6.69129 16.3161 6.12868 16.8787C5.56607 17.4413 5.25 18.2044 5.25 19V21C5.25 21.5523 4.80228 22 4.25 22C3.69772 22 3.25 21.5523 3.25 21V19C3.25 17.6739 3.77678 16.4021 4.71447 15.4645Z"
      fill={isSelected ? "#444CE7" : "#98A2B3"}
      css={{ transition: "fill 0.2s ease-in-out" }}
    />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M12.25 4C10.5931 4 9.25 5.34315 9.25 7C9.25 8.65685 10.5931 10 12.25 10C13.9069 10 15.25 8.65685 15.25 7C15.25 5.34315 13.9069 4 12.25 4ZM7.25 7C7.25 4.23858 9.48858 2 12.25 2C15.0114 2 17.25 4.23858 17.25 7C17.25 9.76142 15.0114 12 12.25 12C9.48858 12 7.25 9.76142 7.25 7Z"
      fill={isSelected ? "#444CE7" : "#98A2B3"}
      css={{ transition: "fill 0.2s ease-in-out" }}
    />
  </svg>
);

export default IconMe;
