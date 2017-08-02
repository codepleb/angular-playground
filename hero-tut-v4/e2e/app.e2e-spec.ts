import { HeroTutV4Page } from './app.po';

describe('hero-tut-v4 App', () => {
  let page: HeroTutV4Page;

  beforeEach(() => {
    page = new HeroTutV4Page();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
