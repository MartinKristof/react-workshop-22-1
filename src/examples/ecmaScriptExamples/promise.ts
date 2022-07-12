const getDataPromise = new Promise(resolve => {
  setTimeout(() => resolve('Data'), 2000);
});

const failedPromise = new Promise((resolve, reject) => {
  setTimeout(() => reject(new Error('fail')), 2000);
});

console.log(getDataPromise);

getDataPromise.then(value => console.log(value));
failedPromise.catch(error => console.log(error));

// TO await / async

const getAsyncData = async () => {
  const result = await getDataPromise;
  console.log('await', result);
};
getAsyncData();

// Finally
// failedPromise.catch(error => console.log(error)).finally(() => console.log('called everytime'));

export {};
