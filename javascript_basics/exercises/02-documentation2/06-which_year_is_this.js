/*
    MDN lists two ways to get the current year? What is the difference between the two different methods?

    1. today.getYear() returns the number of the year (local time) minus 1900. Years before 2000 will be less than
        100 and after 2000 will be greater than 100. NOTE: this method has been deprecated.
    2. today.getFullYear() returns the actual year (according to local time)
*/