export const select = {
  baseStyle: {
    borderColor: "red",

    icon: {
      fontSize: "24px",
      height: 6,
      width: 6,
      color: "secondary.300",
    },
    field: {
      fontSize: "xs",
      lineHeights: "xs",
      borderRadius: "10px",
      color: "secondary.500",
      border: "1px dashed",
      borderColor: "red",
      fontWeight: "semibold",
      h: "52px",
    },
  },

  variants: {
    special: {
      icon: {
        left: 7,
      },
      field: {
        pl: 16,
      },
    },
  },

  sizes: {
    base: {
      field: {
        w: "196px",
        py: 3.5,
      },
    },
    md: {
      field: {
        w: "148px",
        py: 3.5,
      },
    },
    xs: {
      field: {
        w: "130px",
        py: 3.5,
      },
    },
  },

  defaultProps: {
    size: "base",
  },
};
