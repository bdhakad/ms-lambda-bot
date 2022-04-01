
## Developer Portal
### Create a bot and register it with Azure AD at: 
https://dev.teams.microsoft.com/bots

Note and Save the bot password.

### Update the bot endpoint and save
https://dev.botframework.com/bots

Note down the bot Id (Bot handle)

### Create a starter MS Teams App
https://dev.teams.microsoft.com/apps
 and download app package. Modify manifest.json for any additional feature and make sure to add bot section. It require only the bot id we saved in previous steps.

Zip manifest along with other resources
upload the zip to teams client.

once uploaded successfully without any error, you can publish for approval to IT Admin.

### If you are Admin, approve the app after after uploading you teams app package and pulish
https://admin.teams.microsoft.com/policies/manage-apps

Once Approved you will be able to see your app in teams.
