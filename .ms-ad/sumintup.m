function sumintup(N,M)
total=0;
for n=1:1:N
    for m=1:1:M
        fprintf('%d ',n*m);
    end
    fprintf('\n');
end
fprintf('%d',total);
end

