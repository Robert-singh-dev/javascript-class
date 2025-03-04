# 🍕 JavaScript Objects and Classes - Pizza Example

## Overview
This example demonstrates the difference between **Objects** and **Classes** in JavaScript, using a **Pizza** as the example.

---

## Explanation

### 📦 Objects
- Objects are standalone collections of key-value pairs.
- In the example, `pizza` is an **object literal** with properties like `type`, `size`, `crust`, and `toppings`.
- It also contains a **method** `bake()` which logs a message using the object’s properties.

#### Key Points:
- Objects are easy to create directly when you just need one.
- You can access properties using dot notation (e.g., `pizza.type`).
- You can also create new objects that **inherit** properties from an existing object using `Object.create()`, but this does not copy properties — it links to the prototype.

---

### 🏛️ Classes
- Classes are **templates** used to create multiple objects (instances).
- `myPizza` is a **class** with a `constructor()` that accepts arguments to define a pizza's properties.
- The class also has a `bake()` method, which logs a message using the instance’s properties.

#### Key Points:
- Classes help when you need to create **multiple pizzas**, each with different properties.
- Creating an **instance** (`newPizza`) is required to actually use the class.
- Each instance has its own unique property values.

---

### 🔄 Comparison: Object vs Class

| Feature                  | Object Literal                | Class                  |
|-------------------|-------------------|-------------------|
| Creation Type       | Direct Definition            | Blueprint for Objects |
| Reusability             | Limited                              | Easy to reuse for many objects |
| Inheritance              | Can inherit via `Object.create()`  | Uses `extends` for inheritance |
| Instantiation           | Not required (ready to use) | Requires `new` keyword |

---

### Example Flow in Code
1. A pizza object is created directly.
2. A new object `anotherPizza` inherits from `pizza`, but starts as an empty object (because it only inherits the prototype, not the actual properties).
3. A class `myPizza` is created, and a new instance `newPizza` is made from it.
4. Both object and class demonstrate the `bake()` method.

---

### Summary
- Use **object literals** for single-use, simple objects.
- Use **classes** for reusable blueprints to create many similar objects.

---

### 🔗 Related Topics
- Object Prototypes
- Class Constructors
- Object-Oriented Programming (OOP) in JavaScript
