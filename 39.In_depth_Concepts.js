"use strict";
/*

1.  Semicolons may be omitted in most cases when a line
    break exists. Here JS interpretes the line break as
    an implicit semicolon. This is called an automatic
    semicolon insertion. It is mostly true but not always
    in cases like a statement with '+' it means it is
    incomplete and is continued in next line in such case
    JS won't insert semicolon.

2.  "use strict" introduced in ES5 is located at the top of
    a function or a script. It must be kept at the top else
    it will be ignored. If 'use strict' is declared once
    there is no going back. Modern JS support classes and
    modules -advanced language structures. that enables
    'use strict' automatically. So we don't need to add the
    'use strict' directive if we use them.

3.  Numeric conversion rules:
    undefined -> NaN
    null      -> 0
    true      -> 1
    false     -> 0
    string    -> whitespaces are trimmed from start and end 
                 of the string. If the remaining string is 
                empty, the result is 0. Otherwise, the number 
                string is converted to number. Else if there 
                is an error it gives NaN.

4.  Boolean conversion rules:
    undefined  -> false
    null       -> false
    NaN        -> false
    ""         -> false
    0          -> false
    any other  -> true

5.  Comparisons
    i)  String comparison is done lexicographically and uses
        Unicode for comparing each character.
    ii) Regular equality check (==) has a problem. It cannot 
        differentiate '0' from 'false'. This is because
        operands of different types are converted to numbers
        by the equality operator == . 
    iii)Comparison with null and undefined. For a strict
        equality check (===) these values are different.
        (null === undefined) = false
        For a regular equality check there's a special rule 
        these 2 are a sweet couple. They equal each other 
        nut not any other values.
    iv) null vs 0
        null >  0  // false
        null == 0  // false
        null >= 0  // true
        Mathematically that's strange. It says null is 
        greater than or equal to zero. So in one of the
        comparisions done above it must be true, but they 
        both are false. The reason is that an equality check
        '==' and comparisions work differently. Comparisions
        convert null to a number, treating it as 0. On the
        other hand, the equality check '==' for undefined and
        null is defined such that without any conversions, they
        equal each other and don't equal anything else.
    v)  The incomparable undefined
        undefined >  0 // false
        undefined <  0 // false
        undefined == 0 // false
        In case of comparision undefined is converted to NaN
        while in equality check undefined only equals null or 
        undefined and no other value.

6.  OR "||" finds the first truthy value. It evaluates from left
    to right. For each operand, converts it to boolean. If the
    result is true, stops and returns the original value of the 
    operand. If all operands have been evaluated then it returns
    the last operand's value. Note: the value is returned in its
    original form that is before it was converted to boolean.
    In Simplier words, a chain of '||' returns the first truthy 
    value or the last one if no truthy value is found.
    Interesting usage of '||':
      i)  Getting the first truthy value form a list of expressions
      ii) Short-circuit evaluation

7.  AND "&&" finds the first falsy value. It evaluates form left
    to right. And for each operand, converts it ot a boolean. 
    If the result is false, stops and returns the original value 
    of that operand. If all operands have been evaluated then it
    returns the last operand.
    The above rules are similar to OR, the only difference is that
    AND returns the first falsy value while OR returns the first 
    truthy value.
    Note: the precedence of AND(&&) is higher then OR(||).

8.  NOT "!" it accepts a single argument and converts it to a 
    boolean type and returns the inverse value.
    Note: the precedence of NOT is the highest of all logical
    operators, so it always executes first, before '&&' or '||'

9.  Nullish coalescing operator '??'
    The result of a ?? b is:
      # If a is defined, then a
      # If a isn't defined, then b
    In other words, ?? returns the first argument if it's not null / 
    undefined. Otherwise, the second one.
    Polyfill of Nullish Operator:
    result = (a !== null && a !== undefined) ? a : b;

10. Objects are used to store keyed collections of various data and
    more complex entities. A property is a "key:value" pair, where 
    key is a string and value can be anything.
    Property name limitations: we cannot name a variable with a reserved
    keyword, but for an object property, there's no such restriction.
    There is a minor catch with a special property named __proto__.
    We cannot set it to a non-object value and it's assignemnt with a 
    primitive is ignored.

11. Property existence with "in" operator
    Usage: "key" in object
    Need of "in": isn't it enough to compare against undefined?
    Well, most of the time the comparision with undefined works fine.
    But there's a special case when it fails, but "in" works correctly
    it's when an object property exists, but stores undefined.

12. Ordering in Object
    Objects are ordered in a special fashion integer properties are sorted
    , others appear in creation order.
    Note: What are integer properties? It means a string that can be 
    converted to-and-from an integer without a change.
        For example: "49"  -> 49 -> "49" Integer property
                     "+49" -> 49 -> "49" Not Integer property
    
13. Symbol type
    Only 2 primitive types may serve as object property keys:
        string type
        symbol type
    Otherwise, if one uses another type, such as number, it's autoconverted
    to string.
    Symbol represents a unique identifier. A value of this type can be 
    created using Symbol(). Symbols are guaranteed to be unique. Even if we
    create many symbols with the same description, they are different values.
    The description is just a label that doesn't affect anything.
    Symbols don't auto-convert to a string. This is a language guard against
    messing up, because strings and symbols are fundamentally different and 
    should not accidentally convert one into another.

14. Hidden properties with Symbol
    Symbols allow us to create "hidden" properties of an object, that no other
    part of code can accidentally access or overwrite.
    Q. What's the benefit of using Symbol over a string?
    Ans: An object belongs to another codebase and it's unsafe to add fields
         to them, since we might affect pre-defined behaviour in that other 
         codebase. However, symbols cannot be accessed accidentally. The 3rd
         party code won't be aware of newly defined symbols, so it's safe to
         add symbols to the objects.
    Technically, symbols are not 100% hidden. There is a built-in method 
    Object.getOwnPropertySymbols(obj) that allows us to get all symbols. 
    Also there is a method named Reflect.ownKeys(obj) that returns all keys 
    of an object including symbolic ones.

15. Symbol gets skipped...
    Symbolic properties do not participate in For..in loop, Object.keys(obj) 
    also ignores them. In contrast Object.assign copies both string and symbol 
    properties.

16. Global symbols
    Usually all symbols are different even if they have the same name. But 
    sometimes we want same-named symbols to be same entities. For instance, 
    different parts of our application want to access symbol "id" meaning 
    exactly the same property. To achive this, there exists a global symbol
    registry. We can create symbols in it and access them later, and it 
    guarantees that repeated access by the same name return exactly the same
    symbol.
    In order to read (create if absent) a symbol from the registry, Use:
        Symbol.for(key)
    This call checks the global registry, and if there's a symbol described 
    as key, then returns it. Otherwise creates a new Symbol(key) and stores it
    in the registry by the given key. Symbols inside the registry are called 
    global symbols.

17. Object to primitive conversion
    Q. How does JS decide which conversion to apply?
    A. There are 3 variants of type conversion, that happen in various situations.
       They're called "hints"-
        "string": For an object-to-string conversion, when we're doing an
                  operation on an object that expects a string like 'alert()'
        "number": For an object-to-number conversion, like when we're doing maths.
        "default": Occurs in rare cases when the operator is "not sure" what type
                   to expect. For instance binary plus can work both with strings
                   and numbers so if a binary plus gets an object as an argument,
                   it uses the "default" hint to convert it.
    To do the conversion, JS tries to find and call 3 object methods:
    1.  Call obj[Symbol.toPrimitive](hint) - a method with the symbolic key
        Symbol.toPrimitive, if such method exists.
    2.  Otherwise if hint is "string" try calling obj.toString() or obj.valueOf()
    3.  Otherwise if hint is "number" or "default" try calling obj.valueOf() or 
        obj.toString(), whatever exists.

18. JSON - JavaScript Object Notation
    It is a lightweight data-interchange format. It is easy for humans to read
    and write. It is easy for machines to parse and generate. JSON is built in 
    two structures:
    1.  A collection of name/value pairs. In various languages, this is realized
        as an object, record, struct, dictionary, hash table, keyed list, or 
        associative array.
    2.  An ordered list of values. In most languages, this is realized as an
        array, vector, list or sequence.
    
    JSON.stringify is used to convert objects into JSON.
    JSON.parse is used to convert JSON back into an object.
    Following data types are supported by JSON:
        *Object {..}
        *Arrays [...]
        *Primitives
            -strings
            -numbers
            -boolean values
            -null
    JSON is data-only language-independent specification, so some JavaScript
    specific object properties are skipped by JSON.stringify
    Namely:
        Function properties (methods).
        Symbolic keys and values.
        Properties that store undefined.
    Apart from these there must be no curcular references

19. Excluding and transforming: replacer
    The full syntax of JSON.stringify is:
        JSON.stringify(value[,replacer, space]);
    value: A value to encode.
    replacer: Array of properties to encode or a mapping function
    space: Amount of space to use for formatting

20. Arrow Functions:
        Do not have "this"
        Do not have "arguments"
        Can't be called with "new"
        They also don't have "super"
    
21. All functions remember the lexical Environment in which they were created. Technically
    there's no magic here: all functions have the hidden property named [[Environment]],
    that keeps the reference to the Lexical Environment where the functions was created.
    Usually, a Lexical Environment is removed from memory with all the variables after the 
    function call finishes. That’s because there are no references to it. As any JavaScript
    object, it’s only kept in memory while it’s reachable. However, if there’s a nested 
    function that is still reachable after the end of a function, then it has [[Environment]] 
    property that references the lexical environment.In that case the Lexical Environment 
    is still reachable even after the completion of the function, so it stays alive.
    
22. Object properties, besides a "value" have 3 special attributes (so-called "flags"):
        writable- if true, the value can be changed, otherwise it's read-only
        enumerable- if true, then listed in loops, otherwise not listed
        configurable- if true, the property can be deleted and these attributes
                      can be modified, otherwise not
    When we usually create a property, all of them are true. But we also can change them.
    
    The method "Object.getOwnPropertyDescriptor" allows to query the full information
    about a property. And it's syntax is:
        const descriptor = Object.getOwnPropertyDescriptor(obj, propertyName);
            obj: The object to get information form
            propertyName: The name of the property
        The returned value is so-called "property descriptor" object and it contains th e
        value and all the flags.
    
    To change the flags, we can use "Object.defineProperty"
    The syntax is:
        Object.defineProperty(obj, propertyName, descriptor)
            obj, propertyName: The object and it's property to apply the descriptor
            descriptor: Property descriptor object to apply
        If the property exists, "defineProperty" updates its flags. Otherwise, it 
        creates the property with the given value and flags in that case, if a flag
        is not supplied, it is assumed to be false.
    
    Non-writable: no one can change the value of a non-writable property, unless they
                  apply their own "defineProperty" to override ours. But in "non-strict"
                  mode, no errors accur when writing to non-eritable properties. But the 
                  operation still won't succeed. Flag-violating actions are just silently
                  ignored in non-strict
    
    Non-enumerable: Normally, a built0in toString for objects is non-enumerable, it does 
                    not show up in for...in. But if we add a toString of our own, then by
                    default it shows up in for...in. When we don't want such behaviour,
                    then we can set enumerable: false. Then it won't appear in a for...in 
                    loop, just like the built-in one. Non-enumerable properties are also
                    excluded from Objects.keys

    Non-configurable: A non-configurable property prevents changes of property flags and 
                      its deletion, while allowing to change its value. However, there is
                      an exception about changing flags. We can change writable: true to 
                      fale for a non-configurable property, thus preventing its value 
                      modification to add another layer of protection but not the other 
                      way around though.
    
    If we want to define many properties at once then we can use "Object.defineProperties"
    The syntax is:
        Object.defineProperties(obj, {
            property1: descriptor1,
            property2: descriptor2,
        });
    
    If we want to get all property descriptors at once, we can use "Object.getOwnPropertyDescriptors"
    Together with Object.defineProperties it can be used as a "flags-aware" way of cloning
    an object:
        const cloneObj = Object.defineProperties({}, Object.getOwnPropertyDescriptors(obj));
    Normally when we clone an object, we use an assignment to copy properties, like this:
        for(const key in user){
            clone[key] = user[key]
        }
    The above code does not copy flags. So if we want a better clone then Object.defineProperties is 
    preferred. Another difference is that for...in ignores symbolic and non-enumerable properties, but
    Object.getOwnPropertyDescriptors returns all property descriptors including symbolic and 
    non-enumerable ones.

23. Sealing an object globally
    Property descriptors work at the level of individual properties. There are also methods that limit
    access to the whole object:
        Object.preventExtensions(obj)
            Forbids the addition of new properties to the object
        Object.seal(obj)
            Forbids adding/removing of properties. Sets "configurable : false" for all existing properties
        Object.freeze(obj)
            Forbids adding/removing/changing of properties. Sets "configurable: false, writable: false"
            for all existing properties.
        Object.isExtensible(obj)
            Returns false if adding properties is forbidden, otherwise true.
        Object.isSealed(obj)
            Returns true if adding/removing properties is forbidden, and all existing properties have
            "configurable: false"
        Object.isFrozen(obj)
            Returns true if adding/removing/changing properties is forbidden, and all current properties
            are "configurable: false, writable: flase"

24. getters and setters
    There are 2 kinds of object properties. The first kind is data properties. We already know how to 
    work with them. All properties that we've been using until now were data properties.
    The second type of property is something new. It's an accessor property. They are essentially
    functions that execute on getting and setting value, but look like regular properties to an external
    code. Accessor properties are represented by "getter" and "setter" methods. In an object literal they 
    are denoted by "get" and "set"

    Accessor descriptors: They are differnet form those for data properties.
    For accessor properties, there is no value or writable, but instead there are get and set functions.
    That is an accessor descriptor may have:
        get: a function without arguments, that works when a property is read
        set: a function with one argument, that is called when the property is set
        enumerable: same as for data properties
        configurable: same as for data properties
    Note: a property can be either an accessor (has get/set methods) or a data property (has a value)
          but not both at once. And if we try it will give an error.
    
25. Smarter getters/setter
    Getters/Setters can be used as wrappers over "real" property values to gain more control over operations
    with them. We can provide conditions while creating getters/setters so that until that condition is fullfiled
    it will either give an error or handle it differently thus acting as a safety mechanism.

26. Prototypal Inheritance
    [[Prototype]]: In JS, objects have a special hidden property [[Prototype]], that is either null or references
    another object. That object is called a prototype.
    When we try to read a property from object and it's missing JS automatically takes it from the prototype. In 
    programming this is called prototypal inheritance.
    The property [[Prototype]] is internal and hidden, but there are many ways to set it. One of them is to use
    the special name __proto__
    There are only 2 limitations:
    1. The references can't go in circles. JS will throw an error if we try to assign __proto__ in a circle.
    2. The value of __proto__ can be either an object or null. Other types are ignored.
    Also an object can have only one [[Prototype]]. An object may not inherit from 2 others.

    Note: __proto__ is not the same as the internal [[Prototype]] property. It's a getter/setter for [[Prototype]].
          The __proto__ property is a bit outdated. It exists for historical reasons, modern JS suggests that we 
          should use Object.getProtypeOf/Object.setPrototypeOf functions instead that get/set the prototype.
    
    Writing dosen't use prototype
    The prototype is only used for reading properties. Write/delete operations work directly with the object. 
    Note: Accessor properties are an exception, as assignment is handled by a setter function. So writing to
          such a property is actually the same as calling a function
    
    Behaviour of "this" is not affected by prototypes at all. No matter where the method is found: in an object
    or its prototype. In a method call, "this" is always the object befoe the dot. This is an important thing to
    know, because we may have a big object with many methods, and have objects that inherit form it. And when the 
    inheriting methods, they will modify only their own states, not the stated of the big object. 

    Note: for...in loop iterates over inherited properties too. If we want to restrict this behaviour we can use
          a built-in method "obj.hasOwnProperty(key)" : it returns true if obj has its own property named key and 
          is not inherited.
    Note: A literal object by default inherits from Object.prototype. 





*/

