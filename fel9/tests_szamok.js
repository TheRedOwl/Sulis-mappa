const chai=window.chai
const expect=chai.expect

describe("számok kiértékelése",()=>{
    it("negatív érték esetén megfelelő üzenet",()=>{
        expect(vizsgal(-25)).to.equal("negatív")
    })
    it("pozitív érték esetén megfelelő üzenet",()=>{
        expect(vizsgal(25)).to.equal("pozitív")
    })
    it("nulla érték esetén megfelelő üzenet",()=>{
        expect(vizsgal(0)).to.equal("nulla")
    })
    it("null érték esetén megfelelő üzenet",()=>{
        expect(vizsgal(null)).to.equal("nincs értéke")
    })
})

describe("háromszög vizsgálata",()=>{
    it("mind 3 oldal egyenlő",()=>{
        expect(haromszog(10,10,10)).to.equal("egyenlő oldalú")
    })
    it("2 oldal ugyan akkora és egyenlőség esetén egyenlő szárú a háromszög",()=>{
        expect(haromszog(10,15,15)).to.equal("egyenlő szárú")
        expect(haromszog(15,10,15)).to.equal("egyenlő szárú")
        expect(haromszog(15,15,10)).to.equal("egyenlő szárú")
    })
    it("2 oldal ugyan akkora és egyenlőtlenség esetén nem egyenlő szárú a háromszög",()=>{
        expect(haromszog(10,15,30)).to.equal("egyenlőtlenség")
        expect(haromszog(30,10,15)).to.equal("egyenlőtlenség")
        expect(haromszog(15,30,10)).to.equal("egyenlőtlenség")
    })
    it("nem egyeznek meg az oldalak",()=>{
        expect(haromszog(10,5,15)).to.equal("általános")
    })
})