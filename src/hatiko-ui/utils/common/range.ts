


export const range = (start: number, end: number) => {
  const resultArray = [];

  for (let i = start; i < end; i++) {
    resultArray.push(i);
  }

  return resultArray;
};