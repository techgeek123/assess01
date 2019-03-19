/*
*     Bookmarker enables handling various weblinks
*/
exports default class Bookmarker {

  // Creates an instance of Bookmarker which is connected to a json file that stores the links in a structured format. 
  // If given file is not present, it creates a new file automatically
  // Throws an error if filename is invalid
  constructor(filename){}

  // Stores a url in the json file against a unique tag
  // Throws an error if the tag is already present
  // Also throws different errors if the url or tag is not valid
  addBookmark(url, tag){}

  // Deletes the bookmark from the json file
  // throws an error if no link is present with the given tag
  removeBookmark(tag){}

  // Returns a list of latest bookmarks sorted by the alphabetical order of their tags
  // Takes a limit parameter as an argument which decides the maximum no of links to search for
  // If limit < 0, returns all of the bookmarks
  // If no parameter is passed, default limit is set to 10
  listBookmarks(limit=10){}

}
