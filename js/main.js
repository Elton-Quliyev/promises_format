
//musderi gelir bosqabda duzlu ve istiotlu yumurta isdiyir sifaris verir

let is_shop_open = true;

let order = ( time, work ) => {

  return new Promise( ( resolve, reject )=>{

    if( is_shop_open ){

      setTimeout(()=>{

        resolve( work() )

       }, time)

    }

    else{
      reject( console.log("Our shop is closed") )
    }

  })
}

var stocks = {
  mehsullar : [ "yumurta" , "sosiska" , "kolbasa"],
  qablar : [ "bosqab" , "tava" , "coreyarasi"],
  inqridientler : ["duz" , "istiot" , "pul biber"]
}

order(2000, ()=>console.log(`${stocks.mehsullar[0]} ,mehsulumuz secilir`))

.then(()=>{
  return order(0,()=>console.log('hazirlamaga baslanilir'))
})

.then(()=>{
  return order(2000, ()=>console.log("yumurta sindirilir ve kasaya tokulur"))
})

.then(()=>{
  return order(1000, ()=>console.log(`${stocks.inqridientler[0]} and ${stocks.inqridientler[1]} ,duz ve isdiot elave edilir`))
})

.then(()=>{
  return order(1000, ()=>console.log("yumurta tavaya tokulur"))
})

.then(()=>{
  return order(2000, ()=>console.log("yumurta bisdi"))
})

.then(()=>{
  return order(3000, ()=>console.log(`${stocks.qablar[0]} ,yumurta bosqaba tokulur`))
})

.then(()=>{
  return order(2000, ()=>console.log("sifaris servis edilir"))
})