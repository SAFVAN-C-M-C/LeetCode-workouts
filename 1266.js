var minTimeToVisitAllPoints = function(points) {
    let totalTime=0
    for(let i=1;i<points.length;i++){
        let [x1,y1]=points[i-1];
        let [x2,y2]=points[i];
        
        let horzon=Math.abs(x2-x1);
        let vert=Math.abs(y2-y1);

        let diagonal=horzon>vert?vert:horzon;

        let remainingHorizontal=horzon-diagonal;
        let remainingVertical=vert-diagonal;

        totalTime+=diagonal+remainingHorizontal+remainingVertical
    }
    return totalTime
};
console.log(minTimeToVisitAllPoints([[1,1],[3,4],[-1,0]]));