document.getElementById('button').addEventListener("click", submit);
function submit(){
    var nama = document.getElementById('nama').value;
    var alamat = document.getElementById('alamat').value;

    SJIdfpWYEFUIJwefyuoOEWBFoyefhJIWEFTGO = window.open("", "_blank", "","");
    SJIdfpWYEFUIJwefyuoOEWBFoyefhJIWEFTGO.document.write(`<h3>Nama : ${nama}<h3>`);
    SJIdfpWYEFUIJwefyuoOEWBFoyefhJIWEFTGO.document.write(`<h3>Alamat : ${alamat}<h3>`);
}
