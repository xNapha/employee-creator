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

## Design Goals / Approach

- Design goals
- why did you implement this the way you did?

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

---

## What did you struggling with?

### 29/05/2023 | Updating One to One Relationship

What I struggled with was trying to update a one to one relationship. Prior to what I have currently implemented it would insert new data into the address table, creating a whole new row and updating the address_id value on the employees table, but it old value wasn't being deleted. The current fix I have in place doesn't actually update the row leaving the id intact, it updates the whole row. I feel like this is a terrible work around, I will try and figure out a proper solution to it next time.

---
