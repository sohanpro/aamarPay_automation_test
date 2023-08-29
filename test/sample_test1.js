const assert = require('chai').assert;
describe("Side Bar functionality",function() {
it('All button functionality working fine',async function()
{
    //const elementId = "com.android.permissioncontroller:id/permission_allow_button";
   // const element = await driver.findElement('id', elementId);


   // await $(element).click();
   //setTimeout(5000);

    const xpathExpression = "/hierarchy/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.widget.FrameLayout/android.widget.FrameLayout/android.widget.FrameLayout/android.view.View/android.view.View/android.view.View/android.view.View/android.widget.ScrollView/android.widget.EditText";
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
browser.pause(5000);


//click the side bar button
const xpathforsidebarbutton = "/hierarchy/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.widget.FrameLayout/android.widget.FrameLayout/android.widget.FrameLayout/android.view.View/android.view.View/android.view.View/android.view.View/android.view.View[1]";
const sidebarbutton = await $(xpathforsidebarbutton);
await sidebarbutton.click();

//check if all button of side working fine
const xpathForHomeButton = "//android.widget.ImageView[@content-desc='Home']";
await $(xpathForHomeButton).click();
await sidebarbutton.click();
const xpathForOrderHistory = "//android.widget.ImageView[@content-desc='Order History']";
await $(xpathForOrderHistory).click();
//define and press the back button
const xpathForBackButton = "//android.widget.Button[@content-desc='Back']"
await $(xpathForBackButton).click();
//define the setting button
const xpathforSetting = "//android.widget.ImageView[@content-desc='Settings']";

await $(xpathforSetting).click();

//press back button again
await $(xpathForBackButton).click();
//define Ekyc button
const xpathforEkyc = "//android.widget.ImageView[@content-desc='EKYC']";
await $(xpathforEkyc).click();
//presss back button again
await $(xpathForBackButton).click();
//press refer a friend button
const xpathForfriend = "//android.widget.ImageView[@content-desc='Refer a friend']";
$(xpathForfriend).click()
//press the back button again
await $(xpathForBackButton).click();
//define terms & conditions
const xpathForTerms = "//android.widget.ImageView[@content-desc='Terms & Condition']";
await $(xpathForTerms).click();
//press the back button again
await $(xpathForBackButton).click();

//define privacy
const xpathForprivacy = "//android.widget.ImageView[@content-desc='Privacy policy']";
await $(xpathForprivacy).click();
//press the back button again
await $(xpathForBackButton).click();
const x = 1000;
const y = 300;

await driver.touchAction({
    action: 'tap',
    x,
    y,
});







}); 
it("Recharge Functionality",async function()
{
    const xpathforslidebar = "/hierarchy/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.widget.FrameLayout/android.widget.FrameLayout/android.widget.FrameLayout/android.view.View/android.view.View/android.view.View/android.view.View"
    await $(xpathforslidebar).click();
   const xpathforRecharge = "//android.widget.ImageView[@content-desc='Recharge']";
   await $(xpathforRecharge).click();
});   
});


