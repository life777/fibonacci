const BigNumber = require("bignumber.js");

BigNumber.config({ 
    DECIMAL_PLACES: 1000,
    EXPONENTIAL_AT: [-1000, 1000],
    POW_PRECISION: 1000
});

module.exports = function fibonacci (index) {
    if (index <= 50) {
        const fiveSqrt = Math.sqrt(5);
        const ratio = (1 + fiveSqrt) / 2;
        const n_ratio = (1 - fiveSqrt) / 2;
        return Math.round(Math.pow(ratio, index) / fiveSqrt - Math.pow(n_ratio, index) / fiveSqrt).toString();
    } else {
        const fiveSqrt = new BigNumber(5).sqrt();
        const ratio = new BigNumber(1).plus(fiveSqrt).dividedBy(2);
        const n_ratio = new BigNumber(1).minus(fiveSqrt).dividedBy(2);
        return ratio.exponentiatedBy(index).dividedBy(fiveSqrt).minus(n_ratio.exponentiatedBy(index).dividedBy(fiveSqrt)).toFixed(0, BigNumber.ROUND_HALF_EVEN);
    }
}