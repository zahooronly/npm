console.log("First Statement");
const p = getUser(1);
console.log("Second Statement");

p.then((user) => getRepos(user.gitUsername)).then((repos) =>
  getCommits(repos).then((commits) => console.log("Commits: ", commits))
);

// Callback Functions
// function getUser()

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
