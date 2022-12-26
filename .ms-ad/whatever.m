syms y(x)

Dy = diff(y);
D2y= diff(y,x,2);

ode = D2y + Dy*1000 + 10000000*y == 0;

cond1 = Dy(0) == 10000;

soln(x) = dsolve(ode,cond1);

ans = simplify(soln)

%plot(x,ans)

% the answer output which can in the right

%ans(x) =
 
%- C1*exp(-500*x)*sin(500*39^(1/2)*x) - exp(-500*x)*cos(500*39^(1/2)*x)*(39^(1/2)*C1 + 20)