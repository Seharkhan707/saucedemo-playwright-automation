# SauceDemo - Playwright Automation Testing Suite

## Overview
This project contains an automated UI test suite built with **Playwright** and **TypeScript**, targeting the SauceDemo e-commerce demo application. It demonstrates end-to-end login flow testing, including positive and negative test scenarios.

## What This Project Covers
- Valid login flow verification
- Invalid credentials error handling
- Empty field validation
- Locked-out user error handling

## Tech Stack
- **Framework:** Playwright
- **Language:** TypeScript
- **Test Runner:** Playwright Test
- **Target Application:** [SauceDemo](https://www.saucedemo.com)

## Project Structure
```
saucedemo-automation/
├── tests/
│   └── login.spec.ts       # Login test scenarios
├── playwright.config.ts    # Playwright configuration
├── package.json
└── README.md
```

## How to Run These Tests

1. Clone this repository
```bash
git clone https://github.com/Seharkhan707/saucedemo-playwright-automation.git
cd saucedemo-playwright-automation
```

2. Install dependencies
```bash
npm install
```

3. Run the tests
```bash
npx playwright test
```

4. View the HTML report
```bash
npx playwright show-report
```

## Test Scenarios

| Test Case | Description | Expected Result |
|---|---|---|
| Valid Login | Login with correct username/password | Redirects to Products page |
| Invalid Login | Login with wrong credentials | Displays error message |
| Empty Username | Submit form without username | Shows "Username is required" |
| Locked Out User | Login with a locked account | Shows account locked error |

## About Me
I'm Sehar Abrar, a Senior QA Automation Engineer with 5+ years of experience in Manual, Automation, API, and Performance Testing across Healthcare and SaaS domains. I specialize in Playwright, Cypress, Postman, and JMeter, with growing expertise in AI/LLM testing.

**Let's connect:** Available for freelance QA automation projects on Fiverr.
