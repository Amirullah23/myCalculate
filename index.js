/*  1 2 3
    4 5 6
    7 8 9 */

/*  1 2 3 1 2
    4 5 6 4 5
    7 8 9 7 8*/
//[mtx[0],mtx[1],mtx[2],mtx[0],mtx[1],mtx[3],mtx[4],mtx[5],mtx[3],mtx[4],mtx[6],mtx[7],mtx[8],mtx[6],mtx[7]]
//[mtx[0],mtx[1],mtx[2],mtx[3],mtx[4],mtx[5],mtx[6],mtx[7],mtx[8],mtx[9],mtx[10],mtx[11],mtx[12],mtx[13],mtx[14]]
var mtxf = []

var rsldet;

function klik() {
        console.log(mtxf.length);  
        if(mtxf.length >= 9) {
            mtxf = []
        }
        let data = document.getElementsByClassName("inp")       
        for(i = 0; i < data.length; i++) {
            mtxf.push(parseInt(data[i].value))
        }      
        console.log(mtxf);  
        parent(mtxf)
        minor(mtxf)

        document.getElementById("invers").style.display = "block"
}
       
    

function parent(mtxf) {
    let mtx = mtxf
    let tmp = []

    function chtodet() {
        return tmp = [mtx[0],mtx[1],mtx[2],mtx[0],mtx[1],mtx[3],mtx[4],mtx[5],mtx[3],mtx[4],mtx[6],mtx[7],mtx[8],mtx[6],mtx[7]]
    }

    chtodet()

    console.log(tmp);

    let plus;
    let minus;
    let determinan;

    function plusKali() {
        let a = tmp[0] * tmp[6] * tmp[12]
        let b = tmp[1] * tmp[7] * tmp[13]
        let c = tmp[2] * tmp[8] * tmp[14]
        console.log(a);
        console.log(b);
        console.log(c);

        
       return plus = a + b + c
    }
    function minusKali() {
        let a = tmp[2] * tmp[6] * tmp[10]
        let b = tmp[3] * tmp[7] * tmp[11]
        let c = tmp[4] * tmp[8] * tmp[12]
        console.log(a);
        console.log(b);
        console.log(c);

       return minus = a + b + c
    }

    function determian() {
        return determinan = plus - minus
    }

    plusKali()
    minusKali()
    determian()

    console.log(plus);
    console.log(minus);
    console.log(determinan);
    document.getElementById("inihasilnya").innerHTML = determinan

    return rsldet = determinan

}

function reset() {
    window.location.reload()
}



    
function minor(mtxf) {
    let z = mtxf

    let a = z[4] * z[8] - z[5] * z[7]
    let b = z[3] * z[8] - z[5] * z[6]
    let c = z[3] * z[7] - z[4] * z[6]
    let d = z[1] * z[8] - z[2] * z[7]
    let e = z[0] * z[8] - z[2] * z[6]
    let f = z[0] * z[7] - z[1] * z[6]
    let g = z[1] * z[5] - z[2] * z[4]
    let h = z[0] * z[5] - z[2] * z[3]
    let i = z[0] * z[4] - z[1] * z[3]


    let minorA = [+a,-b,+c,-d,+e,-f,+g,-h,+i]

    let adj = [ minorA[0],minorA[3],minorA[6],
                minorA[1],minorA[4],minorA[7],
                minorA[2],minorA[5],minorA[8]]
                console.log(minorA);
                console.log(adj);
    let invers = [] 
    let inversOri = [] 



    for(i = 0; i < adj.length; i++) {
        str = 1 / rsldet * adj[i]
       
        invers.push(str.toString())
        inversOri.push(adj[i])
        
    }

        console.log(invers, "invers ori");

        inversSecond = []
        inversSecondKey = []

        for (h = 0; h < invers.length; h++) {
            console.log(invers[h])
            let tmpinvers = invers[h]
           for (j = 0; j < tmpinvers.length; j++) {
               console.log("brp kali")
               if (tmpinvers[j] == ".") {

                    inversSecond.push(`1 / ${rsldet} * ${inversOri[h]}`) 
                    inversSecondKey.push(h)
               }
               
           }
            
        }

        console.log(inversSecond);
        console.log(inversSecondKey,"keyy");

        for (let o = 0; o < inversSecondKey.length; o++) {
            invers.splice(inversSecondKey[o], 1, inversSecond[o])
            
        }

        console.log("hasil akhir invers", invers)

let appendd = document.getElementsByClassName("invershehe")
for (let k = 0; k < invers.length; k++) {
    appendd[k].value = invers[k]
    
}
        
}















