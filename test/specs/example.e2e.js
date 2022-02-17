

describe('My Login application', () => {
    it('should see a page', async () => {
        browser.url('https://drewestate-stage.bigdropinc.net/')
        const btnLogin = $("//button[@class='text-uppercase v-btn v-btn--contained v-btn--rounded theme--light v-size--x-small v-size--large transparent']")
        expect(btnLogin).toBeDisplayed()
    });
});


