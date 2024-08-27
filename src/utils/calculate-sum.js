export const calculateSum = (data, columnNames) => {
    const sums = {};
    columnNames.forEach(column => {
      sums[column] = data.reduce((total, item) => total + (item[column] || 0), 0);
     // console.log("column: value",column, sums[column])
    });
    return sums;
  };
  