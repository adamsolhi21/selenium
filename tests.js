const {Builder, By, Key} = require("selenium-webdriver");
const assert = require ("assert");
var should = require('chai').should():


async function example(){

//launch browser
let driver = await new Builder().forBrowser("chrome").build();

//navigate to application
await driver.get("https://lambdatest.github.io/sample-todo-app/") 
//https://stg-com.lh.uk/

//edit page
await driver.findElement(By.id("sampletodotext")).sendKeys("kljflkd", Key.RETURN);

//assert
let todoText = await driver.findElement(By.xpath("//li[last()]")).getText().then(function(value){
    return value
}); 


//node assertions
//assert.strictEqual(todoText,"kljflkd");

//chai assertion should
todoText.should.equal("kljflkd");




//close browser
await driver.quit();


}

example()