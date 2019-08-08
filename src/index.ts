import pupetteer from "puppeteer";

(async() => {
    const browser = await pupetteer.launch(
        {
            headless: true // if you need GUI, please change to false
        }
    );
    const page = await browser.newPage();
    await page.goto("http://example.com");
    await page.screenshot({path: "example.png"});

    await browser.close();
})();
