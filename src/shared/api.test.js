import { api } from "./api";

test("fetches  data from an API", async () => {
  const { data: result } = await api("get", "users", { id: "7" });

  const testThrowingError = () => {
    throw new Error();
  };

  expect(result[0]).toHaveProperty("email");
  expect(() => testThrowingError()).toThrowError();
});
