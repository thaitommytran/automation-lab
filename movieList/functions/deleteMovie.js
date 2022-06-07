const { By } = require("selenium-webdriver");

const deleteMovie = async (driver) => {
  const movie = "Ironman";

  await driver.findElement(By.xpath("//input")).sendKeys(movie);

  await driver.findElement(By.xpath("//button")).click();

  await driver.findElement(By.xpath("//button[@id='Ironman']")).click();

  const message = await driver.findElement(By.id("message")).getText();

  expect(message).toEqual("Ironman deleted!");
};

module.exports = {
  deleteMovie
};
