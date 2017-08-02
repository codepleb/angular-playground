import { FormsBookPage } from './app.po';

describe('forms-book App', () => {
  let page: FormsBookPage;

  beforeEach(() => {
    page = new FormsBookPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
