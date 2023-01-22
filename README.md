# tech-blog-challenge

## Description
This challenge was designed to use our knowledge of the Model-View-Controller paradigm to build an application that functions as a tech blog website.

## Installation

For use by a general user, there is no installation needed. The user can just go to the website.

If you want to install the program locally:

This project uses Node.js v.16.18.0

To run the program **for the first time**:
1. Open the command line trerminal
2. Install the packages `npm i`
3. Open MySQL `mysql -u root -p`
4. Run the schema.sql file `source db/schema.sql`
5. Quit out of MySQL `quit`
- To include a sample set of data when running the program, in the command line, enter `npm run seed`
6. Run the program `npm start`
7. Navigate to the localhost webpage

To run the program **after the first time**:
1. Open the command line terminal
2. Run the program `npm start`
3. Navigate to the localhost webpage

## Usage

Upon navigating to the webpage for the tech blog, the user will see the homepage. On the homepage, all of the posts that exist are displayed. The user can click on any of the posts to navigate to the page of the post, where they will see the post and any comments that have been left on the post. On the nav bar, the user will see a "home" button, that will link them back to the homepage, and a "login" button, which will bring them to the login/sign-up page. On the login/sign-up page, the user can either login, if they have an account, or sign-up to create an account. Once the user has logged in or signed up, they will be brought to their dashboard page. The nav bar will now have "my dashboard" and "logout" buttons in place of the "login" button.

When signed in, the user can access their dashboard, where they can create a new post, view the posts they've created, and edit the posts they've created. If the user clicks the "edit" button for one of their posts, they will be brought to a page where they can update the text of the post or delete the post. Additionally, when the user is signed in, and they navigate to any post (theirs or someone else's) they will have the option to add a comment to the post. When the user is idle for a length of time, they will be automatically logged out. Otherwise, they can logout at any time by clicking the "logout" button in the nav bar.

Here are a few screenshots of the webpage: 

![homepage](/screenshots/tech-blog-challenge-home.png)

![dashboard](/screenshots/tech-blog-challenge-dashboard.png)

![post](/screenshots/tech-blog-challenge-post.png)

Here is the link to the webpage: [https://radiant-garden-76522.herokuapp.com/](https://radiant-garden-76522.herokuapp.com/)

## Credits

I followed the examples in the coursework of this class closely

## License

None
