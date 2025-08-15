
# 💻 Automation Workshop 

This guide walks you through setting up and running this Playwright test automation project with TypeScript for our workshop sessions.

---

## 📦 Requirements

Before you begin, make sure you have the following installed:

- **[Node.js](https://nodejs.org/)** (.msi installer for Windows recommended/easiest)
- **[Git](https://git-scm.com/)** (I recommend the standalone installer for Windows)
- **[VSCode](https://code.visualstudio.com/download)** (Any IDE Works, this is however the editor I will be using)

It's also important to have some fundamentals of Programming/Git. To keep the workshop mostly focused on automation and specifically Playwright I want to make sure everyone is at least starting from a certain point.

While automation and programming can do super in depth, the purpose of these workshops is to work hands on with Playwright. To do that without getting bogged down in programming language specifics I think a pre-learning requisite will help us keep the workshops focused.

A couple of important skills to have the basics in is:

1. JavaScript
2. Git

This will ensure that we are able to start from scratch with Playwright AND commit and push code like we would in a normal development environment. These topics don't need to be learned super in-depth.

It's important before starting the workshop that we are able to assume the following can be done:

1. You have installed Node.js and Git from the links above ⚙️
2. You have installed VSCode (or another IDE)
3. You are able to clone the project to a folder 💾
4. You can run the demo.spec.ts file without issues 🧪

A few important links/resources I think can help us all ensure we understand JavaScript/Git basics:

### JavaScript:
1. https://javascript.info/getting-started and https://javascript.info/first-steps cover the basics pretty well with example. 
2. https://www.youtube.com/watch?v=W6NZfCO5SIk (JavaScript 1 Hour Course) for those that prefer video tutorials. Not all encompassing but does a good job with the basics
3. https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide More detailed Guide. Probably overkill for understanding the basics but good for reading more in-depth

Understanding at least the basics is important not to get lost in the weeds of the complexities of JavaScript. We don't need to know a ton to do the basics in Playwright. I think understanding up to at least functions/classes basics is a good start. 

### Git:
1. https://learngitbranching.js.org/ A great interactive tutorial for the basics
2. https://git-scm.com/book/en/v2/Getting-Started-About-Version-Control From the source itself.

Both of these are good resources. We are going to focus less on git, but it is helpful to be able to create a branch yourself for learning and allow you to push code to a remote repository like you would in a development environment.

### Playwright
1. https://playwright.dev/docs/intro
Playwright has a great intro just to get a feel for it. Don't worry too much about exploring every bit of documentation. It's a good idea to click around just to get familiar with running a basic test.
2. I also HIGHLY recommend installing the Playwright VSCode Extension (by Microsoft) just to make things easier.

---

## 🛠️ Installation & Setup

### 1. Clone the repository

```bash
git clone https://scm.qsrautomations.com/test-automation/sandbox/automation-workshop.git
cd automation-workshop
```

### 2. Install dependencies

```bash
npm install
```

This installs Playwright and any other dependencies defined in `package.json`.

### 3. Install Playwright browsers

```bash
npx playwright install
```

This installs the required browser binaries (Just Chromium for now).

---

## 🧪 Running Tests

### Run all tests

```bash
npx playwright test
```

### Run a specific test file

```bash
npx playwright test tests/demo.spec.ts
```

### Run tests in headed mode

```bash
npx playwright test --headed
```

---

## ⚙️ Project Structure

```
.
├── tests/                   # Your test files (TypeScript/JavaScript)
├── playwright.config.ts     # Playwright configuration
├── package.json             # Node project file
├── README.md
```

---
