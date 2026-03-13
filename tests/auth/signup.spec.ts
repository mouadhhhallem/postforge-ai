import { test, expect } from "@playwright/test";

test("signup should fail when email missing", async ({ request }) => {
  const response = await request.post("http://localhost:3000/api/auth/signup", {
    data: {
      password: "password123",
      name: "Test User",
      username: "testuser"
    }
  });

  expect(response.status()).toBe(400);
});

test("signup should fail with short password", async ({ request }) => {
  const response = await request.post("http://localhost:3000/api/auth/signup", {
    data: {
      email: "test@test.com",
      password: "123",
      name: "Test User",
      username: "testuser"
    }
  });

  expect(response.status()).toBe(400);
});

test("signup should fail when username missing", async ({ request }) => {
  const response = await request.post("http://localhost:3000/api/auth/signup", {
    data: {
      email: "test@test.com",
      password: "password123",
      name: "Test User"
    }
  });

  expect(response.status()).toBe(400);
});