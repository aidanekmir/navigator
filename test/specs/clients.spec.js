const LoginPage = require('./../pageobjects/Login.po');
const ClientPage  = require('./../pageobjects/Client.po');


describe('Client page', function(){

    beforeEach(function(){
           LoginPage.open();
           LoginPage.doLogin("Admin", "Admin@Navi")
    })
    
    afterEach(function(){
        browser.reloadSession();
    })


    //      browser.url(browser.options.baseUrl);
    //      let loginField = $('input[type="text"]');
    //      loginField.setValue("Admin");

    //      let passwordField = $('input[type="password"]');
    //      passwordField.setValue("Admin@Navi"); 

    //      let loginButton = $('button[type="submit"]');
    //      loginButton.click();

    //      browser.pause(5000);

    // })


   
//     it('should add client', function(){
//        ClientPage.clickOnAddClientButton();
//        browser.pause(5000);
       
//        let surNameField = $('input[formcontrolname="userSurname"]');
//        surNameField.setValue("Mirbekova");
//        browser.pause(3000);

//        let userNameField = $('input[formcontrolname="userName"]');
//        userNameField.setValue("Aidanek");
//        browser.pause(3000);

//        let MiddleNameField = $('input[formcontrolname="userMiddleName"]');
//        MiddleNameField.setValue("Mirbekovna");
//        browser.pause(3000);

//        let SexChoice = $ ('div.add-user-modal mat-radio-group[formcontrolname="sex"] mat-radio-button:nth-child(2)');
//        SexChoice.click();
//        browser.pause(2000);

//        let BirthdayField = $('input[formcontrolname="birthday"]');
//        BirthdayField.setValue("4/26/2000");
//        browser.pause(3000);
    
//     })   
// })

//     it ('should search Client', function(){
//         let searchClient = $('input[name="search"]');
//         searchClient.click();
//         searchClient.setValue("Black Regulus");
//         searchClient.click();
//         browser.pause(2000);
//     })
// })

it ('should select Age', function(){
    let selectAge = $//div[@class="options-select age"];
    browser.pause(2000);
})
})

    //    it('should open first client', function(){
    //     firstClientRow.clickOnFirstRow();
    //     browser.pause(5000);

    // })



//     it('should add client', function(){
//         let addClientButton = $('button.clients-add-user-dialog');
//         addClientButton.click();
//         browser.pause(5000);

//     })

//     it('should open first client', function(){
//         let firstClientRow = $('table.crm-navigator-table tbody tr td span');
//         firstClientRow.click();
//         browser.pause(5000);
//     })
// })

