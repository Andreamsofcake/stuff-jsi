// * tip calculator project
// * Purpose to let user know what they should tip based off the amount of the service,
// the type of service and their own generosity.
// * {imput 1} select type of service (choose one: food service, bar, beauty)
// * {imput 2} select how generous you feel (choose one: I'm on a budget, about average,
// * feeling generous)
// * {imput for food service} request amount of the service.
// * {imput for bar service} request number of drinks for bar service.
// * {imput for beauty} request number of hours spent at the service.
// * {out put for food service} is  {14% = budget, 15% = average, 16% = generous; all rounding up 
// * to the nearest .25}
// * {out put bar} is {$1/drink = budget, $2/drink = average, $3/drink = generous}
// * {out put for beauty} is {$4/hour = budge, $5/ hour = average, $6/hour = generous}


 describe('tipCalculator', function() {
  it('To calculate the best amount for each tip', function() {
    expect(foodService, $14.00, budget).to.eql(1);
    expect(barService, 3, generous).to.eql(9);
    expect(beautyService, 2, average).to.eql(10);
   });
 });