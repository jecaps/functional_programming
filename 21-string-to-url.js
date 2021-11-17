/*
The last several challenges covered a number of useful array and string methods that follow functional programming principles.
We have also learned about reduce, which is a powerful method used to reduce problems to simpler forms.
From computing averages to sorting, any array operation can be achieved by applying it.
Recall that map() and filter() are special cases of reduce.

Let us combine what we have learned to solve a practical problem.

Many content management sites(CMS) have the titles of a post added to part of the URL for simple bookmarking pursposes.
For example, if you write a Medium post titled Stop Using Reduce, it is likely the URL would have some form of the title string in it (.../stop-using-reduce).
You may have already noticed it on the freeCodeCamp site.
*/

/*
Challenge

Fill in the urlSlug function so it converts a string title and returns the hyphenated version for the URL. 
You can use any of the methods covered in this section, and do not use replace.
Here are the requirements:

The input is a string with strings and title-cased words
The output us a string with the spaces between words replaced by a hyphen(-)
The output should be all lower-cased letters
The output should not have any spaces
*/

function urlSlug(title) {
  // let newArr = title.toLowerCase().split(/\s|\W/);
  // let newUrl = newArr.filter(Boolean).join("-");
  // return newUrl;

  return title.toLowerCase().split(/\s+/).filter(Boolean).join("-");
}

console.log(urlSlug(" Winter Is  Coming"));
