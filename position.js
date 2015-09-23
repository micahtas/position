/**
 * Created by Micah on 9/22/2015.
 */

var testlist = [1, 3, 5, 6];

function position(list, target)
{
  var i = 0;
  while((i < list.length) &&(list[i] <= target))
  {
    if(target === list[i])
    {
      return i;
    }
    i++;
  }
  return i;
}
console.log(position(testlist, 5));
console.log(position(testlist, 2));
console.log(position(testlist, 7));
console.log(position(testlist, 0));
