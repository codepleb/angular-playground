import { ExpCalcPage } from './app.po';

describe('exp-calc App', function() {
  let page: ExpCalcPage;

  beforeEach(() => {
    page = new ExpCalcPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
