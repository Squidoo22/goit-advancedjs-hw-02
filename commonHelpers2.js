import{s as r}from"./assets/x-7a0b0c0a.js";/* empty css                      */import{i as t}from"./assets/vendor-9808d4ac.js";const l="/goit-advancedjs-hw-02/assets/ok-fb8a7a60.svg",s=document.querySelector("form"),m=(o,e)=>(console.log(e),new Promise((f,i)=>{setTimeout(()=>{e==="fulfilled"?f(`Fulfilled promise in ${o}ms`):i(`Rejected promise in ${o}ms`)},o)}));s.addEventListener("submit",o=>{o.preventDefault(),m(s.elements.delay.value,s.elements.state.value).then(e=>{t.show({title:"OK",titleColor:"#ffffff",message:e,messageColor:"#ffffff",color:"#59a10d",position:"topRight",displayMode:1,iconUrl:`${l}`})}).catch(e=>{t.show({title:"Error",titleColor:"#ffffff",message:e,messageColor:"#ffffff",color:"#EF4040",position:"topRight",displayMode:1,iconUrl:`${r}`})}),s.reset()});
//# sourceMappingURL=commonHelpers2.js.map
