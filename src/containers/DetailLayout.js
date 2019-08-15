import React, { useEffect, useState } from "react";
import axios from "axios";
import { Spin } from "antd";
import InfoCard from "../components/InfoCard";
import Fallback from "../components/Fallback";
const DetailLayout = props => {
  let id = props.match.params.id;
  const [componentData, setComponentData] = useState({
    loading: true,
    error: false,
    data: []
  });
  useEffect(() => {
    const fetchData = async () => {
      try {
        let axiosData = await axios.get(
          `https://itunes.apple.com/lookup?id=${id}`
        );
        let data = axiosData.data.results;
        setComponentData(c => {
          return { ...c, data: data, loading: false };
        });
      } catch (e) {
        setComponentData(c => {
          return { ...c, loading: false, error: true };
        });
      }
    };
    fetchData();
  }, [id]);

  let { loading, error, data } = componentData;
  if (loading)
    return (
      <div className="flex-center">
        <Spin />
      </div>
    );
  return data.length === 0 && loading === false ? (
    <Fallback type={error ? "err" : "no_data"} />
  ) : (
    <InfoCard data={data[0]} history={props.history} />
  );
};

export default DetailLayout;
