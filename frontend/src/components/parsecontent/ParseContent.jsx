import parse from "html-react-parser";

import React from "react";

const ParseContent = ({ children }) => {
  return parse(String(children));
};

export default ParseContent;
