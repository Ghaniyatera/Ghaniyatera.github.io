//pengkondisian
//tdk direkom pake var, tpi pake let ajjah
//klo double ==, dia cek data, klo = itu pengisian variabel, === cek tipe data
//CONST, nilainy konstan, dk bisa diubah
const variabelTiga = 4


let statusKelulusan = "true"
if (statusKelulusan === true) {
    console.log("Kamu lulus")
} else if (statusKelulusan = "bersyarat") {
    console, log("Lulus bersyarat")
}
else {
    console.log("Dk lulus weeek")
}

let hari = "Sabtu"
if (hari === "Senin"){
    console.log("Hari Kerja")
} else if (hari === "Selasa"){
    console.log("Hari Kerja")
}else if (hari === "Rabu"){
    console.log("Hari Kerja")
}else if (hari === "Kamis"){
    console.log("Hari Kerja")
}else if (hari === "Jumat"){
    console.log("Hari Kerja")
}else if (hari === "Sabtu"){
    console.log("Hari Libur")
} else if (hari === "Minggu"){
    console.log("Hari Libur")
}else {
    console.log("Bukan hari")
}

//DISINGKAT DG SWITCH CASE
switch(hari){
    case "Senin" :
    case "Selasa" :
    case "Rabu":
    case "Kamis":
    case "Jumat":
    console.log("Hari Kerja")
    break
    case "Sabtu":
    case "Ahad":
    console.log("Hari Libur")
    break
    default : 
        console.log("Bukan hari")
}

//PENGULANGAN
for(let i = 1; i<=10; i++){
    console.log(i)
}

let listNama = ["nama1", "nama2", "nama3"]
for (let i=0; i<= listNama.length; i++){
    console.log(listNama[i]) //perhatikan ini
}