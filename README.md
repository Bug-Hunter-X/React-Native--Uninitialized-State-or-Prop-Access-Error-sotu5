# React Native: Uninitialized State or Prop Access

This repository demonstrates a common error in React Native: attempting to access a state variable or prop before it has been initialized.  The `bug.js` file contains the erroneous code, while `bugSolution.js` provides the corrected version.

## Problem

Accessing state or props before they're assigned values leads to unexpected behavior and runtime errors.  This is often due to asynchronous operations or complex component logic.

## Solution

The key to avoiding this error is to ensure that state or props are checked for null or undefined before being accessed.  Conditional rendering or optional chaining can be used to handle this gracefully.

## Setup

1. Clone the repository
2. Run `npm install`
3. Run `npx react-native run-android` or `npx react-native run-ios`