const chai = window.chai;
const expect = chai.expect;

describe("Pontgyűjtés vagy leértékelés", () => {
    it("van kártya, 50e felett vásárol, kedvezményt kér", () => {
        let config = {
            payment: 100000,
            hasCard: true,
            decision: "k",
            points: 10,
        };
        expect(applyDiscountOrPoints(config)).to.deep.equal({
            payment: 95000,
            hasCard: true,
            decision: "k",
            points: 10,
        });
    });

    it("nincs kártya, 50e felett vásárol, kedvezményt kap", () => {
        let config = {
            payment: 100000,
            hasCard: false,
            decision: "k",
            points: 10,
        };
        expect(applyDiscountOrPoints(config)).to.deep.equal({
            payment: 95000,
            hasCard: false,
            decision: "k",
            points: 10,
        });
    });

    it("van kártya, 50e felett vásárol, pontot kér", () => {
        let config = {
            payment: 100000,
            hasCard: true,
            decision: "p",
            points: 10,
        };
        expect(applyDiscountOrPoints(config)).to.deep.equal({
            payment: 100000,
            hasCard: true,
            decision: "p",
            points: 110,
        });
    });

    it("nincs kártya, 50e felett vásárol, pont kér", () => {
        let config = {
            payment: 100000,
            hasCard: false,
            decision: "p",
            points: 10,
        };
        expect(applyDiscountOrPoints(config)).to.deep.equal({
            payment: 100000,
            hasCard: false,
            decision: "p",
            points: 110,
        });
    });

    it("van kártya, 50e alatt vásárol, kedvezményt kér", () => {
        let config = {
            payment: 10000,
            hasCard: true,
            decision: "k",
            points: 10,
        };
        expect(applyDiscountOrPoints(config)).to.deep.equal({
            payment: 9500,
            hasCard: true,
            decision: "k",
            points: 10,
        });
    });

    it("nincs kártya, 50e alatt vásárol, kedvezményt kér", () => {
        let config = {
            payment: 10000,
            hasCard: false,
            decision: "k",
            points: 10,
        };
        expect(applyDiscountOrPoints(config)).to.deep.equal({
            payment: 9500,
            hasCard: false,
            decision: "k",
            points: 10,
        });
    });

    it("van kártya, 50e alatt vásárol, pontot kér", () => {
        let config = {
            payment: 10000,
            hasCard: true,
            decision: "p",
            points: 10,
        };
        expect(applyDiscountOrPoints(config)).to.deep.equal({
            payment: 10000,
            hasCard: true,
            decision: "p",
            points: 20,
        });
    });

    it("nincs kártya, 50e alatt vásárol, pontot kap", () => {
        let config = {
            payment: 10000,
            hasCard: false,
            decision: "p",
            points: 10,
        };
        expect(applyDiscountOrPoints(config)).to.deep.equal({
            payment: 10000,
            hasCard: false,
            decision: "p",
            points: 20,
        });
    });
});