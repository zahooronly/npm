console.log("First Statement");
const p = getUser(1);
console.log("Second Statement");
// Calling with Promises
p.then((user) => getRepos(user.gitUsername)).then((repos) =>
  getCommits(repos).then((commits) => console.log("Commits: ", commits))
);

// Async and Await
// we declare the function as Async and then we make it await for the result so that we can use that value
// Functions
function getUser(id) {
  return new Promise((resolve, reject) => {
    console.log("Geting User...");
    setTimeout(() => {
      resolve({
        id: id,
        gitUsername: "ZahoorOnly",
      });
    }, 2000);
  });
}
function getRepos(username) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("Calling GitHub API...");
      resolve({
        username: username,
        Repos: ["repo1", "repo2", "repo3"],
      });
    }, 2000);
  });
}
function getCommits(repo) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("Calling GitHub API...");
      resolve({
        repo: repo,
        commits: ["commits 1", "commits 2", "commits 3"],
      });
    }, 2000);
  });
}
