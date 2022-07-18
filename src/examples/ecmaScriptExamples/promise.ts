const getDataPromise = new Promise(resolve => {
  setTimeout(() => resolve('Data'), 2000);
});

const failedPromise = new Promise((resolve, reject) => {
  setTimeout(() => reject(new Error('fail')), 2000);
});

// const response = fetch('https://hn.algolia.com/api/v1/search?query=test');
// response
//   .then(response => {
//     console.log(response);
//     return response.json();
//   })
//   .then(json => {
//     console.log(json);
//     return json;
//   })
//   .catch(error => {
//     return error.message;
//   });

// console.log(getDataPromise);
// console.log(failedPromise);

// getDataPromise.then(value => console.log(value));

// failedPromise.catch(error => console.log(error));

// TO await / async

// const getAsyncData = async () => {
//   try {
//     const result = await getDataPromise;
//     console.log('await', result);
//   } catch (error) {
//     console.log(error);
//   }
// };
// getAsyncData();

// Finally
// failedPromise.catch(error => console.log(error)).finally(() => console.log('called everytime'));

const fetchData = async () => {
  try {
    const response = await fetch('https://hn.algolia.com/api/v1/search?query=test');
    const json = await response.json();

    console.log(json);
  } catch (error) {
    console.log(error);
  } finally {
    console.log('always');
  }
};

fetchData();

export {};
