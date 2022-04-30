import { PlaywrightTestConfig } from "@playwright/test";

const config: PlaywrightTestConfig ={

    timeout: 60000, //60 seconds  //Global time out for all the tests
    retries: 1, //how many times you want to run failed tests
    
    //Directory which has tests related E2E test scenarios
    testDir: './tests/Section_03_KO_UI_Tests_e2e/',

    reporter: 'html',

    //Define Browser specific options
    use: {
        headless:false,
        viewport: {width: 1280, height: 720},
        actionTimeout:10000, //15 seconds //This is for Playwright commands (click(), type(), fill())
        ignoreHTTPSErrors: true, //This is to handle SSL certifications
        //video: 'off', //To record videos of test execution
        video: 'retain-on-failure',
        //screenshot: 'off' //To take screenshots
        screenshot: 'only-on-failure',
        //trace: 'on',
        trace: 'retain-on-failure',
    }, //use
    projects:[
        {
            name: 'Chromium',
            use: {
                browserName: 'chromium'
            }
        },//Chromium
        {
            name: 'Firefox',
            use: {
                browserName: 'firefox'
            }
        },//Firefox
        {
            name: 'Webkit',
            use: {
                browserName: 'webkit'
            }
        },//Firefox
    ]
}
export default config