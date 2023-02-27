function testFunction() {
  getClickUpSpaces(7513571);
}

//Token放在 Google Drive
function getClickUpToken() {
  let access_token = DriveApp.getFoldersByName("config").next()
      .getFilesByName("clickup_access_token.txt").next()
      .getBlob()
      .getDataAsString();;
  return access_token
}


//取得 team資料
function getClickUpTeams() {
   var access_token = getClickUpToken();
   var headers = {"Authorization": " " + access_token};
   var options = {
     "method": "GET",
     "headers": headers,
     "muteHttpExceptions": true
   };
   var response = UrlFetchApp.fetch("https://api.clickup.com/api/v2/team", options);
   var data = response.getContentText();
   Logger.log(data);
}



function getClickUpSpaces(team_id) {
   var access_token = getClickUpToken();
   var headers = {"Authorization": " " + access_token};
   var options = {
     "method": "GET",
     "headers": headers,
     "muteHttpExceptions": true
   };
   var response = UrlFetchApp.fetch("https://api.clickup.com/api/v2/team/"+team_id+"/space", options);
   var data = response.getContentText();
   Logger.log(data);
}


function getClickUpFolders(space_id) {
   var access_token = getClickUpToken();
   var headers = {"Authorization": " " + access_token};
   var options = {
     "method": "GET",
     "headers": headers,
     "muteHttpExceptions": true
   };
   var response = UrlFetchApp.fetch("https://api.clickup.com/api/v2/space/"+space_id+"/folder", options);
   var data = response.getContentText();
   Logger.log(data);
}

function getClickUpLists(folder_id) {
   var access_token = getClickUpToken();
   var headers = {"Authorization": " " + access_token};
   var options = {
     "method": "GET",
     "headers": headers,
     "muteHttpExceptions": true
   };
   var response = UrlFetchApp.fetch("https://api.clickup.com/api/v2/folder/"+folder_id+"/list", options);
   var data = response.getContentText();
   Logger.log(data);
}

function getClickUpTasks(list_id) {
   var access_token = getClickUpToken();
   var headers = {"Authorization": " " + access_token};
   var options = {
     "method": "GET",
     "headers": headers,
     "muteHttpExceptions": true
   };
   var response = UrlFetchApp.fetch("https://api.clickup.com/api/v2/list/"+list_id+"/task", options);
   var data = response.getContentText();
   Logger.log(data);
}