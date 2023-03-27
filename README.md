README.md for the nerds

API: https://maplestory.io/ 

  .filter((item, index, self) => self.findIndex(i => i.id === item.id) === index) // filter unique items

Array.prototype.some()
The some() method tests whether at least one element in the array passes the test implemented by the provided function. It returns true if, in the array, it finds an element for which the provided function returns true; otherwise it returns false. It doesn't modify the array.