// 1. Example 1
{
  console.log("Hello");
  [1, 2].forEach(console.log);

  // BUT if we remove a semicolon
  console.log("Hello"); // Remove ; to see error
  [(1, 2)].forEach(console.log);
  // This will get an error because JS does not
  // assume a semicolon before square brackets.
  // So, the code in the last example is treated
  // as a single statement.
  // JS will see it like this
  // console.log("Hello")[1,2].forEach(console.log);
}

// 11. Example 1
{
  const obj11 = { test: undefined };
  console.log(obj11.test);
  console.log("test" in obj11);
}

// 12. Example 1
{
  const obj12_1 = {
    1: "A",
    3: "A",
    2: "A",
    5: "A",
    4: "A",
    Name: "Ishan",
    Age: 21,
    Gender: "Male",
  };

  const obj12_2 = {
    "+1": "A",
    "+3": "A",
    "+2": "A",
    "+5": "A",
    "+4": "A",
    Name: "Ishan",
    Age: 21,
    Gender: "Male",
  };

  console.log(obj12_1);
  console.log(obj12_2);
}

// 13. Example 1
{
  const var13_1 = Symbol("sym");
  const var13_2 = Symbol("sym");
  console.log(var13_1 === var13_2);
  console.log(var13_1.description === var13_2.description);
}

