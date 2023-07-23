const myModule = (()=>{
    const privateFoo = () =>{}
    const privateBar = []

    const exported = {
        publicFoo : () => {},
        publicBar : () => {}

      
    }
    return exported;
})()

console.log(myModule);
console.log(myModule.privateFoo, myModule.privateBar)  //저절로 private 됨.