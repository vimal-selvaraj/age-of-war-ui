Folder structure

-->public
    -->index.html
    -->favicon.png
-->src
    -->assets
        -->style.css
    -->components
        -->Card.js
        -->Card.css
    -->Pages
        -->Battallion.css
        -->Batallion.js
        -->Mainpage.js
    -->utils
        -->CustomInput.js
        -->input.css
        -->Platoon_map.js
-->App.js
-->index.js
-->.gitignore
-->package.json
-->README.md

## Requirements
Node - v18.20.8
Npm - From nodejs

## Installation & setup

1.Clone the repository:
    git clone <repo-url>
    cd age-of-war-ui

2.Install dependencies
    npm install

3.setup .env
    REACT_APP_BACKEND_BASE_URL=http://localhost:5000

4.Run in development mode
    npm start

5.Open in browser
    http://localhost:3000

## Backend integration

1. Run backend repo (Refer README.md file of "age-of-war-service" repository for setup)
    Make sure baseurl provided in .env file (REACT_APP_API_BASE_URL) matches with port of server;

2. Sample request body
{
  "myArmyStr": "Spearmen#10;Militia#30;FootArcher#20;LightCavalry#1000;HeavyCavalry#120",
  "opponentArmyStr": "Militia#10;Spearmen#10;FootArcher#1000;LightCavalry#120;CavalryArcher#100",
  "firstOccurenceOnly": false,
  "advantageMap": {}
}
