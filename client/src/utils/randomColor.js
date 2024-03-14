export const randomColor = () => {
  const colors = ["#9c27b0", "#f44336", "#3f51b5", "#673ab7", "#4caf50"];
  const index = Math.floor(Math.random() * colors.length);
  return colors[index];
};
