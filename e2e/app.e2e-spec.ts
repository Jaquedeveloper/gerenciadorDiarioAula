import { DiarioProfessorPage } from './app.po';

describe('diario-professor App', () => {
  let page: DiarioProfessorPage;

  beforeEach(() => {
    page = new DiarioProfessorPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
