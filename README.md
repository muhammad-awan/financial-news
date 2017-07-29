# Financial-News
----

* ##### Live site: https://financial-news.now.sh

Financial-News is a community based financial news sharing site built using node.js.

### Target Market
----
* General news  readers - People who might be interested in just the finance section

* Financial news enthusiasts

* People working in the finance, stock exchange, banking sectors

### User Stories
----
* As a news reader, I want a place where I could catch up on all the financial and economic news, so I don't have to visit a bunch of different sources and turn a news reading experience into a research frenzy.

* As someone who works in the finance sector, I want something that's not as biased, opinionated or subjective as a singular source or a mainstream news reporter, so I know a story from all the sides.

* As a finance and economics enthusiast, I'd like to receive every bit of trending finance-related news in one place, so I know I'm up to date on all the latest developments and issues.

* As a finance buff, I want to be able to share financial news somewhere I know it will receive wide exposure, so I can get the news that I think really matters across to more people.

* As someone who needs to know every single latest financial news that crawls its way onto the internet, I want the articles to show up chronologically, so I can sift through all that information and decide for myself what's important and whats not.

* As someone who's on the go every waking second, I want the gist of the current financial news listed as a bunch of trending articles, so I can go through them quickly and be fairly up to date on whats going on in the finance world.

* As someone who wants curated articles, and that too by the whole community instead of an editor-in-chief, I want a system of voting to decide which finance articles deserve to make it and which don't, so I know that the articles I'm reading have been substantiated.

### Entity Relationship Diagram
----
![alt text](https://raw.githubusercontent.com/muhammad-awan/financial-news/master/ERD_Commissions_Galore.jpg)


### Local Set-up
----

To get this app running on your localhost, clone repository and run the following commands in your terminal/ cmd to get all the node modules:

```sh
$ cd front
$ yarn 
$ cd ..
$ cd back
$ yarn
```
To add the packages that were used in this project, refer to the package.json files in both the 'front' and 'back' folders and add them using the following command:
```sh
$ cd front
$ yarn add [package] 
$ cd ..
$ cd back
$ yarn add [package] 
```
Open seperate terminal windows to run localhost servers for each of the 'back' and 'front' folder while you're in those respective directories.

##### Terminal Instance 1:
----
```sh
$ cd front
$ yarn start
```
##### Terminal Instance 2:
----

```sh
$ cd back
$ yarn dev
```


### Todos
----

 - Implement chat functionality/ messaging system
 - Implement payments system

### License
----

MIT
