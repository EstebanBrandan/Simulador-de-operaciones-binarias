const convertir = ()=>{
    const resultadoEntero = document.createElement("p");
    let resultado=convertirEnteroABinario(parseInt(document.getElementById('enteroAConvertir').value));
    document.getElementById("enteroABinario").appendChild(resultadoEntero);
    resultadoEntero.textContent=`Resultado: ${resultadoExpresadoEnDosALaNBits(resultado)}`;
    const resultadoHexadecimal = document.createElement("p");
    document.getElementById("hexadecimalABinario").appendChild(resultadoHexadecimal);
    resultadoHexadecimal.textContent=`Resultado: ${convertirHexadecimalABinario(document.getElementById("hexadecimalAConvertir").value)}`;
}

const convertirEnteroABinario = entero =>{
    let binario=[];
    let binarioARetornar=0;
    while (entero>=2){
        binario.push(entero % 2);
        entero=entero/2;
        entero=Math.floor(entero);
    }
    binario.push(entero);
    binario=binario.reverse();
    binario.forEach(function pasarABinario(bit, index, array){
        binarioARetornar*=10;
        binarioARetornar+=bit;
    });
    return binarioARetornar;
}

const convertirHexadecimalABinario=hexadecimal=>{
    let char;
    let binarioARetornar="";
    console.log(typeof(hexadecimal));
    const hexadecimales = ["0","1","2","3","4","5","6","7","8","9","A","B","C","D","E","F"];
    for (let i=0; i<hexadecimal.length; i++){
        if (hexadecimales.includes(hexadecimal.charAt(i))==false){
            console.log("el hexadecimal no es valido");
        }else{
            char=hexadecimales.findIndex((element)=>element==hexadecimal.charAt(i))
            binarioARetornar=`${binarioARetornar}${resultadoExpresadoEnDosALaNBits(convertirEnteroABinario(parseInt(char)))}`
        }
    }
    return binarioARetornar;
}

const resultadoExpresadoEnDosALaNBits = (resultadoEntero)=>{
    let resultadoString = `${resultadoEntero}`;
    let cerosAAniadir;
    switch ((resultadoString.length)%4){
        case 3:
            cerosAAniadir="0";
            break;
        case 2:
            cerosAAniadir="00";
            break;
        case 1:
            cerosAAniadir="000";
            break;
        default:
            cerosAAniadir="";
    }
    return `${cerosAAniadir}${resultadoString}`;
}