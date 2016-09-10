![logo100x100](https://cloud.githubusercontent.com/assets/13153982/18029199/7d636f24-6c46-11e6-8e1f-c249b9c950c9.png)

[![Stories in Ready](https://badge.waffle.io/gsmatth/shooters-log-fe.png?label=ready&title=Ready)](http://waffle.io/gsmatth/shooters-log-fe)

[![Throughput Graph](https://graphs.waffle.io/gsmatth/shooters-log-fe/throughput.svg)](https://waffle.io/gsmatth/shooters-log-fe/metrics/throughput)


#Shooter-Log-FE Web Application

*****
#Overview

* This front end provides a client web application that allows an authenticated user to view, create, and store scorecards (shown below) for competitive shooting matches.  To support this functionality, this app consumes the services provided by [shooter-log RESTful API](https://github.com/gsmatth/shooters-log).  The primary technologies leveraged in this app include AngularJS, BootStrap, HTLM5, and CSS3.  This application is designed for the entry and viewing of large data sets and as such is targeted for use on a laptop or desktop with adequate sized viewport.  For entry and viewing of smaller data sets, like a single scorecard, we recommend the use of the IOS tablet focused application "someName".  

  ![scorecard750x580](https://cloud.githubusercontent.com/assets/13153982/16515546/69d733b0-3f27-11e6-9653-1148ff7f485a.png)

* The primary purpose of the front-end site is to store and serve out the web application on demand.  Once the user's browser has downloaded the files provided by this server, the angularJS application in the browser behaves as a client side application and interacts with the shooters-log back-end RESTful API to perform its intended function. The combination of the back-end and the front-end represents a full MEAN stack (Mongo Express Angular Node) solution.

  ![shooters-log-fe-v2-525x584](https://cloud.githubusercontent.com/assets/13153982/18381236/26ed9694-7630-11e6-999b-d77580a5827e.png)  


  ****
  #Current Version (0.1.0)
  * The current version of this program is designed to create, save, and display  a scorecard for a National Rifle Association (NRA) Mid-Range High Power rifle match.  


  ****
  #Future Releases
  * V 1.0.0 scheduled for 12/18/2016 will include the following enhancements:  
    - statically display plotted targets  
    - animate display of plotted targets
    - display line graph of individuals aggregate scores
    - enter shot plots with mouse clicks  
    - create, update, delete and view round count books
    - create, update, delete, and view rifle profiles
    - create, update, delete, and view load data book
    - additional, user visible feedback/warnings/errors

  ****

  #Ways to contribute
  * Reporting Bugs: Open up an issue through this git repository and select "bug" as the label
  * Recommending Enhancements: Open up an issue through this git repository and select "enhancement" as the label  
  * Issues are reviewed weekly


  ****

  #Set up of Local Development Environment
  * You must download, install, configure, and run both a front end application and the supporting backend infrastructure for the local development environment.  
  * **Prerequisite**:  mongo database must be installed prior to the installation of the backend on your local environment.  This README does not cover the installation of mongo or the use of the mongo client. For guidance on installing and using these two items, view the following:
    * https://docs.mongodb.com/manual/
    * https://docs.mongodb.com/manual/mongo/  
  * ### Back-End:   
    * Install:  
      * navigate to the [shooter-log git repo](https://github.com/gsmatth/shooters-log)  
      * in the upper right corner of page, click on "clone or download" button to view pull down  

        ![screen shot 2016-09-08 at 2 21 47 pm](https://cloud.githubusercontent.com/assets/13153982/18367374/a9397ef8-75cf-11e6-98f6-e28c4ba44f28.png)  
      * click on the clip-board icon to save the repo link.  
      * In your terminal, navigate to where you want the project folder to be on you local system.  
      * type in "git clone", enter a space, and then paste the link you copied into the terminal so it is appended to the end of the current line.  The full line should look like this: _git clone https://github.com/gsmatth/shooters-log.git_  
      * press the enter key and the shooter-log repo will be cloned to your local environment.  
      * cd to the newly created directory  
      * type in  _npm init_ and press enter  
      * once complete, type _npm install_ so that all the npm modules required for the backend are installed.  
    * Configure and Run:  
      * in your terminal, navigate to the root of the shooters-log application  
      * type in the following:  *mongod --dbpath ./db*  
      * open second terminal window and ensure you have navigated to the shooters-log root directory.  Type in the following:  *mongo*   
      * open third terminal window and ensure you have navigated to the shooters-log root directory.  
      * type in the following: _APP_SECRET="typeSomeStringIn" DEBUG=shooter* node server.js  
      * the output to the screen should be something similar to this:  
        * shooter:server listen +0ms  
        * shooter:server express app up on port:  +1ms 3000  


  * ###Front-End:   
    * Install:  
      * navigate to https://github.com/gsmatth/shooters-log-fe    
      * clone this repo by clicking on the "clone or download" button just like you did when setting up the back-end.  Click the clipboard icon to save the link.
      * In your terminal, navigate to where you want the project folder to be on you local system.
      * type in "git clone", enter a space, and then paste the link you copied into the terminal so it is appended to the end of the current line.  The full line should look like this:
        * git clone https://github.com/gsmatth/shooters-log-fe
      * press the enter key and the shooter-log-fe repo will be cloned to your local environment.
      * cd to the newly created directory
      * type "npm init" and press enter
      * once complete, type "npm install" so that all the npm modules required for the backend are installed.
    * Configure and Run:
      * make sure the you have followed the steps to "Configure and Run" in the Back-End section above before you start this process.  
      * In your terminal, navigate to the root directory of your front-end repo.
      * type in *npm run watch*   
        * this launches webpack and completes your build. After the build is complete you will see the following:  
         ```webpack: bundle is now VALID.```  
      * open another command line window and navigate to the root directory of the shooter-log-fe and type in *node server.js* .  The terminal output should be:  ```server up on 8080```    
      * Launch your browser and type in the following url: ```http://localhost:8080/#/signup```  
      * The sign-in page will open.  Create a new account by filling in the form and hitting the submit button.     

  ****

  #Deployment
  * This application is currently deployed in a two tiered, single pipeline heroku environment.  The two applications are staging and production.  
    ![screen shot 2016-09-08 at 1 59 39 pm](https://cloud.githubusercontent.com/assets/13153982/18366731/bac435e4-75cc-11e6-8a4a-8a005958f514.png)

    ![screen shot 2016-09-08 at 1 59 27 pm](https://cloud.githubusercontent.com/assets/13153982/18366765/dafa6d1a-75cc-11e6-856c-239eab4cc52c.png)
  * The automatic deployment of updates into heroku utilizes the integration of our git repo/branches with our heroku applications.  When a pull request is merged in the git staging branch, it is automatically deployed to the heroku **staging** application and a build occurs on heroku.   At the end of each day, the project manager tests staging.  If tests are successful, the project manager creates a pull request from staging to merge staging updates into master branch.  
    ![screen shot 2016-09-08 at 2 12 55 pm](https://cloud.githubusercontent.com/assets/13153982/18367137/82ae4300-75ce-11e6-877e-c6f56be9b8aa.png)
  * The merging of staging and master triggers an automatic update of the heroku **production** branch from the newly updated master branch on git and an application build occurs on the production application on heroku.



  *****  

  #Application Structure  

  * This angularJS based application is structured around views that utilize services and components.  

  * ### signup:  
      * A user must first create an account with a username, password, first name, and last name to use this application.  The creation of that account occurs on the signup page.

        ![signin200x331](https://cloud.githubusercontent.com/assets/13153982/18363587/945bcc12-75bf-11e6-97ea-5511bcb2f258.png)  

      * explain the view
      * explain the services used
      * explain the components used
      * make sure to cover validation of data  
      * explain any calls or dependencies on APIs
      * cover storage of token to local storage  

  * ### sign-in  
  * ### home  
  * ### create-scorecard    
      * This page is used to create and save a new scorecard to a database by making a series of POST request to the [shooter-log RESTful API](https://github.com/gsmatth/shooters-log). You will not be able to view your scorecards on the homepage unless you have entered some scorecards from this page.

        ![scorecard-form-700x506](https://cloud.githubusercontent.com/assets/13153982/18380758/c54d7122-762d-11e6-8f95-9c6daeb0f1db.png)  

      * The "view" of this form represents the current state of the scorecard-form.html file.  This angular template is a complex form. The top section of the form is a bootstrap format which contains input elements for administrative data used to create one competition and three matches in the backend database.  The remaining 60 input elements in the rows labeled "Score", are used to create 60 individual shots in the backend database.  To aid in data visualization and analysis, each shot that is created in the database references the match it belongs to.  Each match created in the database references the competition it belongs to.
      * Data input validation is handled using built in angular directives and functionality.  The *Create Scorecard* button remains disabled until all required data for a scorecard is entered and validated.  Each of the 60 inputs for a shot are checked to ensure that they are valid entries using the angular  **ng-pattern** directive on each element.  If the scores do not pass validation, then background-color of the input box is set to red as shown in two input fields in the diagram above. The syntax used for the score input validation is:
        * ng-pattern="createScorecardFormCtrl.scoreInputValidation"   
        *  the regex value of the property _scoreInputValidation_ is:   /^([MmxX]|[056789]|[1][0])$/    
      * To provide immediate feedback to the user as they update each score, we leverage the **ng-blur** directive on each score input element. When a user enter s a score and then clicks on the next score input box, ng-blur will call  a function that does the following:  
        *  converts any "X" or "M" entered into their corresponding number values (10 and 0)  
        * converts all score values from strings to numbers using *Array.map(Number)*  
        * sums the number in each match array using *Array.reduce((acc, cur) => acc + cur, 0)*    
      * Using Angular **data binding** with the arrays updated in the previous step, provides real time updates to the "Total" in each match as well as the Match Scores and X-Counts for the matches and the competition at the bottom of the form.  
      * When a user clicks the *Create Scorecard* button, the *CreateComp()* is called and makes 64 POST requests to the backend shooter-log RESTful API. Those requests create the following items in the mongo database: (1)competition, (3) matches, (60) shots. The *CreateComp()* is a good example of how to chain a series of promises.  We chained these because each function called in the overall function is dependent on data returned from the previous promise:   
```javascript
          this.createComp = function(){  
            scorecardService.createCompetition(vm.competition)  
            .then((competition) => {  
              let competitionId = competition._id;  
              vm.match.competitionId = competitionId;  
              scorecardService.createMatches(vm.match, competitionId)  
              .then((matches) => {   
                scorecardService.createMatchShots(competitionId, matches,   vm.allMatchScores, vm.shot)  
                .then(() => {  

```  


  *  When a scorecard is created successfully on the backend mongo database, the users view will change to the homepage and the newly created scorecard will be displayed.  

  * ### Services  
      * auth-service:  
      * scorecard-service  
  * ### Components  
      * signup:
      * logo:  
      * menu:  
      * nav:  
      * scorecard:     


 *****
#Testing Framework

* scope: explain what we are testing (focus area) and show an example test  

  * jasmine (explain high level)  
    * jasmine-core  

  * karma (explain high level)    
    * karma  
    * karma-jasmine  
    * karma-webpack  
    * karma-chrome-launcher
    * karma-babel-preprocessor
    * karma-phantomjs-launcher  

  * angular-mock  (explain high level)

  * eslint   (explain high level)
