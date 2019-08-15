import React from "react";
import { Table, Avatar } from "antd";
import convertDuration from "../methods/convertDuration";

const columns = [
  {
    title: "",
    dataIndex: "artworkUrl100",
    key: "artworkUrl100",
    render: imgSrc => <Avatar src={imgSrc} />
  },
  {
    title: "Track Name",
    dataIndex: "trackName",
    key: "trackName"
  },
  {
    title: "Collection Name",
    dataIndex: "collectionName",
    key: "collectionName"
  },
  {
    title: "Artist Name",
    dataIndex: "artistName",
    key: "artistName"
  },
  {
    title: "Genre",
    dataIndex: "primaryGenreName",
    key: "primaryGenreName"
  },
  {
    title: "Track Price",
    dataIndex: "trackPrice",
    key: "trackPrice",
    render: (price, record) => (
      <span>
        {price}
        {record.currency}
      </span>
    )
  },
  {
    title: "Duration",
    dataIndex: "trackTimeMillis",
    key: "trackTimeMillis",
    render: time => <span>{convertDuration(time)}</span>
  }
];

const TableView = ({ data, history }) => {
  return (
    <Table
      rowClassName="cp"
      dataSource={data}
      columns={columns}
      rowKey="Id"
      onRow={record => {
        return {
          onClick: () => {
            history.push(`/${record.trackId}`);
          }
        };
      }}
    />
  );
};

export default TableView;
