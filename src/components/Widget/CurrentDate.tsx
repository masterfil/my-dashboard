import { useMonthDays } from "../../hooks/useMonthDays";
import { Text } from "../Common/Typography";

export const CurrentDate = () => {
  const { currentDateString } = useMonthDays();
  return <Text>{currentDateString}</Text>;
};
