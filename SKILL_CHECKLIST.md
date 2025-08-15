# 🎯 Workshop Learning Targets

This intends to be a roadmap of both Playwright concepts AND a checklist of tests.

---

## ✅ Checklist

### 1. Setup
- [ ] Install Playwright (`npx playwright install`)
- [ ] Understanding Playwright config `playwright.config.ts`

### 2. Navigation & Basics
- [ ] Open a page and check the **title**
- [ ] Open a page and check the **URL**
- [ ] Assert an element is **visible**
- [ ] Assert text matches **expected content**

### 3. User Actions
- [ ] Click a button → verify something changes
- [ ] Fill out a form (username/password) → verify success message
- [ ] Select a value from a dropdown → verify result
- [ ] Check/uncheck a checkbox → verify state changes
- [ ] Select a radio button → verify selection

### 4. Dynamic Content
- [ ] Wait for navigation after clicking a link/button
- [ ] Wait for an element to appear before asserting
- [ ] Assert the number of items in a list (`toHaveCount`)

### 5. Flows
- [ ] Login with **valid** credentials → verify dashboard
- [ ] Login with **invalid** credentials → verify error
- [ ] Add an item to cart → verify it appears in cart
- [ ] Remove item from cart → verify it disappears

### 6. Extras
- [ ] Take a screenshot of a page
- [ ] Run the same test in **multiple browsers**
- [ ] Generate and view an **HTML report** and Change Reporting Types
- [ ] Run tests **headless**
- [ ] Try/Catch + Conditional Logic

---

## ✅ Playwright Concepts Checklist/Workshop Goals

### 1. Core Basics
- [ ] What is Playwright? How does it compare to others?
- [ ] What is Node?
- [ ] Library vs Test Runner?
- [ ] Understanding the Playwright Test Runner (`@playwright/test`)
- [ ] Test structure: `test.describe`, `test`, `beforeEach`, `afterEach`
- [ ] Locators: CSS, text, role-based (`getByRole`, `getByText`)
- [ ] Common actions: `click`, `fill`, `check` etc...
- [ ] Assertions: `toHaveText`, `toBeVisible`, `toHaveCount`, `toHaveURL`, `toHaveTitle`

### 2. Test Control
- [ ] **Headed vs. Headless** mode (`--headed`)
- [ ] Running in multiple browsers (Chromium, Firefox, WebKit)
- [ ] Parallel vs. serial execution
- [ ] Skipping and focusing tests (`test.skip`, `test.only`, `test.fixme`)
- [ ] Tagging tests (`@tag`)
- [ ] Debugging mode and UI mode (`--ui`, `--debug`)

### 3. Fixtures & Context
- [ ] **Built-in fixtures** (`page`, `browser`, `context`)
- [ ] Understanding test isolation

### 4. Test Organization
- [ ] **Page Object Model** (POM) structure
- [ ] Test file/folder structure
- [ ] Shared utility functions (e.g., `loginUser()`)
- [ ] Configuring base URL in `playwright.config.ts`
- [ ] Using environment variables for credentials
- [ ] Handling multiple enviroments/data

### 5. Waiting & Timing
- [ ] Auto-waiting behavior in Playwright
- [ ] Explicit waits: `page.waitForSelector`, `page.waitForURL`
- [ ] Avoiding `waitForTimeout` unless debugging
- [ ] Handling animations and transitions
- [ ] Page Hydration

### 6. Advanced Features
- [ ] File uploads (`setInputFiles`)
- [ ] Download handling (`page.waitForEvent("download")`)
- [ ] API testing (`request` fixture)
- [ ] Network mocking (`page.route`)
- [ ] Visual testing with `toMatchSnapshot`

### 7. Reliability & CI
- [ ] Test retries (`retries` in config)
- [ ] HTML reporting (`npx playwright show-report`)
- [ ] Running in CI/CD (GitHub Actions, **GitLab**, etc.)

