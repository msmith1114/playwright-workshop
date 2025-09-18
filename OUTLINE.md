## Day 1 Objectives

### Brief History lession 🔎

- What is Playwright?
- What is Node?
- Selenium and Playwright differences
    - https://www.selenium.dev/documentation/legacy/json_wire_protocol/  <-- Selenium JSON Wire
    - https://w3c.github.io/webdriver/ <-- W3C Standard
    - Playwright uses Websocket protocol, allowing full-duplex communication
    - Client and Server can send/receive messages at the same time/ vs Selenium request and response (Much faster)
    - A Single long lived websocket connection is used, preventing new connection overhead
    - Selenium Bidi (Bi-Directional) is a newer version similarly using Websockets (Still not mature yet however)
- Picking a Language (and why I picked TypeScript). (Python/.NET/Java are available)
- Playwright Test (The test runner)

---

### The Basics of Playwright 💻
- The main components/fixtures: https://playwright.dev/docs/test-fixtures
    - page: https://playwright.dev/docs/api/class-page
    - context: https://playwright.dev/docs/api/class-browsercontext
    - browser: https://playwright.dev/docs/api/class-browser
    - request: https://playwright.dev/docs/api/class-apirequestcontext
    - browser → worker-scoped (created once per worker)
    - context → test-scoped (created once per test)
    - page → test-scoped (created once per test)
 
- Lifecycle of a Test (by Default)
```  
Worker starts:
  └── browser created (shared)
Each test:
  └── new context (isolated)
        └── new page (isolated)
  └── run beforeEach/test/afterEach using that page
  └── page disposed
  └── context disposed
```
- What is a worker? https://developer.mozilla.org/en-US/docs/Web/API/Web_Workers_API (for Browser)
- NodeJS Worker: https://nodejs.org/api/worker_threads.html <---- Handles Parallelization in Playwright test runner
- Playwright worker defaults: (Parallelization per file/etc..) 

- Locator: https://playwright.dev/docs/api/class-locator
    - Selenium WebElement vs Playwright Locator
    - `page.$()`: https://playwright.dev/docs/api/class-elementhandle (Don't use)
    - Why Locators are better/auto waiting
    - https://playwright.dev/docs/actionability

### Let's write some test! ⌨️
- Navigating
- Page Assertions: https://playwright.dev/docs/api/class-pageassertions
- Locators/Elements and Actions 
    - Types of Locators (Built-in, CSS, Xpath)
    - https://playwright.dev/docs/locators
    - Locator preference
    - Locator chaining ⛓️
    - Locator filtering 
- Why we need `await`
- Auto-Waiting: https://playwright.dev/docs/actionability
- Test Blocks (test/describe)
- Test Hooks (beforeEach/afterEach/beforeAll/etc...)
- Soft Assertions 🪶
- Multiple Elements? `locator.all()`

### Q/A + WrapUp
- Any Questions? ❓
- Best Practices to Remember! 🏆
    - Test user behavior/like a user
    - Test isolation
    - Third Party dependencies 
    - Use reliable locators
    - Use "web-first-assertions" (Auto-waiting)
    - Use --debug mode!
- Common Pitfalls/Gotchas ⚠️
    - Brittle Locators (xpath/styling or DOM structure/Dynamic Identifiers)
    - "Dependent" Tests (Not isolated)
    - Managing "state" on the server (Cleanup/etc..)



