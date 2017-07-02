import { DiarioProfessorPage } from './app.po';

describe('diario-professor App', () => {
  let page: DiarioProfessorPage;

  beforeEach(() => {
    page = new DiarioProfessorPage();
  });

  it('deve clickar em aula e carregar dados', async () => {
    await page.navigateTo('/');
    await page.clickSideBar();
  })

  it('deve cadastrar novo aluno', async () => {
    await page.clickAddStudent();
    await page.addValues();
    await page.clickFormStudent();
  })
});

