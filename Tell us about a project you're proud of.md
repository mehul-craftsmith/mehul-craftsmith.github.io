Tell us about a project you're proud of. 
What was a difficult technical part of it? 
How did you solve it and what tradeoffs did you make?







I am proud of the Data Import project I contributed to, at OneClickLCA.com, a Finnish company.
The difficult technical parts of it were: 
1. The large number of rows it processed from the Excel it imported
2. Many calculations that happened throughout the app

I solved the large number of rows problem by always covering every use case with a test case.
If the deadline wasn't too soon, I always used the TDD approach. But even if the deadline was soon, I always ensured I covered the earlier code with test cases.

About the calculations, I ensured that I first solved them with a pen and paper. Then wrote pseudo code, and only then moved to actual code.
The pen-and-paper and pseudo code methods always brought the fallacies in my thinking to my notice.
It gave me the buffer to clarify with my manager/colleagues in advance, as opposed to - after writing the code and then having to rewrite or raise a ticket.

The tradeoff I made was, going through a slight uncertain phase (pseudo code phase) as soon as I was given the ticket. But it was worth it, in the long term.










The Data Import project at OneClickLCA.com, a Finnish company, was my favorite project. It had "just" 5 steps, but they were analogous to the 16 pieces you control in Chess. The 5 steps processed a Excel sheet which could easily have beyond 10k rows. In one of the steps, these rows got combined based on conditions. Eg: A certain column's values were to be averaged before combining, another's had to be concatenated - but not beyond a limit, etc. Another step ensured that all of these changes got saved as template for other people using the software in their company.

The moving parts, large number of records and inter-dependencies in the team building features were the difficult technicalities.

We solved them by communicating closely, writing thorough tests, and by not going easy on each other's code reviews.

(Thus, it was mandatory to follow ATOM principles - especially Atomicity). Cannot share all the steps' functionality or be specific about this problem, because I signed a NDA with the company. But I hope this gives the gist.