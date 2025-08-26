export interface oopsItem {
  id: number;
  title: string;
  description: string;
  keyModules: string[];
  solution: Record<string, string[]>;
  blogLink: string;
  tryItLink: string;
}

export interface oopsAccordionProps {
  items: oopsItem[];
}

export const oopData: oopsAccordionProps = {
  items: [
    {
      id: 1,
      title: "What is OOP?",
      description: "Object-Oriented Programming (OOP) is a paradigm based on 'objects' that bundle state (fields) and behavior (methods). It improves modularity, reusability, and scalability of applications.",
      keyModules: ["Class", "Object", "Method", "Field"],
      solution: {
        "Student.java": [
          "public class Student {",
          "  private String name;",
          "  private int age;",
          "  public Student(String name, int age) { this.name = name; this.age = age; }",
          "  public void displayInfo() {",
          "    System.out.println(\"Name: \" + name + \", Age: \" + age);",
          "  }",
          "}"
        ],
        "Demo.java": [
          "public class Demo {",
          "  public static void main(String[] args) {",
          "    Student s1 = new Student(\"Rajesh\", 21);",
          "    s1.displayInfo();",
          "  }",
          "}"
        ]
      },
      blogLink: "https://www.geeksforgeeks.org/object-oriented-programming-oops-concept-in-java/",
      tryItLink: "https://www.jdoodle.com/online-java-compiler/"
    },
    {
      id: 2,
      title: "Four Pillars of OOP",
      description: "The four pillars of OOP are Inheritance, Encapsulation, Polymorphism, and Abstraction. Together they enable clean, modular, and extensible design.",
      keyModules: ["Inheritance", "Encapsulation", "Polymorphism", "Abstraction"],
      solution: {
        "Notes.java": [
          "// Inheritance: acquiring properties of parent",
          "// Encapsulation: data hiding with accessors",
          "// Polymorphism: same method behaving differently",
          "// Abstraction: exposing only essential details"
        ]
      },
      blogLink: "https://www.javatpoint.com/four-pillars-of-oops",
      tryItLink: "https://www.jdoodle.com/online-java-compiler/"
    },
    {
      id: 3,
      title: "Inheritance and Its Types",
      description: "Inheritance is when one class derives from another. Types include Single, Multilevel, Hierarchical, and Hybrid (via interfaces in Java).",
      keyModules: ["BaseClass", "DerivedClass"],
      solution: {
        "Animal.java": [
          "public class Animal {",
          "  void sound(){ System.out.println(\"Animal makes a sound\"); }",
          "}"
        ],
        "Dog.java": [
          "public class Dog extends Animal {",
          "  @Override",
          "  void sound(){ System.out.println(\"Dog barks\"); }",
          "}"
        ],
        "Demo.java": [
          "public class Demo {",
          "  public static void main(String[] args){",
          "    Animal a = new Dog();",
          "    a.sound();",
          "  }",
          "}"
        ]
      },
      blogLink: "https://www.geeksforgeeks.org/inheritance-in-java/",
      tryItLink: "https://www.jdoodle.com/online-java-compiler/"
    },
    {
      id: 4,
      title: "Encapsulation with Real World Example",
      description: "Encapsulation is binding data and methods together while restricting direct access. Example: banking system hiding balance behind getters/setters.",
      keyModules: ["Encapsulation", "BankAccount"],
      solution: {
        "BankAccount.java": [
          "public class BankAccount {",
          "  private double balance;",
          "  public BankAccount(double balance){ this.balance = balance; }",
          "  public void deposit(double amount){ balance += amount; }",
          "  public double getBalance(){ return balance; }",
          "}"
        ],
        "Demo.java": [
          "public class Demo {",
          "  public static void main(String[] args){",
          "    BankAccount acc = new BankAccount(1000);",
          "    acc.deposit(500);",
          "    System.out.println(\"Balance: \" + acc.getBalance());",
          "  }",
          "}"
        ]
      },
      blogLink: "https://www.geeksforgeeks.org/encapsulation-in-java/",
      tryItLink: "https://www.jdoodle.com/online-java-compiler/"
    },
    {
      id: 5,
      title: "Polymorphism with Real World Example",
      description: "Polymorphism allows the same method to perform different actions based on the object. Example: a Shape class where draw() behaves differently for Circle and Square.",
      keyModules: ["Shape", "Circle", "Square"],
      solution: {
        "Shape.java": [
          "abstract class Shape {",
          "  abstract void draw();",
          "}"
        ],
        "Circle.java": [
          "class Circle extends Shape {",
          "  void draw(){ System.out.println(\"Drawing Circle\"); }",
          "}"
        ],
        "Square.java": [
          "class Square extends Shape {",
          "  void draw(){ System.out.println(\"Drawing Square\"); }",
          "}"
        ],
        "Demo.java": [
          "public class Demo {",
          "  public static void main(String[] args){",
          "    Shape s1 = new Circle();",
          "    Shape s2 = new Square();",
          "    s1.draw();",
          "    s2.draw();",
          "  }",
          "}"
        ]
      },
      blogLink: "https://www.geeksforgeeks.org/polymorphism-in-java/",
      tryItLink: "https://www.jdoodle.com/online-java-compiler/"
    },
    {
      id: 6,
      title: "Abstraction with Real World Example",
      description: "Abstraction hides implementation details and shows only essential features. Example: a PaymentSystem interface implemented by CreditCard and UPI.",
      keyModules: ["Interface", "AbstractClass"],
      solution: {
        "PaymentSystem.java": [
          "interface PaymentSystem {",
          "  void pay(double amount);",
          "}"
        ],
        "CreditCard.java": [
          "class CreditCard implements PaymentSystem {",
          "  public void pay(double amount){",
          "    System.out.println(\"Paid \" + amount + \" using Credit Card\");",
          "  }",
          "}"
        ],
        "UPI.java": [
          "class UPI implements PaymentSystem {",
          "  public void pay(double amount){",
          "    System.out.println(\"Paid \" + amount + \" using UPI\");",
          "  }",
          "}"
        ],
        "Demo.java": [
          "public class Demo {",
          "  public static void main(String[] args){",
          "    PaymentSystem p = new CreditCard();",
          "    p.pay(1000);",
          "    p = new UPI();",
          "    p.pay(500);",
          "  }",
          "}"
        ]
      },
      blogLink: "https://www.geeksforgeeks.org/abstraction-in-java/",
      tryItLink: "https://www.jdoodle.com/online-java-compiler/"
    },
    {
      id: 7,
      title: "Interface in Java",
      description: "An interface is a contract that defines methods without implementation. A class implements the interface to provide behavior.",
      keyModules: ["Interface", "ImplementationClass"],
      solution: {
        "Vehicle.java": [
          "interface Vehicle {",
          "  void start();",
          "}"
        ],
        "Car.java": [
          "class Car implements Vehicle {",
          "  public void start(){ System.out.println(\"Car started\"); }",
          "}"
        ],
        "Demo.java": [
          "public class Demo {",
          "  public static void main(String[] args){",
          "    Vehicle v = new Car();",
          "    v.start();",
          "  }",
          "}"
        ]
      },
      blogLink: "https://www.javatpoint.com/interface-in-java",
      tryItLink: "https://www.jdoodle.com/online-java-compiler/"
    }
    // 🚀 I will continue adding: functional interface, predicate, consumer, exceptions, collections, streams, comparable vs comparator, multithreading, static block, variable types, servlet, etc.
  ]
}
