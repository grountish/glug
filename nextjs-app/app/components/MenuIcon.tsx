interface SvgIconProps {
  width?: number;    
  height?: number;   
  color?: string;
  className?: string;
  isOpen?: boolean;
}

const MenuIcon: React.FC<SvgIconProps> = ({ width = 35, height = 19, color = "#ECE8E2", className, isOpen = false }) => {
  return isOpen ? (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="26"
      height="25"
      viewBox="0 0 26 25"
      fill="none"
      className={className}
    >
      <path d="M1.37744 1L24.6221 24.2446" stroke={color} strokeWidth="2" strokeMiterlimit="10" />
      <path d="M24.6221 1L1.37744 24.2446" stroke={color} strokeWidth="2" strokeMiterlimit="10" />
    </svg>
  ) : (
    <svg
      width={width}
      height={height}
      viewBox="0 0 35 19"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <path d="M0 9.84H35" stroke={color} strokeWidth="2" strokeMiterlimit="10" />
      <path d="M0 18H35" stroke={color} strokeWidth="2" strokeMiterlimit="10" />
      <path d="M0 1H35" stroke={color} strokeWidth="2" strokeMiterlimit="10" />
    </svg>
  );
};

export default MenuIcon;
