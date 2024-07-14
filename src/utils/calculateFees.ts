export const calculateLateFees = (
  due_date: any,
  return_date: any,
  cost: any,
): any => {
  let fees: any = 0;
  if (due_date <= return_date) {
    let days = getDifferenceInDays(due_date, return_date);
    fees = days * cost;
  }

  return fees;
};

function getDifferenceInDays(date1: Date, date2: Date): number {
  if (isNaN(date1.getTime()) || isNaN(date2.getTime())) {
    throw new Error("Invalid date format");
  }
  const diffTime = Math.abs(date2.getTime() - date1.getTime());
  const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));

  return diffDays;
}
