import { test, expect } from "@playwright/test"

test("home page should display welcome message", async ({ page }) => {
  // Next.jsアプリケーションのURLに移動
  // await page.goto("http://web:3000")
  await page.goto("http://localhost:3000")

  // ページタイトルが正しいことを確認
  await expect(page).toHaveTitle("Create Next App")

  // h1タグに特定のテキストが含まれていることを確認
  const title = page.locator("h1")
  await expect(title).toHaveText("Welcome to Next.js with Playwright!")
  await expect(page).toHaveScreenshot({ fullPage: true })
})
