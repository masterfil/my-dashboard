import { useMemo } from 'react';

const useMonthDays = (): number[] => {
  return useMemo(() => {
    const currentDate = new Date();
    const year = currentDate.getFullYear();
    const month = currentDate.getMonth() + 1;
    const daysInMonth = new Date(year, month, 0).getDate();

    return Array.from({ length: daysInMonth }, (_, index) => index + 1);
  }, []);
};

export default useMonthDays;
