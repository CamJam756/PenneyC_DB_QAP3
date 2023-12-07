// test_scenario_2.js
// As a user of the shopping app, I can search for a product by its name and see the search results.

// Import any necessary dependencies or modules for your test
const assert = require("assert");
const request = require("supertest");
const app = require("../index"); // Assuming your application's entry point file is named "index.js"

// Write your test code
describe("User of the shopping app", () => {
  it("should be able to search for a product by its name and see the search results", (done) => {
    const productName = "example-product"; // Replace with the name of the product you want to search for

    request(app)
      .get(`/api/products?search=${productName}`) // Assuming your route for searching products accepts a query parameter for product name
      .expect(200) // Assuming a successful response status code is 200
      .end((err, res) => {
        if (err) return done(err);

        // Add assertions to validate the expected outcome
        assert(res.body.length > 0); // Assuming the response body is an array of search results

        done();
      });
  });
});
