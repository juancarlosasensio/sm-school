# Welcome! 

Hey, Juan Carlos here 👋. It's very nice to meet you!

This repo is part of my application for the Javascript Engineer position at StickerMule.

## About Page Bird
Page Bird helps 40+ small businesses launch, update, and maintain successful marketing websites.

Most of our customers are schools in the US affiliated to Acton Academy, a network of over 230 innovative private schools.

## How Page Bird websites are built (roughly)
The platform we’ve built is a Rails app with several UI’s for customers to review info (like form submissions) and update content of their static websites (like publishing a Blog post or editing an Event). 

The app and its APIs, in combination with two custom-built gems, allow our team to build and maintain application-level features that are instantly made available to all of our customers.

* The first of these gems includes the styled components for the CMS-enabled features (like Blog posts, Events and others), which can be easily overwritten inside each repo when needed. 
* The second gem includes plugins that extend Jekyll’s modules (like the Jekyll::Generator class).
* Both of these are added to the Gemfile of each individual customer repo (one repo per website).

Here’s an example of one of these features at work: 
* A customer can log-in to their Page Bird Platform account, start editing a new blog post and publish it. 
* When this happens, the Rails app triggers a new build of their Jekyll site via a Netlify build hook. 
* During the build process, these custom-built gems get the latest data from the Rails app by making a request to the relevant API endpoint and, in this case, generate a page for * each blog post with this data. 
* When the build is finished, the new blog post is live on the customer’s website. 

## About this project and why I'm proud of it

**Goal**

My main goal with this project is to convert a small part of one of Page Bird’s Jekyll sites into a Next.js project with React components.

**Here's a bit of background about the project:**

* Jekyll relies heavily on Liquid, a template language written in Ruby, to build webpages. Liquid lets us to write logic and re-use the static parts (“partials”) that define the layout of a webpage, while dynamically populating the page with data (usually stored locally in .yml files).

* Converting the Jekyll site's HTML + Liquid pages and partials into React components means we can not only continue encapsulating view code and using dynamic data, but also manage state and combine these stateful components to create interactive UIs more easily and efficiently.

**How I approached it**

* For this project, I followed the Next.js Docs and [Tutorial](https://nextjs.org/learn/basics/create-nextjs-app?utm_source=next-site&utm_medium=nav-cta&utm_campaign=next-website) to create a Next.js app from scratch. 

* With the initial setup in place, I created a Layout component with a Head component to encapsulate the relevant meta information for the website, and included the AppNavbar and AppFooter components.

* I then figured out how best to add Bootstrap to the project and import the SCSS styles we already use at Page Bird.

* I mocked some data locally to show how one the CMS-enabled features (namely, Events) could work with the file-based dynamic routing provided by Next.js. 
  * I created an Events index page and an EventCard component for each event. 
  * Each of those cards links to a the corresponding Event page using Next.js's dynamic routes and passing in a slug prop. 
  * Inside the Event page, I accessed the title and slug properties from the router params to display them on the Event page.

* Lastly, I created a PR to refactor the hero section in the homepage into a more flexible and reusable React component.

**Outcomes**

* This is a modest little project and in no way ready for production. But the code does provide a starting point for building a real web app that can get the most out of Next.js's hybrid static & server rendering.
 
* The project uses only some of Next's and React's basic features but it hints to how more pages and features could be built.

* Moving to Next.js could yield in significant perfomance increases for Page Bird's Jekyll websites, both at build time and run time. 
  * It could also simplify development and maintenance by doing away with gems and relying exclusively on accessing data by consuming the Rails app's APIs.

It was a rewarding, weekend-long learning challenge to build this project.In doing so, I:
* Learned more about current best practices in React and how Next.js makes it even easier to get the most out of a React front-end. 
* Learned how to configure a basic Next.js project and how to use dynamic routes with its file-based routing system.
* Used some of the great features Next.js provides right out of the box for optimizing front-end performance, like:
  * organized meta information using the default <Head /> component,
  * faster page transitions using <Link />, 
  * and image optimization with <Image />.


# How to deploy locally
To get this project running on your machine:

* Clone the repo
* Run ```yarn install``` or ```npm install```
* If Next.js is not installed on your machine, run ```yarn add next``` or ```npm install next```
* Run ```next dev``` to start the Next server

You should see the project appear on http://localhost:3000 on your favorite browser.

## Debugging installation
Try running ```npm upgrade``` or ```yarn upgrade``` before ```npm install``` or ```yarn install``` to update package.json dependencies.
