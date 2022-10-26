const { Builder, By, Key } = require("selenium-webdriver");
const assert = require("assert");
const ltCapabilities = require("./capabilities");
const { beforeEach } = require("mocha");
var should = require("chai").should();

//describe block - used to group tests together,
describe("add todo tests", function () {
  var driver;
  //username
//    const USERNAME = ltCapabilities.capabilities.username;
  //key
  //  const KEY = ltCapabilities.capabilities.accessKey;
  //host
//const GRID_HOST = 'hub.lambdatest.com/wd/hub';
//const gridUrl = 'https://' + USERNAME + ':' + KEY + '@' + GRID_HOST;
//const driver = driver.Builder().usingServer(gridUrl).withCapabilities(ltCapabilities).build();

  beforeEach(function(){
    driver = new Builder()
    //.usingServer(gridUrl)
    .withCapabilities(ltCapabilities.capabilities)
    .forBrowser("chrome").build();
  });

  //it block - represents individual tests (can have many)
  it("succesfully adds a todo application", async function () {
    //launch browser
    //let driver = await new Builder().forBrowser("chrome").build();

    //navigate to application
    await driver.get("https://lambdatest.github.io/sample-todo-app/");
    //https://stg-com.lh.uk/

    //edit page
    await driver
      .findElement(By.id("sampletodotext"))
      .sendKeys("kljflkd", Key.RETURN);

    //assert
    let todoText = await driver
      .findElement(By.xpath("//li[last()]"))
      .getText()
      .then(function (value) {
        return value;
      });

    //chai assertion should
    todoText.should.equal("kljflkd");

    
  });

  it("succesfully adds a todo application", async function () {
    //launch browser
   // let driver = await new Builder().forBrowser("chrome").build();

    //navigate to application
    await driver.get("https://lambdatest.github.io/sample-todo-app/");
    //https://stg-com.lh.uk/

    //edit page
    await driver
      .findElement(By.id("sampletodotext"))
      .sendKeys("kljfkd", Key.RETURN);

    //assert
    let todoText = await driver
      .findElement(By.xpath("//li[last()]"))
      .getText()
      .then(function (value) {
        return value;
      });

    //chai assertion should
    todoText.should.equal("kljfkd");

  
  });


  
  it("succesfully adds a todo application", async function () {
    //launch browser
   // let driver = await new Builder().forBrowser("chrome").build();

    //navigate to application
    await driver.get("https://lambdatest.github.io/sample-todo-app/");
    //https://stg-com.lh.uk/

    //edit page
    await driver
      .findElement(By.id("sampletodotext"))
      .sendKeys("shcdlkjsa", Key.RETURN);

    //assert
    let todoText = await driver
      .findElement(By.xpath("//li[last()]"))
      .getText()
      .then(function (value) {
        return value;
      });

    //chai assertion should
    todoText.should.equal("shcdlkjsa");

 
  });
 

});
