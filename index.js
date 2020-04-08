/*  1 2 3
    4 5 6
    7 8 9 */

/*  1 2 3 1 2
    4 5 6 4 5
    7 8 9 7 8*/
//[mtx[0],mtx[1],mtx[2],mtx[0],mtx[1],mtx[3],mtx[4],mtx[5],mtx[3],mtx[4],mtx[6],mtx[7],mtx[8],mtx[6],mtx[7]]
//[mtx[0],mtx[1],mtx[2],mtx[3],mtx[4],mtx[5],mtx[6],mtx[7],mtx[8],mtx[9],mtx[10],mtx[11],mtx[12],mtx[13],mtx[14]]

    var mtxf = []

    function klik() {
        let data = document.getElementsByClassName("inp")       
        for(i = 0; i < data.length; i++) {
            mtxf.push(parseInt(data[i].value))
        }      
        console.log(mtxf);  
        parent(mtxf)
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

    

}
    
    




