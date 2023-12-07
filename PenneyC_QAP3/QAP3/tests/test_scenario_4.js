// test_scenario_4.js
// As a Martha’s Good Eats customer, I can place an order for a menu item and receive a confirmation.

describe("Martha’s Good Eats customer", () => {
  it("should be able to place an order for a menu item and receive a confirmation", (done) => {
    const order = {
      menuItemId: "example-menu-item-id", // Replace with the ID of the menu item you want to order
      quantity: 2,
      specialInstructions: "No onions",
    };

    request(app)
      .post("/api/orders") // Assuming your route for placing an order is '/api/orders'
      .send(order)
      .expect(200) // Assuming a successful response status code for placing an order is 200
      .end((err, res) => {
        if (err) return done(err);

        // Add assertions to validate the expected outcome
        assert(res.body.confirmationCode); // Assuming the response body contains a confirmation code for the order

        done();
      });
  });
});
