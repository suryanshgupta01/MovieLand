smooth_x=0:0.2:5;
y4=polyval(polyfit(x,y,4),smooth_x);

plot(x,y,'o',smooth_x,y4)
subplot(2,1,1)
plot(x,y,'o',smooth_x,y4)
axis([0,6,-5,15])
