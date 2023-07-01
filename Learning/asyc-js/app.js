console.log("one");
// const user = getUser(1);
// getUser(1, (user) => {
//   console.log(user);
//   getRepos(user.gitUsername, (repos) => {
//     console.log("Repos: ", repos);
//     getSuperUsedRepo(repos.MostUsedRepo, (used) => {
//       console.log(used);
//       getCommits(used.commits, (commits) => {
//         console.log("Commits: ", commits);
//       });
//     });
//   });
// });
// CallBackHell
// So this is a callback hell: We've to resolve it

// replacing the anonymous functions with named functions
// Resolving Callback Hell

getUser(1, userName);
// getRepos(user.gitUsername, getAllRepos);
// getSuperUsedRepo(repos.MostUsedRepo, mostUsed);
// getCommits(used.commits, ShowCommits);

// So this is a callback hell: We've to resolve it

// replacing the anonymous functions with named functions
// function ShowCommits(commits) {
//   console.log("Commits:", commits);
// }
// function mostUsed(used) {
//   console.log("Most Used Repos:", used);
// }
// function getAllRepos(repos) {
//   console.log("All Repos:", repos);
// }
function userName(id) {
  console.log("User: ", id);
}
// Resolved

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
