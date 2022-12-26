syms y(x);
ode=diff(y,x)== y;
cond=y(0)==1;
sol(x)=dsolve(ode,cond);

%TRAPEZOIDAL
a=0;
b=5;
n=10;
h=(b-a)/n;

s=0.5*(sol(a)+sol(b));
for i=1:n-1
    s=s+sol(a+i*h);
end
I=h*s;
fprintf("%f",I);
