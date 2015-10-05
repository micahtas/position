/**
 * Created by Micah on 9/22/2015.
 */

/* exported position, testList */

/**
 * Finds the position in the array of numbers, where the number should be inserted
 * @param list the array of numbers.
 * @param target the number to be inserted.
 * @returns {number} the position where it should be inserted.
 */
function position(list, target)
{
  var i = 0;
  while((i < list.length) && (list[i] <= target))
  {
    if(target === list[i])
    {
      return i;
    }
    i++;
  }
  return i;
}

//var testList = [1, 3, 5, 6];

//console.log(position(testList, 5));
//console.log(position(testList, 2));
//console.log(position(testList, 7));
//console.log(position(testList, 0));
