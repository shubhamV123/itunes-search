import React from "react";
import { Result } from "antd";

const fallbackInfo = {
  info: {
    status: "info",
    title: "Please search artist name using search bar",
    subTitle: "For ex : adele"
  },
  no_data: {
    status: "404",
    title: "No result found. Please try again with different keyword",
    subTitle: "The keyword you are trying to search might not exist in database"
  },
  err: {
    status: "500",
    title: "Something went wrong",
    subTitle: "Either server is not responding or your system has some issue"
  }
};
const Fallback = ({ type }) => {
  let infoType = fallbackInfo[type];
  let { status, title, subTitle } = infoType;
  return <Result {...{ status }} {...{ title }} {...{ subTitle }} />;
};

export default Fallback;
