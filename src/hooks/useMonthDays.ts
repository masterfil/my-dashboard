interface Monthdays {
  currentDateString: string;
  day: number;
  days: number[];
  month: number;
}

export const useMonthDays = (): Monthdays => {
  const date = new Date();
  const currentDateString = date.toDateString();
  const day = date.getDate();
  const year = date.getFullYear();
  const month = date.getMonth() + 1;
  const monthDays = new Date(year, month, 0).getDate();

  const days = [];
  for (let i = 1; i <= monthDays; i++) {
    days.push(i);
  }

  return { currentDateString, day, days, month };
};
