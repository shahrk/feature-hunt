# Feature Hunt
## Project 1 vs Project 2

After analyzing the project from the previous group, we recognized that they had mainly focused on implementing a frontend but neglected the backend. 
Our focus was primarily on adding to the backend to enable the frontend to be more dynamic, identifying and fixing bugs, and improving documentation. 

We also addressed the feedback the previous group received after grading.

## New Additions

### Sign Up and Login

We added sign up and login functionalities (SignUp.js, Login.js) so that each user would be able to have their own accounts. This is to lay the foundations for [future improvements](https://github.com/CSC510-Group-25/feature-hunt/issues/132) involving users and project management.

This task included adding new user data into MongoDB, creating backend services/APIs, and designing new React forms.

### User Projects and Features

Now that users are able to access the system, we were able to add functionality to associate users with specific projects and features.
On the frontend, this allows users to only see the projects they own on their dashboards, add new projects, and give updates through tags.  
#### User Dashboard
<img width="1193" alt="Screen Shot 2021-11-03 at 8 40 49 PM" src="https://user-images.githubusercontent.com/78971563/140238733-21b907a6-9085-46ab-a232-caef8d397e31.png">

#### Add a New Project

ADD A SCREENSHOT HERE

#### Add New Tags
<img width="767" alt="Screen Shot 2021-11-03 at 8 41 22 PM" src="https://user-images.githubusercontent.com/78971563/140238752-a6ebe8ab-942f-462e-94b6-5d3d4064115e.png">


### Deployment
The third feature we looked into was deploying the project on netlify. 
By deploying we are essentially delivering the application from the developer to the users and can gather feedback to see what we can improve. 

Here's where it is deployed - [Feature-Hunt](https://feature-hunt-25.netlify.app/)

### Dedicated Feedback page

Originally, the Feedback button in the header linked back to a non-existent page, but still displayed comments properly. In order to reduce confusion, we added a dedicated Feedback page (Feedback.js) for comments.

This page is intended for users to leave comments and suggestions for the website's development.

### Update to project submission

Next, we changed how new projects are added.

Originally when the user clicked on the submit project tab, it would send the user to a google form to fill out, which would then be sent to the developers. This was changed so that developers will not be forced to review and manually add projects to the database, and to make future development easier.

Although this feature is not yet fully functional, it has both [backend support](https://github.com/CSC510-Group-25/feature-hunt/blob/main/backend/product_controller.py) and [front end support](https://github.com/CSC510-Group-25/feature-hunt/blob/main/src/Components/ProjectForm.js). 

### Workflows

Throughout the course of development, we found that we would very quickly run out of Travis build credits with all the changes we were making. To mitigate this and save credits for future projects, we added workflows using GitHub actions. 

New workflows:
- PyLint; also constructs a report artifact
- Tests
- Build
- Coveralls

### Other improvements

- We added lots of comments!
- We improved PyLint scores!
- We added lots of test cases! There's a test suite for every major component.
- Code coverage went from 33% to 25% after the login, signup, dashboard, and feedback components were added. Coverage is now **72%!** (See [this build](https://coveralls.io/builds/44002679))

### Feedback Corrections

Here we address the feedback the previous group received after grading.

CONTRIBUTING.md - We added more to [CONTRIBUTING.md](https://github.com/CSC510-Group-25/feature-hunt/blob/main/CONTRIBUTING.md)

Issues are being closed - ![GitHub closed issues](https://img.shields.io/github/issues-closed/CSC510-Group-25/feature-hunt?color=red)

Use of style checkers - On top of Prettier, we added PyLint, Codacy

other automated analysis tools - Dependabot, Snyk, CodeQL, Coveralls, Codacy

test cases exist: test cases are more than 30% of the code base - We improved coverage from 33% to 72%

test cases: a large proportion of the issues related to handling failing cases. - This drove a lot of the development.
[here are some issues tagged with both TEST and BUG](https://github.com/CSC510-Group-25/feature-hunt/issues?q=is%3Aissue+label%3Abug+label%3Atest)

