import {expect} from '@esm-bundle/chai';

export function sum(a, b) {
    return a + b;
}

describe('Sum Test', () => {
    it('sums up 2 numbers', () => {
        expect(sum(1, 1)).to.equal(2);
        expect(sum(3, 12)).to.equal(15);
    });
});
