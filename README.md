# Hazy Calculator

## Instructions

You will choose a level by checking out a branch.

- checkout `difficult` for the more difficult version. This branch has the least code already written.
- checkout `medium` for the less difficult version. This version has some buggy code in place for you to fix and add onto.

You have been provided with a basic project including a set of tests which currently fail. Your task is to create a `calculate` function which will properly run calculations given the rules outlined below.

## Calculation Rules

The `calculate` function runs an arithmetic calculation based upon inputs (eg. `2, '*', 10`)

The second parameter allows is an operand (`+`, `-`, `*`, `/`)

We support inputs in the following ways

- Stringified numbers (eg. `'2'`) should be treated as numbers
- `undefined` values should be treated as a 0

## Getting Started

When we checkout a node project, we have a `package.json` file. This file contains the names and version of all dependencies for the project.
To install all of the dependencies that others have added to the project, we run any of these commands which are all equivalent:

```sh
npm install
npm test
```

OR a one line version

```sh
npm install test
```

OR a one line shortcut version where i is for input and t is for test

```sh
npm it
```
