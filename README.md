# maximiliangarmatsch.com
www.maximiliangarmatsch.com is my main portfolio item that also uses my personal frontend-boilerplate. 

### 1. Setup
```
npm install
npm start
```

### 2. Deployment
I use AWS CI/CD for automatic deployment. 
After pushing a branch, AWS automatically creates a preview build including snapshots. 
When a pullrequest is merged to the master branch, AWS automatically deploys to production.
How to set it up?
Just register at AWS and follow their super simple tutorials!

### 2.1 Manual Deployment
```
npm run build
```
creates "/build" folder
make .zip file  (must include hidden files, e.g .htaccess!)
then go to All-Inkl KAS (https://kas.all-inkl.com/) -> FTP -> /maximiliangarmatsch.com -> OPEN FTP
delete all files
-> upload
-> select + check option "Unpack archives after uploading"
-> send


#### Working Tools / Code Quality Tools
- Commitlint: makes sure that commit messages are formatted nicely.
- ESLint: Formats code nicely and shows typos.
- Prettier
- Babel
- ....
