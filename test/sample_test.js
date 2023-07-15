const assert = require('chai').assert;
describe("sample",function() {
it('sample test',async function()
{
    const elementId = "com.android.permissioncontroller:id/permission_allow_button";
    const element = await driver.findElement('id', elementId);


    await $(element).click();




 // Using XPATH to find the desired element
const xpathExpressionforusername = "/hierarchy/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.widget.FrameLayout/android.widget.FrameLayout/android.widget.FrameLayout/android.view.View/android.view.View/android.view.View/android.view.View/android.view.View/android.widget.EditText[1]";
const element1 = await $(xpathExpressionforusername);

// Click on the element
await element1.click();

    //await $(element).click();
    
await $(element1).clearValue() ;
await $(element1).setValue("01953714653");
//validation the value
const value = await $(element1).getText();
assert.equal(value,"01953714653");


//xpath for password field
const xpathforPassword = "/hierarchy/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.widget.FrameLayout/android.widget.FrameLayout/android.widget.FrameLayout/android.view.View/android.view.View/android.view.View/android.view.View/android.view.View/android.widget.EditText[2]" ;
//xpath for show hide pass field
const xpathforShowPassword = "/hierarchy/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.widget.FrameLayout/android.widget.FrameLayout/android.widget.FrameLayout/android.view.View/android.view.View/android.view.View/android.view.View/android.view.View/android.widget.EditText[2]/android.view.View";
const passwordElement = await $(xpathforPassword);

await passwordElement.click();
await passwordElement.waitForDisplayed({ timeout: 5000 }); // Wait for the element to be displayed
//await passwordElement.clearValue();
await passwordElement.setValue("714653");


const showpass = await $(xpathforShowPassword);
await $(showpass).click();
await $(showpass).click();
//click the login button
const xpathforloginButton = "//android.view.View[@content-desc='Login']";
const login = await $(xpathforloginButton);
await $(login).click();


});    
});