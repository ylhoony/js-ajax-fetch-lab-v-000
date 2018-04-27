const userName = ''
const baseApi = 'https://api.github.com/'
const fork = `${userName}/javascript-fetch-lab`

function getIssues() {
}

function showIssues(json) {
}

function createIssue() {
}

function showResults(json) {
  console.log(json);



}

function forkRepo() {
  const repo = 'learn-co-curriculum/javascript-fetch-lab';
  //use fetch to fork it!
  const token = getToken();

  fetch(`https://api.github.com/repos/${repo}/forks`, {
    method: 'get',
    headers: {
      Authorization : `token ${token}`
    }
  }).then(res => res.json()).then(json => console.log(json));


}

function getToken() {
  //change to your token to run in browser, but set
  //back to '' before committing so all tests pass
  return 'c8335048e38f91a993efae27ca93af1c31571c2a'
}
