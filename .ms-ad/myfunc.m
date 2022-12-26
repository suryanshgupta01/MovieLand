x=0:5;
y=[15,10,9,6,2,0];
interp1(x,y,3.5);


newx=0:0.2:5;
newy=interp1(x,y,newx)

