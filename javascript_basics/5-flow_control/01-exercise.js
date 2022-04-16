false || (true && false);
// false...correct
true || (1 + 2);
// true...correct
(1 + 2) || true;
// true...wrong, evaluates to 3
true && (1 + 2);
// true...wrong, evalutes to 3
false && (1 + 2);
// false...correct
(1 + 2) && true;
// true...correct
(32 * 4) >= 129;
// false
false !== !true;
// false
true === 4;
// false (because true does not equal truthy)
false === (847 === '847');
// false (because false does not equal falsy)...wrong! It's true
false === (847 == '847');
// false...correct
(!true || (!(100 / 5) === 20) || ((328 / 4) === 82)) || false;
// true...correct!