const inputValue = document.querySelector("#search");
const searchButton = document.querySelector(".searchButton");
const nameContainer = document.querySelector(".main__profile-name");
const unContainer = document.querySelector(".main__profile-username");
const reposeContainer = document.querySelector(".main__profile-repos");
const urlContainer = document.querySelector(".main__profile-url");





const clientid = "Iv1.f4be9b4ec47d5290";
const clientsecret = "5072375649143a9e4e23eb99beb6581498f4c46c";

const fetchUsers = async (user) => {
    const apicall = await fetch(`https://api.github.com/users/${user}?clientid=${clientid}&clientsecret=${clientsecret}`);

    const data = await apicall.json();
    return { data };
}

const showData = () => {
    fetchUsers(inputValue.value).then((res) => {
        console.log(res);


        nameContainer.innerHTML = `Name:  <span class="main__profile-name">${res.data.name}</span>`;
        unContainer.innerHTML = `Username:  <span class="main__profile-name">${res.data.login}</span>`;
        reposeContainer.innerHTML = `Repos:  <span class="main__profile-name">${res.data.public_repos}</span>`;
        urlContainer.innerHTML = `URL: <span class="main__profile-name">${res.data.url}</span>`;

        
};

searchButton.addEventListener("click", () => {
    showData();
})