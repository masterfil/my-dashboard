import { useMemo } from 'react';

const useMonthDays = (): number[] => {
  return useMemo(() => {
    const currentDate = new Date();
    const year = currentDate.getFullYear();
    const month = currentDate.getMonth() + 1;
    const monthDays = new Date(year, month, 0).getDate();

    return Array.from({ length: monthDays }, (_, index) => index + 1);
  }, []);
};

export default useMonthDays;
