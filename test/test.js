const { By, Key, Builder } = require("selenium-webdriver");
require("chromedriver");

async function createAccount() {
  //To wait for browser to build and launch properly
  let driver = await new Builder().forBrowser("chrome").build();

  //To fetch http://google.com from the browser with our code.
  await driver.get("http://localhost:3000/");

  //To send a search query by passing the value in searchString.
  await driver.findElement(By.name("firstName")).sendKeys("Sanjana");
  await driver.sleep(1500);
  await driver.findElement(By.name("lastName")).sendKeys("Rao");
  await driver.sleep(1500);
  await driver.findElement(By.name("email")).sendKeys("sanjana@gmail.com");
  await driver.sleep(1500);
  await driver.findElement(By.name("password")).sendKeys("abcd1234#");
  await driver.sleep(1500);
  await driver.findElement(By.name("passwordConfirmation")).sendKeys("abcd1234#");
  await driver.sleep(1500);
  await driver.findElement(By.name("checkbox")).click();
  await driver.sleep(1500);
  await driver.findElement(By.name("createAcc")).click();
  await driver.sleep(2000);
  

  //Verify the page title and print it
  var title = await driver.getTitle();
  console.log("Title is:", title);

  //It is always a safe practice to quit the browser after execution
  await driver.quit();
}

createAccount();