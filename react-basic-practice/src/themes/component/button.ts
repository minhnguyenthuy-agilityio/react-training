export const button = {
  baseStyle: {
    borderRadius: "10px",
    width: "full",
    color: "light.100",
    minW: 0,
  },

  variants: {
    outline: {
      color: "secondary.300",
      width: "auto",
      border: "1px solid",
      borderColor: "light.300",
      _hover: {
        borderColor: "light.300",
      },
    },
  },

  sizes: {
    xs: {
      fontSize: "xs",
      lineHeight: "xs",
      px: 3.5,
    },
    sm: {
      fontSize: "sm",
      lineHeight: "sm",
      px: 3,
    },
    base: {
      fontSize: "base",
      lineHeight: "base",
      px: 3,
    },
    lg: {
      fontSize: "lg",
      lineHeight: "lg",
      px: 3.5,
    },
  },

  defaultProps: {
    colorScheme: "primary",
    size: "sm",
  },
};
