var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var inputValue = document.getElementById("search");
var searchButton = document.querySelector(".searchButton");
var nameContainer = document.querySelector(".main__profile-name");
var unContainer = document.querySelector(".main__profile-username");
var reposeContainer = document.querySelector(".main__profile-repos");
var urlContainer = document.querySelector(".main__profile-url");
var clientid = "Iv1.f4be9b4ec47d5290";
var clientsecret = "5072375649143a9e4e23eb99beb6581498f4c46c";
function showData() {
    return __awaiter(this, void 0, void 0, function () {
        var user, apicall, res, array, jdata, i, str;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    user = inputValue.value;
                    document.getElementById("displayrepo").innerHTML = "";
                    return [4 /*yield*/, fetch("https://api.github.com/users/" + user + "?clientid=" + clientid + "&clientsecret=" + clientsecret)];
                case 1:
                    apicall = _a.sent();
                    return [4 /*yield*/, apicall.json()];
                case 2:
                    res = _a.sent();
                    console.log(res);
                    nameContainer.innerHTML = "Name:  <span class=\"main__profile-name\">" + res.name + "</span>";
                    unContainer.innerHTML = "Username:  <span class=\"main__profile-name\">" + res.login + "</span>";
                    reposeContainer.innerHTML = "Repos:  <span class=\"main__profile-name\">" + res.public_repos + "</span>";
                    urlContainer.innerHTML = "URL: <span class=\"main__profile-name\">" + res.url + "</span>";
                    return [4 /*yield*/, fetch(res.repos_url)];
                case 3:
                    array = _a.sent();
                    return [4 /*yield*/, array.json()];
                case 4:
                    jdata = _a.sent();
                    console.log(jdata);
                    for (i = 0; i < jdata.length; i++) {
                        console.log(jdata[i].full_name);
                        str = "<div class=\"card\">\n                        <div class=\"card-header\">\n                        Repo-" + (i + 1) + "\n                        </div>\n                        <div class=\"card-body\">\n                        <a href=\"" + jdata[i].html_url + "\" target=\"_blank\" class=\"anchor\">" + jdata[i].name + "</a> \n                        </div> \n                        </div>\n                        <br>\n                        <br>";
                        document.getElementById("displayrepo").innerHTML += str;
                    }
                    return [2 /*return*/];
            }
        });
    });
}
searchButton.addEventListener("click", function () {
    showData();
});
