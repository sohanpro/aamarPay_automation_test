const assert = require('chai').assert;
describe("sample",function() {
it('sample test',async function()
{
    const elementId = "com.android.permissioncontroller:id/permission_allow_button";
    const element = await driver.findElement('id', elementId);


    await $(element).click();


    const xpathExpression = "/hierarchy/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.widget.FrameLayout/android.widget.FrameLayout/android.widget.FrameLayout/android.view.View/android.view.View/android.view.View/android.view.View/android.view.View/android.widget.EditText";
    const elements = await $$(xpathExpression);
    
    const firstelement = elements[0];
    

 // Using XPATH to find the desired element

// Click on the element
await firstelement.click();

    //await $(element).click();
    
await $(firstelement).clearValue() ;
await $(firstelement).setValue("01953714653");
//validation the value
const value = await $(firstelement).getText();
assert.equal(value,"01953714653");


//xpath for password field
const secondelement = elements[1];
const xpathforShowPassword = "/hierarchy/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.widget.FrameLayout/android.widget.FrameLayout/android.widget.FrameLayout/android.view.View/android.view.View/android.view.View/android.view.View/android.view.View/android.widget.EditText[2]/android.view.View";
const passwordElement = await $(secondelement);

await secondelement.click();
//await passwordElement.waitForDisplayed({ timeout: 5000 }); // Wait for the element to be displayed
//await passwordElement.clearValue();
await secondelement.setValue("714653");
await browser.back();



const showpass = await $(xpathforShowPassword);
await showpass.click();
await showpass.click();
//click the login button
const xpathforloginButton = "//android.view.View[@content-desc='Login']";
const login = await $(xpathforloginButton);
await login.click();


});    
});



