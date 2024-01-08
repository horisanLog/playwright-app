import { test, expect, devices } from "@playwright/test"

test("home page should display welcome message", async ({ page }) => {
  // Next.jsアプリケーションのURLに移動
  // await page.goto("http://web:3000")
  await page.goto("http://localhost:3000")

  // ページタイトルが正しいことを確認
  await expect(page).toHaveTitle("Create Next App")

  // h1タグに特定のテキストが含まれていることを確認
  const title = page.locator("h1")
  await expect(title).toHaveText("Welcome to Next.js with Playwright!")
  await page.screenshot({ path: `screenshot-example.png` })
})

test("Cross-browser test", async ({ browser }) => {
  const context = await browser.newContext()
  const page = await context.newPage()
  await page.goto("http://localhost:3000")

  // h1タグに特定のテキストが含まれていることを確認
  const title = page.locator("h1")
  await expect(title).toHaveText("Welcome to Next.js with Playwright!")
})

test("Mobile emulation", async ({ browser }) => {
  const iPhone11 = devices["iPhone 11"]
  const context = await browser.newContext({
    ...iPhone11,
  })
  const page = await context.newPage()
  await page.goto("http://localhost:3000")
  
  // h1タグに特定のテキストが含まれていることを確認
  const title = page.locator("h1")
  await expect(title).toHaveText("Welcome to Next.js with Playwright!")
})
