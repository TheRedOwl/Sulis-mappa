const vizsgal = (nr)=>{
    if(nr>0) return "pozitív"
    if(nr<0) return "negatív"
    if(nr==null) return"nincs értéke"
    return "nulla"
}

const haromszog=(a,b,c)=>{
    if(a==b && b==c) return "egyenlő oldalú"
    if((a+b >= c || b+c >= a || c+a >= b) && (a==b || b==c || c==a)) return "egyenlő szárú"
    if(a+b < c || b+c < a || c+a < b) return "egyenlőtlenség"
    if(a+b > c || b+c > a || c+a > b) return "általános"
}