// 14. Example 1
{
  const obj14_1 = {
    name: "A",
  };

  // ... Inside Script 1
  obj14_1.id = 10;

  // ... Inside Script 2
  obj14_1.id = 20; // OOH NO 'id' will be overwritten here
}

// 14. Example 2
{
  const sy12_1 = Symbol("id");
  const sy12_2 = Symbol("id");

  const obj14_2 = {
    name: "B",
    [sy12_1]: 10,
  };

  obj14_2[sy12_2] = 20;

  console.log(obj14_2);
}

// 15. Example 1
{
  const id15_1 = Symbol("id");
  const obj15_1 = {
    name: "John",
    age: 30,
    [id15_1]: 123,
  };

  for (let key in obj15_1) console.log(key); // name, age (no symbols)

  // the direct access by the symbol works
  console.log("Direct: " + obj15_1[id15_1]); // Direct: 123
}

// 16. Example 1
{
  const id16_1 = Symbol.for("id");

  const id16_2 = Symbol.for("id");

  console.log(id16_1 === id16_2);

  const ghs = {
    cache: 1,
  };

  console.log(ghs);
}

// 18. Example 1
{
  const obj18_1 = {
    sayHi() {
      // ignored
      console.log("Hello");
    },
    [Symbol("id")]: 123, // ignored
    something: undefined, // ignored
  };

  console.log(JSON.stringify(obj18_1)); // {} (empty object)
}

