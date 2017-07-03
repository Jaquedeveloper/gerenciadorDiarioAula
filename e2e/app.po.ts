import { browser, element, by, $, $$ } from 'protractor';
import * as fs from 'fs';

export class DiarioProfessorPage {
  async navigateTo(url) {
    await browser.get(url);
    await browser.driver.wait(async () => (await browser.driver.getCurrentUrl()).includes(url));
  }

  async clickSideBar() {
    await browser.waitForAngularEnabled(true);
    await browser.wait(async () => await $('side-bar td').isPresent());
    await $('side-bar td').click();
    await browser.sleep(500);
    await browser.waitForAngular();
  }

  async clickAddStudent() {
    await browser.waitForAngularEnabled(true);
    await browser.wait(async () => await $('add-aluno button').isPresent());
    await $('add-aluno button').click();
    await browser.sleep(500);
    await browser.waitForAngular();
  }

  async addValues() {
    await browser.waitForAngularEnabled(true);
    await browser.wait(async () => await $('dialog.mdl-dialog').isPresent());
    await $$('dialog input').each(async x => await x.sendKeys('teste'));
  }

  async clickFormStudent() {
    await $('dialog #btnSalvar').click();
    await browser.sleep(500);
    await browser.waitForAngular();
  }
}

jasmine.getEnv().addReporter(new function () {
    this.specDone = function (result) {
        if (result.failedExpectations.length > 0) {
            browser.takeScreenshot().then(function (png) {
                var stream = fs.createWriteStream(`e2e/error-${result.description}.png`);
                stream.write(new Buffer(png, 'base64'));
                stream.end();
            });
        }
    };
});