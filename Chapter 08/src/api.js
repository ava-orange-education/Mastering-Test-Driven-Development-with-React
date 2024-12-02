// api.js
const fetchData = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve('Sample Data');
    }, 1000); // Simulating a delay of 1 second
  });
};

export default fetchData;
