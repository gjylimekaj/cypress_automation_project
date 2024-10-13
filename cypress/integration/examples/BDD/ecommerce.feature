Feature: End to End Ecommerce Validation
    application Regression
    @Regression
    Scenario: Ecommerce products delivery
    Given I open eCommerce page
    When I add items to Cart
    And Validate the total prices
    Then select the country submit and verify Thankyou

    @Smoke
    Scenario: Filling the form to shop
    Given I open eCommerce page
    When I fill the form details
    |name | gender |
    |vlori | Male |
    Then Validate the forms behaviour
    And select the Shop Page