import React, { useCallback } from "react";
import { Card, Button } from "antd";
import convertDuration from "../methods/convertDuration";
const { Meta } = Card;

const InfoCard = ({ loading, data, history }) => {
  let {
    artworkUrl100 = null,
    artistName = null,
    collectionName = null,
    collectionPrice = null,
    country = null,
    currency = null,
    isStreamable = null,
    primaryGenreName = null,
    releaseDate = null,
    trackName = null,
    trackPrice = null,
    trackTimeMillis = null,
    trackViewUrl = null
  } = data;
  const redirectUrl = useCallback(() => {
    window.location = trackViewUrl;
  }, [trackViewUrl]);
  const redirectToHome = useCallback(() => {
    history.push("/");
  }, [history]);
  return (
    <div className="flex-center">
      <Card
        hoverable
        style={{ width: 350, margin: "10px 0px" }}
        loading={loading}
        cover={
          <img
            alt="example"
            src={artworkUrl100.replace("100x100", "800x800")}
          />
        }
      >
        <Meta title={trackName} description={artistName} />
        <div>
          <strong>Collection Name : </strong> {collectionName}
        </div>
        <div>
          <strong>Collection Price : </strong> {collectionPrice} {currency}
        </div>
        <div>
          <strong>Genre : </strong> {primaryGenreName}
        </div>
        <div>
          <strong>Track Price : </strong> {trackPrice} {currency}
        </div>
        <div>
          <strong>Country : </strong> {country}
        </div>
        <div>
          <strong>Streamable : </strong> {isStreamable}
        </div>
        <div>
          <strong>Release Date : </strong>{" "}
          {new Date(releaseDate).toLocaleDateString()}
        </div>
        <div>
          <strong>Duration : </strong> {convertDuration(trackTimeMillis)}
        </div>
        <Button block className="mt-1" onClick={redirectUrl}>
          Go to store
        </Button>
        <Button block type="primary" className="mt-1" onClick={redirectToHome}>
          Go Back
        </Button>
      </Card>
      ,
    </div>
  );
};

export default InfoCard;
