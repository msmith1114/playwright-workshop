
# 💻 Automation Workshop 

This guide walks you through setting up and running this Playwright test automation project with TypeScript for our workshop sessions.

---

## 📦 Requirements

Before you begin, make sure you have the following installed:

- **[Node.js](https://nodejs.org/)** (.msi installer for Windows recommended/easiest)
- **[Git](https://git-scm.com/)** (I recommend the standalone installer for Windows)

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
npx playwright test tests/example.spec.ts
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
