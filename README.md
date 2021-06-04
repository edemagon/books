## Introduction

The main project is a very basic Angular application. We will verify the following:

* Your knowledge of Angular (components, directives, pipes, services)
* Your knowledge of rxjs
* Your knowledge of CSS (good naming convention, where BEM is preferred)
* Your knowledge of responsive development
* Your ability to consume data from an external source
* Your ability to apply state management

## Pre-reqs

* Install the Angular CLI (latest stable version)
* Use the latest stable version of Nodejs

## Instructions

1. Create a **private** repository on Github (GIT repo)
2. Create a new branch from your master branch
3. Impress us with your creativity and technical ability in building a beautiful and optmizied Angular application! Don't be afraid to import additional dependencies if you think you need them.
3. At the end of your work you should push the code into your branch
4. Create a Pull Request from your branch to the master branch
5. Add the "VGRAJED" and "bruno-araujo-sap" users as a collaborators for your private git repo
6. The final step is to send an email back to the recruiter (dominique.pirolo@sap.com) them that you finished the test including the Pull Request's URL where the code changes can be found

## Business Requirements

* The books should be displayed in a list or grid format
* Each book should display its image, title, author(s), genre and number of votes
* The list should be sortable by title and number of votes, ascending and descending
* The UI/UX should be consistent and coherent
* Use sample data from `src/assets/books.json`

## Aplication description 
Components: 
- book-view contains the list of books, the page title
- book is rendering an item of the list with book details
- book navigates to single-book on click, single-book shows the details of a book.
- header contains the navigation bar
- foooter is a basic footer
- random component is created with the only purpose of having a second view in the application
- four-o-four is a basic 404 page

navigation between components is done using the routing module (single page application).

The book services loads the books from the assets and creates a subject for delivering the books to the components
