// baidu.spec.js created with Cypress
//
// Start writing your Cypress tests below!
// If you're unfamiliar with how Cypress works,
// check out the link below and learn how to write your first test:
// https://on.cypress.io/writing-first-test
describe("browser stroage cookie test", function () {
  it("test cookie", function () {
    cy.visit("http://127.0.0.1:5500/example/index.html");

    cy.clearCookies();

    cy.window().then((win) => {
      expect(win.bs.setCookie("weidehai", "100")).to.equal(true);
      expect(win.bs.getCookie("weidehai")).to.equal("100");
      win.document.cookie = "seesion=123;path=/example";
      expect(win.bs.getCookie("seesion")).to.equal("123");
      win.document.cookie = "seesion2=123;path=/example123";
      win.document.cookie = "seesion3=;path=/example";
      expect(win.bs.getCookie("seesion2")).to.equal(null);
      expect(win.bs.setCookie("test2")).to.equal(true);
      expect(win.bs.getCookie("test2")).to.equal(null);
      expect(win.bs.getCookie("seesion3")).to.equal(null);
      expect(win.bs.getCookie("seesion4")).to.equal(null);
      expect(win.bs.rmCookie("seesion3")).to.equal(true);
      expect(win.bs.getCookie("seesion3")).to.equal(null);
      // win is the remote window
      // of the page at: http://localhost:8080/app
    });
  });
});

describe("browser stroage localstorage test", function () {
  it("test localstorage", function () {
    cy.visit("http://127.0.0.1:5500/example/index.html");

    cy.window().then((win) => {
      win.bs.setLsItem("weidehai", "100");
      expect(win.bs.getLsItem("weidehai")).to.equal("100");
      // cy.clearLocalStorage().should((ls) => {
      //   expect(ls.getItem("weidehai")).to.be.null;
      // });
      win.bs.setLsItems([
        {
          key: "weidehai1",
          value: "1111",
        },
        {
          key: "weidehai2",
          value: "111133",
        },
      ]);
      expect(win.bs.getLsItem("weidehai1")).to.equal("1111");
      expect(win.bs.getLsItem("weidehai2")).to.equal("111133");
      win.bs.delLsItem('weidehai1')
      expect(win.bs.getLsItem("weidehai1")).to.equal(null);
      win.bs.delLs()
      expect(win.bs.getLsItem("weidehai2")).to.equal(null);
      expect(win.bs.getLsItem("weidehai")).to.equal(null);
      // win is the remote window
      // of the page at: http://localhost:8080/app
    });
  });
});
