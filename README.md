# Automation Anywhere Assignment

## Overview

This project includes UI and API automation using Playwright.
The goal was to automate key workflows like login, task creation, and form handling, along with validating an API.

---

## Test Cases Implemented

### 1. Login Test

* Automates login to the Automation Anywhere platform
* Verifies that the user is successfully logged in

### 2. Message Box Flow

* Navigates to the Automation section
* Attempts to create a Task Bot
* Adds a Message Box action

### 3. Form Upload Flow

* Simulates creating a form
* Enters text input
* Uploads a file and verifies it

### 4. API Test

* Sends a GET request to a public API
* Validates response status and basic data

---

## Note on UI Access

While working on this assignment, the Automation Anywhere Community Edition account redirected to Community and Bot Store pages instead of the Automation Control Room.

Because of this:

* The **Create**, **Task Bot**, and **Form** options were not visible
* Some UI flows could not be fully executed

However, the automation scripts have been written based on the expected workflow and should work correctly in an environment with full access.

---

## Tech Stack

* Playwright
* JavaScript (Node.js)

---

## How to Run

```bash
npm install
npx playwright test
```

---

## Output

* Tests open and run in the browser
* API test passes successfully
* UI tests demonstrate the intended automation flow

---

## Status

The assignment covers:

* UI Automation
* API Testing
* Handling of real-world issues like redirects and limited access
