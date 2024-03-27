const chai = window.chai;
const expect=chai.expect;

let name=[]
let age=[]
let payment=[]
let job=[]

describe("Dolgozók létszáma", ()=>{
    it("térítse vissza a dolgozók létszámát", ()=>{
        const dolgozok1 = [{
            nev: "Koaxk Ábel",
            kor: 23,
            fizetes: 400000,
            beosztas: "Rendszergazda"
        },
        {
            nev: "Zsíros B. Ödön",
            kor: 45,
            fizetes: 1200000,
            beosztas: "Ügyvezető Igazgató"
        },
        {
            nev: "Meg Győző",
            kor: 32,
            fizetes: 600000,
            beosztas: "Marketing Manager"
        }]
        expect(DolgozokSzama(dolgozok1)).to.deep.equal(3)
    })
    it("térítsen vissza 0-t", ()=>{
        const dolgozok2 = []
        expect(DolgozokSzama(dolgozok2)).to.deep.equal(0)
    })
    it("térítsen vissza 0-t ha megahtározhatatlan", ()=>{
        const dolgozok2 = [{
            nev: undefined,
            kor: 45,
            fizetes: 1200000,
            beosztas: "Ügyvezető Igazgató"
        }]
        expect(DolgozokSzama(dolgozok2.nev)).to.deep.equal(0)
    })
})

describe("Dolgozók kora", ()=>{
    it("térítse vissza a dolgozók átlagkorát", ()=>{
        age=[]

        const dolgozok2 = [{
            nev: "Koaxk Ábel",
            kor: 23,
            fizetes: 400000,
            beosztas: "Rendszergazda"
        },
        {
            nev: "Zsíros B. Ödön",
            kor: 45,
            fizetes: 1200000,
            beosztas: "Ügyvezető Igazgató"
        }]

        dolgozok2.forEach((element)=>{
            age.push(element.kor)
        })
        expect(AtlagKor(age)).to.deep.equal(34)
    })

    it("térítsen vissza 0-t ha nincs kor", ()=>{
        age=[]

        const dolgozok2 = [{
            nev: "Koaxk Ábel",
            kor: null,
            fizetes: 400000,
            beosztas: "Rendszergazda"
        },
        {
            nev: "Zsíros B. Ödön",
            kor: null,
            fizetes: 1200000,
            beosztas: "Ügyvezető Igazgató"
        }]

        dolgozok2.forEach((element)=>{
            age.push(element.kor)
        })
        
        expect(AtlagKor(age)).to.deep.equal(0)
    })
})

describe("Dolgozók fizetése", ()=>{
    it("térítse vissza a dolgozók átlagfizetését", ()=>{
        let payment=[]
        
        const dolgozok3 = [{
            nev: "Zsíros B. Ödön",
            kor: 45,
            fizetes: 1200000,
            beosztas: "Ügyvezető Igazgató"
        },
        {
            nev: "Meg Győző",
            kor: 32,
            fizetes: 600000,
            beosztas: "Marketing Manager"
        }]

        dolgozok3.forEach((element)=>{
            payment.push(element.fizetes)
        })
        expect(AtlagFizetes(payment)).to.deep.equal(900000)
    })

    it("térítsen vissza 0-t ha a dolgozók nem kapnak fizetést", ()=>{
        let payment=[]
        
        const dolgozok3 = [{
            nev: "Zsíros B. Ödön",
            kor: 45,
            fizetes: null,
            beosztas: "Ügyvezető Igazgató"
        },
        {
            nev: "Meg Győző",
            kor: 32,
            fizetes: null,
            beosztas: "Marketing Manager"
        }]

        dolgozok3.forEach((element)=>{
            payment.push(element.fizetes)
        })

        expect(AtlagFizetes(payment)).to.deep.equal(0)
        expect(LegkisebbFizetes(payment)).to.deep.equal(0)
        expect(LegnagyobbFizetes(payment)).to.deep.equal(0)
    })

    it("térítse vissza a legnagyobb fizetést", ()=>{
        let payment=[]
        
        const dolgozok3 = [{
            nev: "Békés Csaba",
            kor: 63,
            fizetes: 180000,
            beosztas: "Takarító"
        },
        {
            nev: "Pofá Zoltán",
            kor: 25,
            fizetes: 300000,
            beosztas: "Biztonsági Őr"
        },
        {
            nev: "Fejet Lenke",
            kor: 22,
            fizetes: 220000,
            beosztas: "Irodai Titkár"
        }]

        dolgozok3.forEach((element)=>{
            payment.push(element.fizetes)
        })

        expect(LegnagyobbFizetes(payment)).to.deep.equal(300000)
    })

    it("térítse vissza a legkisebb fizetést", ()=>{
        let payment=[]
        
        const dolgozok3 = [{
            nev: "Békés Csaba",
            kor: 63,
            fizetes: 180000,
            beosztas: "Takarító"
        },
        {
            nev: "Pofá Zoltán",
            kor: 25,
            fizetes: 300000,
            beosztas: "Biztonsági Őr"
        },
        {
            nev: "Fejet Lenke",
            kor: 22,
            fizetes: 220000,
            beosztas: "Irodai Titkár"
        }]

        dolgozok3.forEach((element)=>{
            payment.push(element.fizetes)
        })

        expect(LegkisebbFizetes(payment)).to.deep.equal(180000)
    })
})