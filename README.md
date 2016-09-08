![logo100x100](https://cloud.githubusercontent.com/assets/13153982/18029199/7d636f24-6c46-11e6-8e1f-c249b9c950c9.png)

[![Stories in Ready](https://badge.waffle.io/gsmatth/shooters-log-fe.png?label=ready&title=Ready)](http://waffle.io/gsmatth/shooters-log-fe)

[![Throughput Graph](https://graphs.waffle.io/gsmatth/shooters-log-fe/throughput.svg)](https://waffle.io/gsmatth/shooters-log-fe/metrics/throughput)


#Shooter-Log-FrontEnd Web Application

*****
#Overview

* This front end provides a client web application that allows an authenticated user to view, create, and store scorecards (shown below) for competitive shooting matches.  To support this functionality, this app consumes the services provided by [shooter-log RESTful API](https://github.com/gsmatth/shooters-log).  The primary technologies leveraged in this app include AngularJS, BootStrap, HTLM5, and CSS3.  This application is designed for the entry and viewing of large data sets and as such is targeted for use on a laptop or desktop with adequate sized viewport.  For entry and viewing of smaller data sets, like a single scorecard, we recommend the use of the IOS tablet focused application "someName".


  ![scorecard750x580](https://cloud.githubusercontent.com/assets/13153982/16515546/69d733b0-3f27-11e6-9653-1148ff7f485a.png)


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
  * **Prerequisite**:  mongo database must be installed prior to the installation of the backend on your local environment.  These instructions do not cover the installation of mongo or the use of the mongo client. For guidance on installling and using these two items, view the following:
    * https://docs.mongodb.com/manual/
    * https://docs.mongodb.com/manual/mongo/  
  * Back-End:   
    * Install:  
      * navigate to the [shooter-log git repo](https://github.com/gsmatth/shooters-log)
      * in the upper right corner of page, click on "clone or download" button to view pull down  

        ![screen shot 2016-09-08 at 2 21 47 pm](https://cloud.githubusercontent.com/assets/13153982/18367374/a9397ef8-75cf-11e6-98f6-e28c4ba44f28.png)
      * click on the clip-board icon to save the repo link.
      * In your CLI, navigate to where you want the project folder to be on you local system.
      * type in "git clone", enter a space, and then paste the link you copied into the CLI so it is appended to the end of the current line.  The full line should look like this:
        * git clone https://github.com/gsmatth/shooters-log.git
      * press the enter key and the shooter-log repo will be cloned to your local environment.
      * cd to the newly created directory
      * type "npm init" and press enter
      * once complete, type "npm install" so that all the npm modules required for the backend are installed.
    * Configure and Run:

  * Front-End:

  ****

  #Deployment
  * This application is currently deployed in a two tiered, single pipeline heroko environment.  The two applications are staging and production.  
    ![screen shot 2016-09-08 at 1 59 39 pm](https://cloud.githubusercontent.com/assets/13153982/18366731/bac435e4-75cc-11e6-8a4a-8a005958f514.png)

    ![screen shot 2016-09-08 at 1 59 27 pm](https://cloud.githubusercontent.com/assets/13153982/18366765/dafa6d1a-75cc-11e6-856c-239eab4cc52c.png)
  * The automatic deployment of updates into heroku utilizes the integration of our git repo/branches with our heroku applications.  When a pull request is merged in the git staging branch, it is automatically deployed to the heroku staging application and a build occurs on heroku.   At the end of each day, the project manager tests staging.  If tests are successful, the project manager creates a pull request from staging to merge staging updates into master branch.  
    ![screen shot 2016-09-08 at 2 12 55 pm](https://cloud.githubusercontent.com/assets/13153982/18367137/82ae4300-75ce-11e6-877e-c6f56be9b8aa.png)
  * The merging of staging and master triggers and automatic update of the heroku production branch from the newly updated master branch on git and an application build occurs on the production application on heroku.



*****

  #Application Structure  

  * This angularJS based application is structured around views that utilize services and components.  

  * signup:  
      * A user must first create an account with a username, password, first name, and last name to use this application.  The creation of that account occurs on the signup page.

        ![signin200x331](https://cloud.githubusercontent.com/assets/13153982/18363587/945bcc12-75bf-11e6-97ea-5511bcb2f258.png)  

      * explain the view
      * explain the services used
      * explain the components used
      * make sure to cover validation of data  
      * explain any calls or dependencies on APIs
      * cover storage of token to local storage  

  * signin  
  * home
  * scorecard-form:    
      * This page is used to create a new scorecard and save that scorecard to a database leveraging the [shooter-log RESTful API](https://github.com/gsmatth/shooters-log).  

        ![scorecard-form-600x401](https://cloud.githubusercontent.com/assets/13153982/18364812/9fec2ffe-75c4-11e6-92b1-36facbb4f1c0.png)

      * explain the view    
      * explain the service  
      * explain the component  
      * make sure to cover validation of data       

  * Services  
      * auth-service:  
      * scorecard-service
  * Components  
      * signup:
      * logo:  
      * menu:  
      * nav:  
      * scorecard:     


*****
#Testing Framework

*jasmine  
  * jasmine-core  

*karma    
  * karma  
  * karma-jasmine  
  * karma-webpack  
  * karma-chrome-launcher
  * karma-babel-preprocessor
  * karma-phantomjs-launcher  

*angular-mock  

*eslint  
