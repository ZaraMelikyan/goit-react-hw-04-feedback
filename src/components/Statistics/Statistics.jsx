import React from "react";
import {
  StyledStatisticWrapper,
  StyledStatistic,
  StyledStatisticPercent,
} from 'components/Statistics/Statistics.styled';


export default function Statistics({
  good,
  neutral,
  bad,
  total,
  positivePercentage,
}) {
    return (
      <StyledStatisticWrapper>
        <StyledStatistic>&#128525;Good : {good}</StyledStatistic>
        <StyledStatistic>&#128528;Neutral : {neutral}</StyledStatistic>
        <StyledStatistic>&#128533;Bad: {bad}</StyledStatistic>
        <StyledStatistic>Total: {total}</StyledStatistic>
        <StyledStatisticPercent>
          Positive feedback: {positivePercentage} %
        </StyledStatisticPercent>
      </StyledStatisticWrapper>
    );
}