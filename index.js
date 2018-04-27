const userName = ''
const baseApi = 'https://api.github.com/'
const fork = `${userName}/javascript-fetch-lab`

function getIssues(data) {
  fetch(`${baseApi}repos/${fork}/issues`).
    then(resp => {
      resp.json().then( data => {
        for (let i = 0; i < data.length; i++){
          displayIssue(new Issue(data[i]));
        }
      } )
    })
}

function displayIssue(issue) {
  $('#issues').append(issue.template())
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
    method: 'post',
    headers: {
      Authorization : `token ${token}`
    }
  }).then(res => {
    let repo = new Repo(res);
    showForkedRepo(repo);
  });


}

function getToken() {
  //change to your token to run in browser, but set
  //back to '' before committing so all tests pass
  return 'c8335048e38f91a993efae27ca93af1c31571c2a'
}
