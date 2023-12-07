// test_scenario_3.js
// As a Martha’s Good Eats business partner, I can add a new menu item to the database through a REST API.

describe("Martha’s Good Eats business partner", () => {
  it("should be able to add a new menu item to the database through a REST API", (done) => {
    const newMenuItem = {
      name: "New Item",
      price: 9.99,
      category: "Entree",
    };

    request(app)
      .post("/api/menu") // Assuming your route for adding a new menu item is '/api/menu'
      .send(newMenuItem)
      .expect(201) // Assuming a successful response status code for creating an item is 201
      .end((err, res) => {
        if (err) return done(err);

        // Add assertions to validate the expected outcome
        assert(res.body.id); // Assuming the response body contains the ID of the newly created menu item

        done();
      });
  });
});
