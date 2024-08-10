//java script: u/ manipulasi dom, dan catch API untuk backend
//dokumentasiny di mdn
//VARIABLE (tdk boleh diawali angka, tdk ada spasi, direkomendasikan camel case (ex: satuDua), bs pake underscore)
//COPAS KE BAWAH: ALT SHIFT BAWAH
var variabelSatu

//tipe data string (stlah = "....")
var stringSatu = "Ghina"

//u mencetak isi variabel gnkan console.log
console.log(stringSatu)

//TIPE DATA ANGKA
var angka = 1
var angkaDesimal = 1.33

//OPERASI MATEMATIKA TIPE DATA ANGKA
/*
OPERASI MATEMATIKA: +=, -=, /=, * /, **, *% */
var jumlah = angka + angkaDesimal
console.log("JUMLAH ANGKA ADALAH", jumlah) //INGAT PKE KOMA

console.log(50 / 2)
console.log(10 * 2)
console.log(10 - 5)
console.log(10 ** 2)
console.log(10 % 2)

var angka2 = "1"
var angka3 = 1

//KONVERSI TIPE DATA, DIPAKSA JADI ANGKA STRINGNYA
var jumlahhh = Number(angka2) + angka3
console.log(jumlahhh)

//KLO STRING KETEMU ANGKA, ANGKA JDI STRING JG, JADI HASILNY 11
var jmlh = angka2 + angka3
console.log(jmlh)

//KONKATENASI (menggabungkan string) dg penjumlahan
var kata = "Apa"
console.log(kata + " " + angka2 + "uhuuuy")

//TIPE DATA BOOLEAN, 2 nilai: TRUE and FALSE
var data1 = 2
if (data1 > 2) {
    console.log(true)
} else {
    console.log(false)
}

//TIPE DATA ARRAY: TIPE DATA YG MENYIMPAN BANYAK TIPE DATA
var array = [1, "Asoy", "WOY", true, 1.6,
    [1, 2, 3,
        ["BUDI"]
    ]
]
console.log(array)

//array punya INDEX, mewakilkan POSISI DATA, mulai dari NOL
console.log(array[0])
console.log(array[5][2])//U melihat ARRAY DALAM ARRAY

//MENGUBAH ISI ARRAY
console.log(array[0] = "GHINS")

//TIPE DATA OBJECT, tipe data KEY VALUE
//KEY HARUS STRING, value bebas. Bahkan bs OBJECT dalam OBJECT
var object = {
    "nama": "Makassar",
    "keyvalue": "kedua",
    "hobi": [1, 2, 3],
    "sekolah": {
        "nama": "Sekola1",
        "kelas": "2",
        "lulus": true,
        "guru": [
            {
                "nama": "Sule"
            },
            {
                "nama": "Parto"
            }
        ]
    }
}
console.log(object["keyvalue"])
console.log(object["sekolah"]["guru"][0]["nama"]) //hasil akhirny Sule

//buat object dg isi biodata diri
var obj = {
    "nama": "Andi Ghaniyatera",
    "alamat": "Makassar",
    "umur": 19,
    "hobi": "tidur",
    "sekolah": [{
        "namasekolah" : "man ic",
        "Absen" : [
            {
                "nama": "aghniy",
                "kelas": "XII",
                "no absen": 2
            },
            {
                "nama": "zaki",
                "kelas": "XI",
                "no absen": 4
            },
            {
                "nama": "dahren",
                "kelas": "XI",
                "no absen": 5
            }
        ]
    }]
}
console.log(obj["sekolah"][0]["Absen"][1]["nama"]) //PERHATIKAN ARRAY DIKASI ISI 0, KRN SATU JI ELEMENNY
