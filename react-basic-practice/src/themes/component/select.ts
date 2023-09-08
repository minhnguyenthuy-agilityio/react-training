export const select = {
  baseStyle: {
    icon: {
      fontSize: "full",
      height: 6,
      width: 6,
      color: "secondary.300",
    },
    field: {
      fontSize: "xs",
      lineHeights: "xs",
      borderRadius: "10px",
      color: "secondary.500",
      fontWeight: "semibold",
      h: "52px",
    },
  },

  sizes: {
    base: {
      icon: {
        left: 7,
      },
      field: {
        w: "196px",
        py: 3.5,
        pl: 14,
        pr: 6,
      },
    },
    md: {
      icon: {
        left: 6,
      },
      field: {
        w: "148px",
        py: 3.5,
        pl: 12,
        pr: 6,
      },
    },
    xs: {
      icon: {
        left: 5,
      },
      field: {
        w: "130px",
        py: 3.5,
        pl: 10,
        pr: 6,
      },
    },
  },

  defaultProps: {
    size: "base",
  },
};
