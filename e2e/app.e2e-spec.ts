import { PranaUiPage } from './app.po';

describe('prana-ui App', () => {
  let page: PranaUiPage;

  beforeEach(() => {
    page = new PranaUiPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
