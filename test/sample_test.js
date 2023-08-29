//import { browser } from '@wdio/globals'
import AxeBuilder from '@axe-core/webdriverio'


describe('Accessibility Test', () => {
    it('should get the accessibility results from a page', async () => {
        const builder = new AxeBuilder()
const result = await builder.analyze()
console.log('Acessibility Results:', result)
})
})