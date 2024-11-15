export const convertNumber = (number : number) => {
    if (number >= 1000000) {
      return (number / 1000000).toFixed(1) + "M"; // Trên 1 triệu -> đơn vị 'm'
    } else if (number >= 1000) {
      return (number / 1000).toFixed(1) + "K"; // Trên 1000 -> đơn vị 'k'
    } else {
      return number.toString(); // Dưới 1000 -> giữ nguyên
    }
  };
  