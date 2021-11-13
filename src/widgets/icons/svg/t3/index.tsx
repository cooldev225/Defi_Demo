const Icon: React.FC<IconProps> = ({ color = "#fff", width = "21px" }) => {
  return (
    <svg
      width="18"
      height="14"
      viewBox="0 0 18 14"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M17.7502 2C17.7502 2 17 2 17 2.75014C17 3.50029 17 11.2504 17 11.2504C17 11.2504 17 12 17.7502 12H18V14H12V12H13V2.69995H12.9L9.83545 14H7.1366L4.09998 2.69995H4V12H5V14H0V12H0.249763C0.249763 12 1 12 1 11.2499C1 10.4997 1 2.74958 1 2.74958C1 2.74958 1 2 0.249763 2H0V0H6.63403L8.96094 8.65918H9.0376L11.386 0H18V2H17.7502Z"
        fill="white"
      />
    </svg>
  );
};

export default Icon;
