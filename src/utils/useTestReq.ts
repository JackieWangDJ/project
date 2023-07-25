interface aaa {
  name?: string;
  age?: number;
  func?: () => void;
}
interface returnType {
  bbb: number;
  ccc: number;
}
type funcType = (obj: aaa) => returnType;
/**
 * useTest is a function that takes an object and performs some operations based on its properties.
 * If the object has an 'age' property, it logs the age.
 * If the object has a 'name' property, it logs the name.
 * If the object has a 'func' property, it calls the function.
 * Finally, it returns an object with properties 'bbb' and 'ccc'.
 *
 * @param obj - The input object
 * @returns An object with properties 'bbb' and 'ccc'
 */
export const useTest: funcType = (obj: aaa) => {
  // Log the age if it exists
  if (obj?.age) console.log(obj?.age);

  // Log the name if it exists
  if (obj?.name) console.log(obj?.name);

  // Call the function if it exists
  if (obj?.func) obj.func();

  // Define local variables
  let bbb = 1;
  let ccc = 2;

  // Return an object with properties 'bbb' and 'ccc'
  return {
    bbb,
    ccc,
  };
};
