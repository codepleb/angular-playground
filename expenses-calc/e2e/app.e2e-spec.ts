import { ExpensesCalcPage } from './app.po';

describe('expenses-calc App', function() {
  let page: ExpensesCalcPage;

  beforeEach(() => {
    page = new ExpensesCalcPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
