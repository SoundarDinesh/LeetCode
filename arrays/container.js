var maxArea = function (height) {

    let i =0;
    let j = height.length - 1;

    let maxarea = 0;

    while(i < j) {
        const area = Math.min(height[i], height[j])* (j -i);
         maxarea = Math.max(area, maxarea);

         if(height[i] <= height[j]) {
            i++;
         } else {
            j--;
         }
    }

    return maxarea; 
};

console.log(maxArea([1,2,4,3]));