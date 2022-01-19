const url = 'https://jsonplaceholder.typicode.com/users';

const fetchGetUsers = () => {
  console.log('inside get users api');
  return fetch(url, {
    method: 'GET',
  })
    .then(response => response.json())
    .catch(error => {
      throw error;
    });
};

export default fetchGetUsers;



.then(function (data) {

  // Log the data to the console
  console.log(data);

  // Cache the data to a variable
  users = data;

  // Now that you have both APIs back, you can do something with the data

})