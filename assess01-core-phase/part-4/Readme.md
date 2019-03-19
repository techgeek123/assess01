
## Bookmarker App 
Congratulations! You're now a software developer at Google! (no, really!). Your manager wants to build a program to store and display links. You suggest to your manager that we should use TDD to build this app. He quite likes this idea and wants you to write all the test cases  and the test for the app. 

Note: You DONT need to write the code for the app, just write the tests.

### Release 0 : Features and Working of the App 
- The application allows us to create, list and delete bookmarks.
- Each bookmark is stored against a tag.
- Workflow
  - A bookmarker module takes care of the bookmark handling task.
  - Other programs can import and use this module.
- Write a program that store the links that you supply to it
- Eventually create an interface that displays all the bookmarks
Note: The comments in the code further define the functionality of the methods. Make sure your tests cover all the functionality. 

### Release 1 : [Bookmarker.js](./bookmarker.js)
The file has all the methods required to build the app. The functionality of each method is described in the comments.

### Release 2 : Use cases 
- Think of the app workflow and what all you would want to test. 
- Think of [edge cases](https://en.wikipedia.org/wiki/Edge_case). How will you write tests for theses?
- Think of the test frameworks available for testing on node.
- Write test cases for testing the module using your favourite test framework.
