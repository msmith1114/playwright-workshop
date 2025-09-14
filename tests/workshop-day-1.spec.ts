import { test, expect } from '@playwright/test';

test("Our first test!", async ({ page }) => {
    await page.goto("/")
});

test("Basic assertions", async ({ page }) => {
    await page.goto("/");
    await expect(page).toHaveTitle("Restful-booker-platform demo")
})

test("Lets click a button", async ({ page }) => {
    await page.goto("/");
    await page.getByRole("link", {name: "Rooms"}).click();
})

test("Filling in a form", async ({ page }) => {
    await page.goto("/");
    const nameInput = page.getByRole("textbox", {name: "Name"})
    await nameInput.fill("Test User");
    await expect(nameInput).toHaveValue("Test User");
})

test("Forgetting an await", async ({ page }) => {
    await page.goto("/");
    const nameInput = page.getByRole("textbox", {name: "Name"})
    const emailInput = page.getByRole("textbox", {name: "Email"})
    const phoneInput = page.getByRole("textbox", {name: "Phone"})
    const subjectInput = page.getByRole("textbox", {name: "Subject"})
    const messageInput = page.locator("#description");
    await nameInput.fill("Test User");
    emailInput.fill("sometestuser@gmail.com");
    await phoneInput.fill("555-111-1234");
    await subjectInput.fill("Hello!!!");
    await messageInput.fill("This is a test message!");
    await page.getByRole("button", {name: "Submit"}).click()
    await page.pause();
})

test("Auto-waiting and Assertions", async ({ page }) => {
    await page.goto("https://the-internet.herokuapp.com/dynamic_controls");
    const enableButton = page.locator("#input-example > button")
    console.log(await enableButton.textContent())
    await enableButton.click();
    expect(await enableButton.textContent()).toBe("Disable")  // 👎
    //await expect(enableButton).toHaveText("Disable"); // 👍
    await page.waitForTimeout(2000);
})

