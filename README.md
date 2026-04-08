# Automation Anywhere Assignment

## Overview

This project implements UI and API automation using Playwright.  
The goal is to automate key workflows such as login, task creation, and form handling, along with validating API responses.

---

## Test Cases Implemented

### 1. Login Test
- Automates login to Automation Anywhere
- Verifies successful navigation to the dashboard

### 2. Message Box Flow
- Navigates to Automation section
- Creates a Task Bot
- Adds a Message Box action

### 3. Form Upload Flow
- Creates a Task Bot and opens the editor
- Searches and adds an action (Message Box)
- Verifies action addition and saves the bot

### 4. API Test
- Sends a GET request to a public API
- Validates response status and response structure

---

## Tech Stack

- Playwright
- JavaScript (Node.js)

---

## How to Run

```bash
npm install
npx playwright test