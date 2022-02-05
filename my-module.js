async function getData(userid) {
  let { data: user } = await axios(
    "https://jsonplaceholder.typicode.com/users/" + userid
  );
  let { data: post } = await axios(
    "https://jsonplaceholder.typicode.com/posts/" + userid
  );

  user.posts = [{ ...post }];
  console.log(user);
}

export default getData;
