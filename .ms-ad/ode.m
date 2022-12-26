syms y(x)

Dy = diff(y);
D2y= diff(y,x,2);

ode = D2y + Dy*1000 + 10000000*y == 0;

cond1 = Dy(0) == 10000;

soln(x) = dsolve(ode,cond1);

ans = simplify(soln)
