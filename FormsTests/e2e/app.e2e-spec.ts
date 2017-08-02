import { FormsTestsPage } from './app.po';

describe('forms-tests App', function() {
  let page: FormsTestsPage;

  beforeEach(() => {
    page = new FormsTestsPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
