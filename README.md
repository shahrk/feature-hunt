<img width="657" alt="Feature Hunt" src="https://user-images.githubusercontent.com/11090612/135201949-a1f1de9d-f80a-4adf-a7ac-886c77c4c226.png">

[![Build Status](https://app.travis-ci.com/shahrk/feature-hunt.svg?branch=main)](https://app.travis-ci.com/shahrk/feature-hunt)
[![DOI](https://zenodo.org/badge/400052443.svg)](https://zenodo.org/badge/latestdoi/400052443)
[![made-with-javascript](https://img.shields.io/badge/Made%20with-JavaScript-blue)](https://www.javascript.com)
[![GitHub license](https://img.shields.io/github/license/shahrk/feature-hunt)](https://github.com/shahrk/feature-hunt/blob/main/LICENSE)
[![GitHub issues](https://img.shields.io/github/issues/shahrk/feature-hunt)](https://github.com/shahrk/feature-hunt/issues)
[![code style: prettier](https://img.shields.io/badge/code_style-prettier-ff69b4.svg?style=flat-square)](https://github.com/prettier/prettier)

## INTRODUCTION ⚡️

Stop letting ideas slip through the cracks. Collect, analyze, and organize feedback and feature requests in your product's feedback board to make better product decisions.  
  
Feature Hunt is a platform that allows you to do just that. Users can share/vote/discuss feature requests and product owners can organize them to make better product decisions 🎯.

### Watch this short video to know more:

https://user-images.githubusercontent.com/26930183/134577498-bb9e7235-27b4-4855-a850-bea899d9e626.mp4



The following technologies were used for the development of this project:  

<p align="left">
  <a href="https://www.reactjs.org" target="_blank">
    <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/react/react-original.svg" alt="react" width="30" height="30"/>
  </a>
  <a href="https://www.javascript.com" target="_blank"> 
    <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/javascript/javascript-plain.svg" alt="js" width="30" height="30"/>
  </a> 
  <a href="https://www.mongodb.com" target="_blank"> 
    <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/mongodb/mongodb-original.svg" alt="mongo" width="30" height="30"/>
  </a>
  <a href="https://developer.mozilla.org/en-US/docs/Glossary/HTML" target="_blank"> 
    <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/html5/html5-plain.svg" alt="js" width="30" height="30"/>
  </a>
  <a href="https://www.python.org" target="_blank"> 
    <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/python/python-plain.svg" alt="python" width="30" height="30"/>
  </a>
  <a href="https://developer.mozilla.org/en-US/docs/Glossary/CSS" target="_blank"> 
    <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/css3/css3-plain.svg" alt="css" width="30" height="30"/>
  </a>
</p>  

React (P.S. we use hooks)  
JavaScript  
Python3  
Flask  
MongoDB  
HTML  
CSS  

Although we haven't used any CSS library for the FrontEnd, the users can easily merge it with any CSS library of their choice (e.g. Tailwind CSS, react-bootstrap).

## Preview
The **Home** Page - It has a list of different products for which you can provide feature requests
<img width="1200" alt="Screen Shot 2021-09-19 at 5 24 43 PM" src="https://user-images.githubusercontent.com/11090612/133943516-d55244b5-9f5e-4166-a18e-af35cf020146.png">  

The **Product** Page - It has a list of feature requests added by users
<img width="1148" alt="Screen Shot 2021-09-19 at 5 25 04 PM" src="https://user-images.githubusercontent.com/11090612/133944169-5529ea32-40c8-4786-b198-6e5c1eecd64f.png">  

The **Comment** Section - Each product page has a comment section (Powered by [utteranc.es](https://utteranc.es))
<img width="830" alt="Screen Shot 2021-09-19 at 5 25 15 PM" src="https://user-images.githubusercontent.com/11090612/133943532-1a834e0e-2ea5-477f-a09f-122b05f7de7a.png">

## Add Your Project 

> Want to gather feedback and maintain your project's roadmap more efficiently?  

You can add your project to Feature Hunt by filling [this](http://tiny.cc/new-project) form, our team will review the response and add it to our database after doing our due diligence.

## Getting Started with Development
There are two ways to install and develop for featurehunt 

Method 1) Using Docker

Method 2) Using Local machine

## Installation With Docker.

#### STEP 1)  Follow the steps to install Docker for your OS
 https://docs.docker.com/get-docker

#### STEP 2) Git clone the Repository using 

`git clone https://github.com/shahrk/feature-hunt.git`


#### STEP 3) Run the following Commands

`cd feature-hunt`

`docker-compose up`


This will run two docker containers. The frontend will run on port 3000 and the backend will run on port 5000

## Installation in Local Machine without Docker.

### First Time Setup

#### STEP 1) Git clone the Repository using 

`git clone https://github.com/shahrk/feature-hunt.git`

#### STEP 2) Run the following Commands

`cd feature-hunt`

>Optional: In the project directory run `git config --local core.hooksPath hooks` to make sure you have access to the Git Hooks.
Run the following commands in order:

#### STEP 3) `npm install`

Installs the dependencies for the React App

#### STEP 4) `pip install -r api/requirements.txt`

Installs the requirements for the Flask API

#### STEP 5) `yarn start`

Runs the frontend React app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

#### STEP 6) `yarn start-api`

Runs the backend flask API in development mode.\
The API runs on [http://localhost:5000](http://localhost:5000).

Requests made to [http://localhost:3000](http://localhost:3000) that don't exist on the react server are automatically forwarded to this API


## Connecting with a Database

> We use Mongo Cloud Atlas for our project as we find it very convenient. You may choose to use a local mongodb instance or run a docker container

#### STEP 1) Make an account on Mongo Cloud Atlas 
<img width="1148" alt="Screen Shot 2021-09-19 at 5 25 04 PM" src="./public/Mongo.png">


#### STEP 2) Make a Database and grab the credentials by clicking on connect
<img width="1148" alt="Screen Shot 2021-09-19 at 5 25 04 PM" src="./public/Db.png">  

#### STEP 3) Make the corresponding changes in the config.yaml file located in api folder

<img width="1148" alt="Screen Shot 2021-09-19 at 5 25 04 PM" src="./public/DbYaml.png"> 

> You can also connect to the database from your shell using [mongosh](https://docs.mongodb.com/mongodb-shell/)

## Other Available Scripts

### `yarn test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `yarn build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

## Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)


## Contributors 🎯

<table>
  <tr>
    <td align="center"><a href="https://github.com/shahrk/"><img src="https://avatars.githubusercontent.com/u/11090612?v=4" width="100px;" alt=""/><br /><sub><b>Raj Shah</b></sub></a></td>
    <td align="center"><a href="https://github.com/Nirav1929/"><img src="https://avatars.githubusercontent.com/u/11133468?v=4" width="100px;" alt=""/><br /><sub><b>Nirav Patel</b></sub></a><br /></td>
    <td align="center"><a href="https://github.com/Parth59/"><img src="https://avatars.githubusercontent.com/u/22288099?v=4" width="100px;" alt=""/><br /><sub><b>Parth Kanakiya</b></sub></a><br /></td>
    <td align="center"><a href="https://github.com/mithildave/"><img src="https://avatars.githubusercontent.com/u/26930183?v=4" width="100px;" alt=""/><br /><sub><b>Mithil Dave</b></sub></a><br /></td>
    <td align="center"><a href="https://www.github.com/BhargavJethwa"><img src="https://avatars.githubusercontent.com/u/70560970?v=4" width="100px;" alt=""/><br /><sub><b>Bhargav Jethwa</b></sub></a><br /></td>
  </tr>
</table>
