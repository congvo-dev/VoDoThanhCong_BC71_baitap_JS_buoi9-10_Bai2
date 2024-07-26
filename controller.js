function layThongTinTuForm(){
    var ma = document.getElementById("txtMaSV").value;
    var ten = document.getElementById("txtTenSV").value;
    var email = document.getElementById("txtEmail").value;
    var pass = document.getElementById("txtPass").value;
    var diemToan = document.getElementById("txtDiemToan").value*1;
    var diemLy = document.getElementById("txtDiemLy").value*1;
    var diemHoa = document.getElementById("txtDiemHoa").value*1;
    // var sv = {
    //     ma: ma,
    //     ten: ten,
    //     email: email,
    //     pass: pass,
    //     diemToan: diemToan,
    //     diemLy: diemLy,
    //     diemHoa: diemHoa,
    //     tinhDTB: function() {
    //         return (this.diemToan + this.diemLy + this.diemHoa)/3
    //     },
    // }
    var sv = new SinhVien(ma, ten, email, pass, diemToan, diemLy, diemHoa);
    return sv;  
}