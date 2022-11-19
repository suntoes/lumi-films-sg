import { Icon, IconProps, useBreakpointValue } from "@chakra-ui/react";

const Blur = (props) => (
    <Icon
      zIndex={-1}
      height="100vh"
      width="100vw"
      viewBox="0 0 528 560"
      xmlns="http://www.w3.org/2000/svg"
      {...props}>
      <circle cx="244" cy="56" r="139" fill="#ED64A6" />
      <circle cx="171" cy="261" r="111" fill="#F56565" />
      <circle cx="350" cy="291" r="139" fill="#ED64A6" />
      <circle cx="400.5" cy="189.5" r="101.5" fill="#ED8936" />
      <circle cx="450.5" cy="317.5" r="101.5" fill="#ECC94B" />
      <circle cx="70.5" cy="458.5" r="101.5" fill="#48BB78" />
      <circle cx="426.5" cy="5" r="101.5" fill="#4299E1" />
    </Icon>
);

export default Blur
