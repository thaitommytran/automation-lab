const { Builder, Capabilities, By } = require("selenium-webdriver");
const { deleteMovie } = require("../functions/deleteMovie");
const { crossOffMovie } = require("../functions/crossOffMovie");
const { addBackMovie } = require("../functions/addBackMovie");
require("chromedriver");

const driver = new Builder().withCapabilities(Capabilities.chrome()).build();

beforeEach(async () => {
  await driver.get("http://127.0.0.1:5500/movieList/index.html");
});

afterAll(async () => {
  await driver.quit();
});

test("movie is deleted", async () => {
  await deleteMovie(driver);
  await driver.sleep(5000);
});

test("movie is crossed off", async () => {
  await crossOffMovie(driver);
  await driver.sleep(5000);
});

test("movie is added back", async () => {
  await addBackMovie(driver);
  await driver.sleep(5000);
});
