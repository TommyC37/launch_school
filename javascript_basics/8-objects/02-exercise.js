/* Which of the following values are valid keys for an object?

1               yes
'1'             yes
undefined       no
'hello world'   yes
true            no
'true'          yes

Correction: all of the above are valid keys! However, JS will coerce non-string 
keys values to strings. This means 1 and '1' will be the same. So will true and
'true.' This will prove to be problematic when calling those properties.
*/