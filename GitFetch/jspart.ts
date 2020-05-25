const inputValue = <HTMLInputElement>document.getElementById("search");
const searchButton = document.querySelector(".searchButton");
const nameContainer = document.querySelector(".main__profile-name");
const unContainer = document.querySelector(".main__profile-username");
const reposeContainer = document.querySelector(".main__profile-repos");
const urlContainer = document.querySelector(".main__profile-url");





const clientid = "Iv1.f4be9b4ec47d5290";
const clientsecret = "5072375649143a9e4e23eb99beb6581498f4c46c";



async function showData() {
    let user = inputValue.value
    document.getElementById("displayrepo").innerHTML = "";
    const apicall = await fetch(`https://api.github.com/users/${user}?clientid=${clientid}&clientsecret=${clientsecret}`);
    const res = await apicall.json();
    console.log(res);
    nameContainer.innerHTML = `Name:  <span class="main__profile-name">${res.name}</span>`;
    unContainer.innerHTML = `Username:  <span class="main__profile-name">${res.login}</span>`;
    reposeContainer.innerHTML = `Repos:  <span class="main__profile-name">${res.public_repos}</span>`;
    urlContainer.innerHTML = `URL: <span class="main__profile-name">${res.url}</span>`;
    const array = await fetch(res.repos_url)
    const jdata = await array.json();
    console.log(jdata);
    for (let i = 0; i < jdata.length; i++) {
        console.log(jdata[i].full_name);

        let str = `<div class="card">
                        <div class="card-header">
                        Repo-${i + 1}
                        </div>
                        <div class="card-body">
                        <a href="${jdata[i].html_url}" target="_blank" class="anchor">${jdata[i].name}</a> 
                        </div> 
                        </div>
                        <br>
                        <br>`;


        document.getElementById("displayrepo").innerHTML += str;
    }

}

searchButton.addEventListener("click", () => {
    showData();
})