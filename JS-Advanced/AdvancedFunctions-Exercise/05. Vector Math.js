(function () {
    return {
        add: function (x, y) {
            let sumV1 = x[0] + y[0];
            let sumV2 = x[1] + y[1];

            return [sumV1, sumV2];
        },
        multiply: function (x, scalar) {
            let mulA = x[0] * scalar;
            let mulB = x[1] * scalar;

            return [mulA, mulB];
        },
        length: function (x) {
            return Math.sqrt((x[0]*x[0]) + (x[1] * x[1]));
        },
        dot: function (x, y) {
            return (x[0] * y[0]) + (x[1] * y[1]);
        },
        cross: function (x, y) {
            return (x[0] * y[1]) - (x[1] * y[0]);
        }
    }
})();