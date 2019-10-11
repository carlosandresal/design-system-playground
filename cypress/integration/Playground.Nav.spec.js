describe("Playground", function() {
  beforeEach(function() {
    cy.visit("/")
    cy.wait(6000)
  })

  it("can navigate to font, color, theme and ui", function() {
    cy.get("h2")
      .contains("Font Families")
      .should("be.visible")
    cy.get("h2")
      .contains("Type Scale")
      .should("be.visible")
    cy.get("nav")
      .contains("COLOR")
      .click()
    cy.get("h2")
      .contains("Font Families")
      .should("not.be.visible")
    cy.get("h2")
      .contains("Type Scale")
      .should("not.be.visible")
    cy.get("h2")
      .contains("Color Palette")
      .should("be.visible")
    cy.get("nav")
      .contains("THEME")
      .click()
    cy.get("h2")
      .contains("Font Families")
      .should("not.be.visible")
    cy.get("h2")
      .contains("Type Scale")
      .should("not.be.visible")
    cy.get("h2")
      .contains("Color Palette")
      .should("not.be.visible")
    cy.get("h2")
      .contains("Your Theme Object")
      .should("be.visible")
    cy.get("nav")
      .contains("UI")
      .click()
    cy.get("h2")
      .contains("Font Families")
      .should("not.be.visible")
    cy.get("h2")
      .contains("Type Scale")
      .should("not.be.visible")
    cy.get("h2")
      .contains("Color Palette")
      .should("not.be.visible")
    cy.get("h2")
      .contains("Your Theme Object")
      .should("not.be.visible")
    cy.get("h2")
      .contains("Rebass")
      .should("be.visible")
    cy.get("h2")
      .contains("Chakra UI")
      .should("be.visible")
    cy.get("nav")
      .contains("FONT")
      .click()
    cy.get("h2")
      .contains("Font Families")
      .should("be.visible")
    cy.get("h2")
      .contains("Type Scale")
      .should("be.visible")
    cy.get("h2")
      .contains("Color Palette")
      .should("not.be.visible")
    cy.get("h2")
      .contains("Your Theme Object")
      .should("not.be.visible")
    cy.get("h2")
      .contains("Rebass")
      .should("not.be.visible")
    cy.get("h2")
      .contains("Chakra UI")
      .should("not.be.visible")
  })
})
