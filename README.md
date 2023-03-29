README.md for the nerds

API: https://maplestory.io/ 

  .filter((item, index, self) => self.findIndex(i => i.id === item.id) === index) // filter unique items

Array.prototype.some()
The some() method tests whether at least one element in the array passes the test implemented by the provided function. It returns true if, in the array, it finds an element for which the provided function returns true; otherwise it returns false. It doesn't modify the array.

  onClick={(set) => () => handleSetClick(set)}
In JavaScript, when an event listener is added to an element, it is passed an event object as its first parameter. The event object contains information about the event that occurred, such as the target element that was clicked.

In the code we modified, the handleSetClick function was previously defined to expect an event object as its parameter, which was not being used. This caused the function to run immediately on page load, since it was not waiting for an actual click event to occur.

By changing the function signature to take in the set object directly, we remove the dependency on the event object and allow the function to be called only when a click event occurs on an element that triggers this event listener.The concept of closures is a fundamental feature of functional programming and is used in many programming languages, including JavaScript. A closure is created when a function is defined inside another function and the inner function refers to variables in the outer function's scope. The inner function has access to the outer function's variables, even after the outer function has returned. This makes closures a powerful way to create functions that "remember" values from the outer scope.

This is an example of a technique called "currying". The outer function essentially creates a closure around the set variable so that the inner function can access it when it is eventually executed.

When the onClick event is triggered, it will call the returned inner function, passing it the event object as its first parameter. However, in this case, the inner function doesn't need access to the event object, so it doesn't include a parameter for it. It only needs access to the set variable that was captured in the closure.

By returning a function from another function, we are able to create a "partially applied function". The inner function has access to the set variable, which is a value that will be determined at the time the outer function is called. When the inner function is eventually called in response to the onClick event, it will have access to this value even though it wasn't passed as a parameter.

This technique can be useful when we need to set up event handlers that require access to additional data beyond what is provided by the event object.

basically just makes it a function, and function waits to be executed

if i apply this to items only, it works 
updatedItems.sort((a, b) => a.title.localeCompare(b.title));
but sets is a bit more delicate because they have the same title 
so i 
 // sort by category
                updatedItems.sort((a,b) => {
                    //if it contains "set" push downwards
                    if (a.title.includes("Set") && !b.title.trim().includes("Set")) {
                        return 1;
                    }
                    else if (!a.title.includes("Set") && b.title.trim().includes("Set")) {
                        return -1;
                    }
                    //if both contain/dont contain space, compare alphabetically
                    else {
                        return a.title.localeCompare(b.title);
                    }
                })
                
