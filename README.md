# Employee Creator

## Demo & Snippets

[Netlify Link](https://friendly-yeot-5eb8d5.netlify.app/)

- Include images of app if CLI or Client App

---

## Requirements / Purpose

A web application to create, list, modify and delete employees.

### Stack Used

- Java (Spring)
- React (Typescript)
- Tailwind

---

## Build Steps

```gitBash
npm run dev or npm run build
```

---

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

### 30/05/2023 | Front End

- Created a simple navbar just to lay out the pages I plan on using
- Built the foundation of the employee form
- Was testing to see how axios works
- Created a few helper functions

### 31/05/2023 | React Hook Form

- Implementing react hook form
- Tweaking some variables to include parameters for react hook form

### 1/06/2023 | React Hook Form Validation

- Creating the schema for the form
- Using the formprovider and methods to allow everything to register properly
- Created an axios function to post to the database
- Refactored some of the variables in AddEmployeeHelpers.tsx
- Created a utility folder

### 2/06/2023 | Redux

- Changed from using useState to Redux

### 4/06/2023 | More Redux, Refactoring, Adding Some QoL Features

- Deleted axios.ts file from services infavor of using redux createAsyncThunk and slices, because I am using createAsyncThunk I might find a way to incorporate state updates with it otherwise I'll leave it as is
- redux state now holds the formdata for an employee if the user decides to edit that employees information
- Added a button on the employee component to show a form to update the user information
- Moved all types to the type files in utility
- Updated the defaultValues for the Form to show the current date and end date if applicable
- Deleted Nav Bar because I realised that it was out of scope for what the project mvp wanted

### 5/06/2023 | Styling With Tailwind

- Refactored the code to have redux store all state, I was going to use context but then i realised that if im using redux i might as well use it for everything else
- Added some basic styling to EmployeeList, Employee

### 6/06/2023 | More Tailwind Styling

- Finished all the styling for the web application
- Created a several more form components

### 07/06/2023 | Testing and Deploying

- Finished creating tests for the front end, mainly just focusing on the components and containers rendering
- Deployed the final project on netlify but i realised that without the backend all you will see is a loading screen, so might take it down
- Tried and failed to add tests for the backend, look further down for an explanation

---

## What did you struggling with?

### 29/05/2023 | Updating one to one relationship

What I struggled with was trying to update a one to one relationship. Prior to what I have currently implemented it would insert new data into the address table, creating a whole new row and updating the address_id value on the employees table, but it old value wasn't being deleted. The current fix I have in place doesn't actually update the row leaving the id intact, it updates the whole row. I feel like this is a terrible work around, I will try and figure out a proper solution to it next time.

### 30/05/2023 | Forgetting HTML

I havent built a front end application in a while so my memory on which attributes I can use on a form have vanished from memory, so I feel pretty ashamed. Although I was able to quickly find the information needed to create the html for the application I feel like this is something that I shouldn't be forgetting. This just goes to show that I need to build more forms to familiarise myself with the syntax.

### 31/05/2023 | Using react hook form for the first time

During the nology course we had a brief introduction to the react hook form library, but until today I did not implement it within any projects. Now that I am reading the docs and scouring the internet to find references and documentation, I now regret never using it earlier. With the added hurdle of having to find the proper type annotations for things, I feel like the progress I have made today was lackluster. Granted i did only do a couple hours today because i was busy with other things, but still if I was more familiar with it I would have felt less unproductive. But on a positive note, I feel like it is all coming together. I just need to tweak a few more things on the form and I should be golden to start rendering out the employees within the database.

### 1/06/2023 | Type annotations

Since this is my first time creating a project using typescript, I have not yet learnt how to properly annotate types. Other than the basic <string | number | null | undefined > and their array variants i was confused on how I go about type annotating objects. I'm not too sure if the way I am doing it now is correct or not, but there isn't any errors showing. B(Below is just an example of what I am doing currently.)

```typescript
type blah = {
  foo: string;
  bar: lah;
};
type lah = {
  mars: string;
  snickers: int[];
};
```

### 2/06/2023 | Redux

I understand the concept of redux but implementing the code is a lot more tedious than I thought, there is too much boilerplate setup before I can actually use it. It seems like a very powerful library to control state, but I feel like it might be over kill for this project, enough though it was recommended to use it by the nology coaches. But atleast it does get me learning and using it, otherwise I don't think I would ever find a use case to actually implement it.

### 7/06/2023 | Testing

This was my first project in which I created tests for react, so it was a struggle just trying to understand how to go about doing it. But I was finally able to wrap my head around what I needed to do.

However for the backend, I tried looking up how to go about writing tests for the api but for some reason my dependencies aren't working, or maybe im doing it wrong. I have been at it for 2 hours trying to get it working, ive deleted the maven dependencies and redownloaded them, Ive tried downloading other dependencies for testing, watching videos, reading articles, but nothing seems to be working, so now i officially give up.

---
