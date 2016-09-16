import { TryAngularCliPage } from './app.po';

describe('try-angular-cli App', function() {
  let page: TryAngularCliPage;

  beforeEach(() => {
    page = new TryAngularCliPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