// 18. Example 2
{
  const obj18_2 = {};
  const obj18_3 = {};
  obj18_2.test = obj18_3;
  obj18_3.test = obj18_2;

  console.log(JSON.stringify(obj18_3)); // TypeError: Converting circular structure to JSON
}

// 21. Example 1
{
  const func21_1 = (a) => {
    const cache = {};
    return (a) => {
      if (cache[a]) {
        return cache[a];
      }
      cache[a] = a;
      console.log(a);
      return a;
    };
  };
  const func21_2 = func21_1();
  func21_2(1);
  func21_2(2);
  func21_2(1);
  func21_2(2);
}

// 26. Example 1
{
  const obj26_1 = {
    eats: true,
  };
  const obj26_2 = {
    jumps: true,
  };
  obj26_2.__proto__ = obj26_1;
  console.log(obj26_2.jumps);
  console.log(obj26_2.eats);
}

// 26. Example 2
{
  const animal = {
    eats: true,
    walk() {
      console.log("Animal Walks");
    },
  };
  const rabit = {
    __proto__: animal,
  };
  rabit.walk = function () {
    console.log("Rabit Walks");
  };
  rabit.walk();
}

// 26. Example 3
{
  const user = {
    name: "Ishan",
    surname: "Shukla",
    set fullname(value) {
      [this.name, this.surname] = value.split(" ");
    },
    get fullname() {
      return `${this.name} ${this.surname}`;
    },
  };

  const admin = {
    __proto__: user,
    isAdmin: true,
  };

  console.log(user.fullname);
  console.log(admin.fullname);

  admin.fullname = "Sunil Shukla";

  console.log(user.fullname);
  console.log(admin.fullname);

  user.fullname = "Ishmit Shukla";

  console.log(user.fullname);
  console.log(admin.fullname);
}

// 26. Example 4
{
  const animal = {
    sleep() {
      this.isSleeping = true;
    },
  };
  const rabbit = {
    __proto__: animal,
  };
  rabbit.sleep();
  console.log(rabbit.isSleeping);
  console.log(animal.isSleeping);
}

// 26. Example 5
{
  const animal = {
    eats: true,
  };
  const rabbit = {
    jumps: true,
    __proto__: animal,
  };
  for (const prop in rabbit) {
    const isOwn = rabbit.hasOwnProperty(prop);
    if (isOwn) {
      console.log("own", prop);
    } else {
      console.log("inherited", prop);
    }
  }

  // Pay attention here. Where is the method rabbit.hasOwnProperty coming from?
  // We did not define it.
  // Here we hace the following inheritance chain:
  // rabbit -> animal -> Object.prototype
  // Looking at the chain we can see that the method is provided by Object.prototype.hasOwnProperty
  // In other words it is inherited. Then why it did not appear in the for...in loop.
  // The answer is simple it's not enumerable. Just like all other properties of Object.prototype,
  // it has enumerable: false flag. And for...in only lists enumerable properties.
}
