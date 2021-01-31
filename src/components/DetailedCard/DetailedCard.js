import React, { useState } from "react";
import { Colors } from "../../utils/Colors";
import {
  Date,
  RoundedData,
  Title,
  Text,
  Info,
  Tag,
  Video,
} from "../../components";
import {
  StyledInfoTitle,
  StyledDate,
  StyledDetail,
  StyledTitle,
  StyledDetailedCard,
  StyledTopic,
  StyledOverview,
  StyledImage,
  StyledTopicTitle,
  StyledInfo,
  StyledRow,
  StyledTags,
  StyledRoundedData,
} from "./styles";
import moment from "moment";
import { useSelector } from "react-redux";
import Spinner from "../Spinner/Spinner";

const DetailedCard = (props) => {
  const title = props.card?.title;
  const vote_average = props.card?.vote_average;
  const release_date = props.card?.release_date;
  const poster_path = props.card?.poster_path;
  const overview = props.card?.overview;
  const status = props.card?.status;
  const original_language = props.card?.original_language;
  const revenue = props.card?.revenue;
  const video = props.card?.video;
  const budget = props.card?.budget;
  const genres = props.card?.genres;
  const runtime = props.card?.runtime;

  const getCurrency = (value) =>
    new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: "USD",
    }).format(value);

  const specificInfos = [
    { title: "Situação", value: status },
    { title: "Idioma", value: original_language?.toUpperCase() },
    {
      title: "Duração",
      value: Math.floor(runtime / 60) + "h " + (runtime % 60) + "min",
    },
    {
      title: "Orçamento",
      value: getCurrency(budget),
    },
    { title: "Receita", value: getCurrency(revenue) },
    { title: "Lucro", value: getCurrency(revenue - budget) },
  ];

  const poster = `https://image.tmdb.org/t/p/w500${poster_path}`;

  return title ? (
    <StyledDetail>
      <StyledDetailedCard url={poster}>
        <StyledInfoTitle>
          <StyledTitle>
            <Title title={title} color={Colors.primary} />
          </StyledTitle>
          <StyledDate>
            <Date date={moment(release_date).format("DD/MM/YYYY")} />
          </StyledDate>
        </StyledInfoTitle>
        <StyledOverview>
          <StyledInfo>
            <StyledTopic>
              <StyledTopicTitle>
                <Text text={"Sinopse"} color={Colors.fourth} topic={true} />
              </StyledTopicTitle>
              <Text text={overview} color={Colors.text2} />
            </StyledTopic>
            <StyledTopic>
              <StyledTopicTitle>
                <Text text={"Informações"} color={Colors.fourth} topic={true} />
              </StyledTopicTitle>
              <StyledRow>
                {specificInfos?.map((info) => (
                  <Info title={info.title} value={info.value} />
                ))}
              </StyledRow>
            </StyledTopic>
            <StyledRow>
              <StyledTags>
                {genres?.map((genre) => (
                  <Tag tag={genre.name} />
                ))}
              </StyledTags>
              <StyledRoundedData>
                <RoundedData
                  size={"lg"}
                  data={`${vote_average * 10}%`}
                  rating={true}
                />
              </StyledRoundedData>
            </StyledRow>
          </StyledInfo>
          <StyledImage src={poster} />
        </StyledOverview>
      </StyledDetailedCard>
      <o>{props?.card?.trailer}</o>
      <Video url={props?.card?.trailer} />
    </StyledDetail>
  ) : (
    <Spinner />
  );
};

export default DetailedCard;
