
// cek pass dan user apakah ada?
// -- jika tidak terpenuhi "perikasa kembali user pass"
// cek length of pass lebih dari 5
// -- jika tidak terpenuhi "perikasa kembali pass"
// cek user adalah Roy Bayu
// jika terpenuhi "maaf anda tidak bisa login"

let user = "Roy Bayu";
let pass = "admin";

if (user && pass){
    if (pass.length >= 5){
        if (user === "Roy Bayu"){
            console.log("anda bisa login");
        } else {
            console.log("tidak bisa login");
        }
    } 
     else {
        console.log("periksa kembali user dan password anda")
    }  

} else {
    console.log("periksa kembali user pass anda")
}