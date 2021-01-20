"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
//using the customer class 
var Customer_1 = require("./Customer");
var myCustomer = new Customer_1.Customer("Tatek", "Ahmed");
console.log(myCustomer.setFirstName("Sofia"));
console.log(myCustomer.getFirstName());
