syms y(x);
ode=diff(y,x)== y;
cond=y(0)==1;
f(x)=dsolve(ode,cond);

%RUNGA KUTTA METHOD
x0=0;
y=1;
h=0.5;
xn=5;

for i=0:1:xn
    fprintf('Value of y at x = %d is %f \n',x,f(x));
    k1 = h.*f (x,y);
    k2 = h.*f(x+h/2, y+kl/2);
    k3 = h.*f(x+h/2, y+k2/2);
    k4 = h.*f(x+h, y+k3);
    k=(k1+2.*k2+2.*k3+k4)./6;
    x=x+h;
    y=y+k;

end


 

 
