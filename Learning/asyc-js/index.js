console.log("one");
// const user = getUser(1);
getUser(1, (user) => {
  console.log(user);
  getRepos(user.gitUsername, (repos) => {
    console.log("Repos: ", repos);
    getSuperUsedRepo(repos.MostUsedRepo, (used) => {
      console.log(used);
      getCommits(used.commits, (commits) => {
        console.log("Commits: ", commits);
      });
    });
  });
});
// So this is a callback hell: We've to resolve it
// getRepos("ZahoorOnly", (repos) => {
//   console.log("Repos: ", repos);
// });
// console.log(user);
console.log("two");

function getUser(id, callback) {
  console.log("Geting User...");
  setTimeout(() => {
    callback({
      id: id,
      gitUsername: "ZahoorOnly",
    });
    // return;
  }, 2000);
}
function getRepos(username, callback) {
  setTimeout(() => {
    console.log("Calling GitHub API...");
    callback({
      username: username,
      Repos: ["repo1", "repo2", "repo3"],
    });
    // return;
  }, 2000);
}
