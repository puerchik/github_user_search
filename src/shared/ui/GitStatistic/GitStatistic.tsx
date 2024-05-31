import styled from "styled-components";
import { FlexColumn } from "@/shared/const/FlexColumn";

type Props = {
  title: string;
  value: number;
};

export const GitStatistic = ({ title, value }: Props) => {
  return (
    <>
      <Statistic $rowGap="10px" $alignItems="flex-start">
        <StatisticTitle>{title}</StatisticTitle>
        <StatisticValue>{value}</StatisticValue>
      </Statistic>
    </>
  );
};

const Statistic = styled(FlexColumn)`
  @media (max-width: 768px) {
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    column-gap: 15px;
  }
`;

const StatisticTitle = styled.h3`
  font-size: 16px;
`;

const StatisticValue = styled.p`
  font-size: 24px;
  font-weight: 500;
`;
