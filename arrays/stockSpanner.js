
var StockSpanner = function() {
    this.minStack = [];
    this.popCountStack = [];
    
};

/** 
 * @param {number} price
 * @return {number}
 */
StockSpanner.prototype.next = function(price) {
    const popCount = 0;
    while(this.minStack.length > 0) {
        if(price > this.minStack[this.minStack.length - 1]) {
            this.minStack.pop();
            popCount += this.popCountStack.pop();
        } else {
            break;
        }
    }

    const span = popCount + 1;

    this.minStack.push(price);
    this.popCountStack.push(span);
    return span;
};

var obj = new StockSpanner();
var param_1 = obj.next(10);