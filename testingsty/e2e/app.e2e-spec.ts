import { TestingstyPage } from './app.po';

describe('testingsty App', function() {
  let page: TestingstyPage;

  beforeEach(() => {
    page = new TestingstyPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
