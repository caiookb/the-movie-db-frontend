import moment from "moment";
import React from "react";
import { Date, Tag, Text, Title, RoundedData } from "..";
import { Colors } from "../../utils/Colors";
import {
  StyledCard,
  StyledImage,
  StyledInfo,
  StyledInfoTitle,
  StyledApproval,
  StyledTitle,
  StyledDate,
  StyledOverview,
  StyledTags,
} from "./styles";

const Card = (props) => {
  const title = props.movie?.title;
  const vote_average = props.movie?.vote_average;
  const release_date = props.movie?.release_date;
  const poster_path = props.movie?.poster_path;
  const overview = props.movie?.overview;
  const describedGenres = props.movie?.describedGenres;

  const { key, onClick } = props;

  const poster = `https://image.tmdb.org/t/p/w500${poster_path}`;

  return (
    <StyledCard url={poster} key={key} onClick={onClick} data-testid={"card"}>
      <StyledImage src={poster} />
      <StyledInfo>
        <StyledInfoTitle>
          <StyledApproval>
            <RoundedData rating data={vote_average * 10 + "%"} />
          </StyledApproval>
          <StyledTitle>
            <Title title={title} color={Colors.secondary} />
          </StyledTitle>
          <StyledDate>
            <Date date={moment(release_date).format("DD/MM/YYYY")} />
          </StyledDate>
        </StyledInfoTitle>
        <StyledOverview>
          <Text text={overview} />
        </StyledOverview>
        <StyledTags>
          {describedGenres?.map((genre, key) => (
            <Tag tag={genre} key={key} />
          ))}
        </StyledTags>
      </StyledInfo>
    </StyledCard>
  );
};

export default Card;
