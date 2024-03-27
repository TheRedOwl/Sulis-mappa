function applyDiscountOrPoints (config) {
    let {hasCard, decision, payment, points}=config
    if(hasCard) payment>=50000 ? decision=="k" ? payment-=payment*0.05 : points+=Math.floor(payment/1000) : points+=Math.floor(payment/1000) 
    else if(payment>=50000) payment-=payment*0.05
    /*if(hasCard){
        if (payment>=50000) {
            if(decision=="k") payment-=payment*0.05
            else points+=Math.floor(payment/1000)
        }else points+=Math.floor(payment/1000)
    }else{//nincs kártya
        if(payment>=50000) payment-=payment*0.05
    }*/
    config.payment=payment
    config.points=points
    return config
}

let config1={
    payment:100000,
    hasCard:true,
    decision:"p",
    points:10
}
console.log(applyDiscountOrPoints(config1));