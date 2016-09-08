![logo100x100](https://cloud.githubusercontent.com/assets/13153982/18029199/7d636f24-6c46-11e6-8e1f-c249b9c950c9.png)

[![Stories in Ready](https://badge.waffle.io/gsmatth/shooters-log-fe.png?label=ready&title=Ready)](http://waffle.io/gsmatth/shooters-log-fe)

[![Throughput Graph](https://graphs.waffle.io/gsmatth/shooters-log-fe/throughput.svg)](https://waffle.io/gsmatth/shooters-log-fe/metrics/throughput)


#Shooter-Log-FrontEnd Web Application


#Overview
* This front end provides a client web application that allows an authenticated user to view, create, and store scorecards (shown below) for competitive shooting matches.  To support this functionality, this app consumes the services provided by [shooter-log RESTful API](https://github.com/gsmatth/shooters-log).  The primary technologies leveraged in this app include AngularJS, BootStrap, HTLM5, and CSS3


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
    - create and view round count books
    - create, update, delete, and view rifle profiles
    - create, update, delete, and view load data book

  ****

  #Way to contribute
  * Reporting Bugs: Open up an issue through this git repository and select "bug" as the label
  * Recommending Enhancements: Open up an issue through this git repository and select "enhancement" as the label  
  * Issues are reviewed weekly


****

  #Application Structure  
  *This angularJS based application is structured around views that utilize services and components.  

  * signup:  
      * A user must first create an account with a username, password, first name, and last name to use this application.  The creation of that account is occurs on the signup page.

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
