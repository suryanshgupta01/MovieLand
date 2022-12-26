dy = @(x,y)x*y;
f = @(x)exp(x*2/2);

x0=0;
xn=2;
y=1;
h=0.5;

fprintf("%f %f %f \n", x0,y,f(x0));
for x= x0:h:xn
    y = y + dy(x,y)*h; 
fprintf("%f %f %f \n", x,y,f(x));
end


