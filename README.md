## Client did not pay?


Add opacity to the body tag and decrease it every day until their site completely fades away. Set a due date and customize the number of days you offer them until the website is fully vanished. 


```javascript
/* change these variables as you wish */
	var due_date = new Date('2017-02-27');
	var days_deadline = 60;
/* stop changing here */
```

## Usage
Just load the `not-paid.js` file in ```<head>```.

### Want to hide it from the client?
1. `git clone` this repo or download the zip.
2. Navigate to the project.
3. Run `npm install` to get [uglify-js](https://www.npmjs.com/package/uglify-js).
4. Change the variables you need to (as shown above) in `not-paid.js`.
5. Run `npm run build` and then load the `not-paid.min.js` file in the `<head>` (though probably give it a different name).

## Author

Inspired from twitter (@riklomas)
Made by Ciprian, Romania
