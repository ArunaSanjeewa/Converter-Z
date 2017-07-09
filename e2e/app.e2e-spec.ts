import { MyConverterPage } from './app.po';

describe('my-converter App', () => {
  let page: MyConverterPage;

  beforeEach(() => {
    page = new MyConverterPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
