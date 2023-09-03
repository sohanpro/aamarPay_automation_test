const { expect } = require('chai');

const assert = require('chai').assert;
context("Side Bar functionality", function() {
    beforeEach(async function(){
        //const elementId = "com.android.permissioncontroller:id/permission_allow_button";
   // const element = await driver.findElement('id', elementId);


   // await $(element).click();
   //setTimeout(5000);
  //await driver.shake();

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
      })
it('All button functionality working fine',async function()
{
    
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
it.only("Recharge Functionality",async function()
{
    const xpathforslidebar = "/hierarchy/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.widget.FrameLayout/android.widget.FrameLayout/android.widget.FrameLayout/android.view.View/android.view.View/android.view.View/android.view.View"
    await $(xpathforslidebar).click();
   const xpathforRecharge = '//android.widget.ImageView[@content-desc="Recharge"]';
   await $(xpathforRecharge).click();
   const xpathForPermissionToast = "/hierarchy/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.widget.FrameLayout/android.widget.FrameLayout/android.widget.FrameLayout/android.view.View/android.view.View/android.view.View[1]/android.view.View/android.view.View";
   await $(xpathForPermissionToast).isExisting();
   const xpathforGrantpermission = "//android.widget.Button[@content-desc='Continue']"
   await $(xpathforGrantpermission).click();
   const xpathforallowpermission = "/hierarchy/android.widget.FrameLayout/android.widget.FrameLayout/android.widget.FrameLayout/android.widget.ScrollView/android.widget.LinearLayout/android.widget.LinearLayout/android.widget.LinearLayout[2]/android.widget.Button[1]"
   await $(xpathforallowpermission).click();

   const searchNameArray = ["Abrar","akhi 2", "+8801718141535","01718141535","01936106680","01936702592"]
   const queryResults = await Promise.all(
    searchNameArray.map(async function (data)
    {
        try{
        const SearchInputInRechargePanel = "/hierarchy/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.widget.FrameLayout/android.widget.FrameLayout/android.widget.FrameLayout/android.view.View/android.view.View/android.view.View/android.view.View/android.widget.ScrollView/android.widget.EditText";
        await $(SearchInputInRechargePanel).setValue(data)
        const SearchResultElement = "/hierarchy/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.widget.FrameLayout/android.widget.FrameLayout/android.widget.FrameLayout/android.view.View/android.view.View/android.view.View/android.view.View/android.widget.ScrollView/android.view.View[5]"

        const actualResult = await Promise.all(
            SearchResultElement.map(async function(data)
            {
                console.log(data.getText())
                return data.getText();
                
            })
            
        )
        }
        catch(error)
        {
            console.error("error is: ",error)
        }

        })
    
   )
   



});   
});

