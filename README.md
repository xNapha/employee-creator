# Employee Creator

<!-- ## Demo & Snippets

- Include hosted link
- Include images of app if CLI or Client App

--- -->

## Requirements / Purpose

A web application to create, list, modify and delete employees. The application should consist of a spring RESTful API and a React Typescript frontend. The schema for the employee is left to the criteria of the candidate.

---

<!-- ## Build Steps

- how to build / run project
- use proper code snippets if there are any commands to run

--- -->

## Approach

I would usually go for a TDD approach, but I feel like I'm not too familiar with creating tests for React components and I would just like quick and easy win, instead of creating tests without knowning if they function as intended or not. So I plan on creating the tests after the application has been completed.

---

## Features

- View all employees within the API
- Edit the information on each employee and update that in the API
- Remove any employee information from the API

---

<!-- ## Known issues

- Remaining bugs, things that have been left unfixed
- Features that are buggy / flimsy

---

## Future Goals

- What are the immediate features you'd add given more time

--- -->

## Change logs

### 29/05/2023 | Project Creation

- Created a diagram of what I want my SQL Table set up to be, [link here](https://dbdiagram.io/d/647404f07764f72fcfff053f).
- Implemented the methods GET, POST, DELETE, and PATCH
- Started implementing validation on the backend

## 30/05/2023 | Front End

- Created a simple navbar just to lay out the pages I plan on using
- Built the foundation of the employee form
- Was testing to see how axios works
- Created a few helper functions

---

## What did you struggling with?

### 29/05/2023 | Updating One to One Relationship

What I struggled with was trying to update a one to one relationship. Prior to what I have currently implemented it would insert new data into the address table, creating a whole new row and updating the address_id value on the employees table, but it old value wasn't being deleted. The current fix I have in place doesn't actually update the row leaving the id intact, it updates the whole row. I feel like this is a terrible work around, I will try and figure out a proper solution to it next time.

### 30/05/2023 | Forgetting HTML

I havent built a front end application in a while so my memory on which attributes I can use on a form have vanished from memory, so I feel pretty ashamed. Although I was able to quickly find the information needed to create the html for the application I feel like this is something that I shouldn't be forgetting. This just goes to show that I need to build more forms to familiarise myself with the syntax.

---
