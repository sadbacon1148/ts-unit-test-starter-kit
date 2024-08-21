import { describe, it, expect, beforeEach } from "vitest";
import {
  addProduct,
  addToCart, applyShippingDiscount,
  calculateTotal,
  clearCart,
} from "../src/ecommerce";

// let cart = {};
describe("E-commerce System", () => {
  beforeEach(() => {
    addProduct("Soap", 100, 10);
    addProduct("Shampoo", 200, 5);
    clearCart();
  });

  it("should calculate price of all products", () => {
    // Arrange Act Assert Framework

    // Arrange
    addToCart("Soap", 2);
    addToCart("Shampoo", 2);

    // Act
    const sum = calculateTotal();

    //Assert
    expect(sum).toBe(600);
  });

  it("should add items to cart", () => {
    //Arrange
    let cart = {};

    //Act
    cart = addToCart("Soap",2);

    //Assert
    expect(cart["Soap"]).toBe(2);

  })

  it("discount 10 if total > 500", () => {
    //Arrange
    addToCart("Shampoo", 4);

    //Act
    let discounted = applyShippingDiscount(calculateTotal());

    //Assert
    expect(discounted).toBe(790);

  })
});
