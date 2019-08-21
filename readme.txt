Hi All, This is a brilliant Lunch page. 
----------------------------------------
Here based on the given input it will highlight the corresponding best matched output.

To run this program,
1)Download it
2)Run Lunch.html
3)To give custom inputs and test-> open lunch.html -> 
	goto line number 21 -> here "input" array is defined. -> You can give your custom inputs also for testing.
	You can change the "input" array here or modify and save the lunch.html and run lunch.html again.
4)New result will be shown in the UI.


ABOUT THE CODE STRUCTURE
----------------------------
The Code starts with lunch.html.
Here we have included self made Style.CSS, lunch.js and other files.

In lunch.html->
    We have defined "input" array, and we have called our main function "matchLunchEvent()".
    All the logic event logic is written in Lunch.js and "matchLunchEvent()" function is also defined there.
    This function return the index of the best marched lunch else it returns "No Match".
    Based on this on ui we are displaying thr colours.


Thought Process:
------------------
 
 The main idea while building this was to make a function ready which will give me match or no match for lunch.

 Then make a basic block for calender and render all the events using a loop.

 And based on matched index we will change the colours of the events.

----------------------------------------------------------------------------------------------------------------------------
 Thanl You !!


