import styled from "styled-components";
import { FlexColumn } from "@/shared/const/FlexColumn";

type Props = {
  title: string;
  value: number;
};

export const GitStatistic = ({ title, value }: Props) => {
  return (
    <>
      <FlexColumn $rowGap="10px" $alignItems="flex-start">
        <StatisticTitle>{title}</StatisticTitle>
        <StatisticValue>{value}</StatisticValue>
      </FlexColumn>
    </>
  );
};

const StatisticTitle = styled.h3``;

const StatisticValue = styled.p``;
