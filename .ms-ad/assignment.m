syms y(x);
ode=diff(y,x)== y;
cond=y(0)==1;
sol(x)=dsolve(ode,cond)

%EULER
x0=0;
xn=5;
y=1;
h=0.5;

fprintf("x\t\t\t y\n");

for x= x0:h:xn
    y = y +sol(x)*h;
    fprintf("%f\t\t%f \n",x,y);
    
end   

