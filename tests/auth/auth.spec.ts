import { expect, test as setup } from "@playwright/test";

const authFile = "playwright/.auth/workshop-admin.json";

setup("authenticate admin", async ({ page }) => {
  await page.goto("/");
  await page.waitForLoadState();
  await expect(page).toHaveTitle("Restful-booker-platform demo");
  await page.getByRole("link",{name: "Admin", exact:true}).click();
  await page.getByRole("textbox",{name: "Username"}).fill("admin");
  await page.getByRole("textbox",{name: "Password"}).fill("password");
  await page.getByRole("button", {name: "Login"}).click();
  await page.waitForTimeout(2000);
  await page.context().storageState({ path: authFile });
  await page.waitForTimeout(2000);
});
