function Select_style() {
  const customStyle = {
    control: (style) => ({
      ...style,
      width: 200,
      fontSize: 22,
      fontWeight: 500,
      background: "#343434",
      border: "1px solid #606060",
      "&:hover": {
        borderColor: "cornflowerblue",
      },
      "@media only screen and (max-width: 1150px)": {
        ...style["@media only screen and (max-width: 1150px)"],
        width: "200px",
      },
    }),
    menu: (style) => ({
      ...style,
      backgroundColor: "#505050",
    }),

    menuList: (style) => ({
      ...style,
      border: "1px solid #606060",
      fontSize: 22,
      fontWeight: 500,
      backgroundColor: "#343434",
      color: "#808080",
      padding: 0,
    }),
    dropdownIndicator: (style) => ({
      ...style,
      color: "cornflowerblue",
    }),
    indicatorSeparator: (style) => ({
      ...style,
      background: "cornflowerblue",
    }),
  };
  return { ...style };
}
export default Select_style;
