import { ChalkyPage } from './app.po';

describe('chalky App', () => {
  let page: ChalkyPage;

  beforeEach(() => {
    page = new ChalkyPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
