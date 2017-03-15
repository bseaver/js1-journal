# JS Lab

#### Epicodus JS Week 1 Lab, 3/13/2017

#### By Zach Swanson, Benjamin T. Seaver

## Description

Create a journaling website where a user can write entries including at least a title and body.

Create Entry objects that include a method to return the number of words in the entry.

Then, add a separate method (or methods) to return the number of vowels and consonants in each entry.

Call each of these methods from your front-end file to display their return values.

Finally, add a method called getTeaser to return the first sentence of the entry.

If the sentence is over 8 words, only display those first 8 words. Be sure to call this method from your front-end file to display the results as well, whenever a new journal entry is created.


## Setup Requirements
node.js (for npm)
npm
gulp
bower
ruby (for gem install sass)
sass


## Installation Instructions
* Clone project.

Acquire API key from openweathermap.org.

Create .env file at root of project folder with the single line:

  exports.apiKey = "your-openweathermap.org-API-key-here";

then run:

npm install

bower install

gem install sass

gulp dev (gulp prod to uglify/minify)

gulp serve


npm init

npm install gulp --save-dev

npm install browserify --save-dev

npm install gulp-concat --save-dev

npm install gulp-uglify --save-dev

npm install gulp-util --save-dev

npm install del --save-dev

npm install jshint --save-dev

npm install vinyl-source-stream --save-dev

npm install browser-sync --save-dev

bower install jquery --save

bower install bootstrap --save

bower install moment --save

gulp bower

npm install bower-files --save-dev

npm install gulp-jshint --save-dev

gulp jsBrowserify

gulp serve

gulp jshint

## Remove build folder from git project (after adding it to .gitignore)

git filter-branch --tree-filter 'rm -rf build' --prune-empty HEAD

git for-each-ref --format="%(refname)" refs/original/ | xargs -n 1 git update-ref -d

(edited README.md)

git add README.md

git pair-commit -m "remove build from project"

git gc

git push origin master --force

gem install sass

npm install gulp-sass gulp-sourcemaps --save-dev


## Known Bugs
* No known bugs

## Support and contact details
* No support

## Technologies Used
* Git

## Copyright (c)
* 2017 Zach Swanson, Benjamin T. Seaver

## License
* MIT


* End specifications
