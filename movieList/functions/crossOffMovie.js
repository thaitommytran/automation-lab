const { By } = require("selenium-webdriver");

const crossOffMovie = async (driver) => {
  const movie = "Ironman";

  await driver.findElement(By.xpath("//input")).sendKeys(movie);

  await driver.findElement(By.xpath("//button")).click();

  await driver.findElement(By.xpath("//span[text() = 'Ironman']")).click();

  const message = await driver.findElement(By.id("message")).getText();

  expect(message).toEqual("Ironman watched!");
};

module.exports = {
  crossOffMovie
};
