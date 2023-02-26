function myFunction() {
  
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
function getClickUpData() {
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