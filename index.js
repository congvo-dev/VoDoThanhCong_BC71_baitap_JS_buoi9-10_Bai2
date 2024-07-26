DSSV = [];
var jsonDSSV = localStorage.getItem("JSON_DSSV");
var svArr = JSON.parse(jsonDSSV);
for ( var i=0; i<svArr.length; i++) {
    var data = svArr[i];
    var sv = new SinhVien(
        data.ma,
        data.ten,
        data.email,
        data.pass,
        data.diemToan,
        data.diemLy,
        data.diemHoa,
    );
    DSSV.push(sv);
}
renderDSSV();
function themSv() {
    var sv = layThongTinTuForm();

    DSSV.push(sv);
    console.log("DSSV:",DSSV);
    var jsonDSSV = JSON.stringify(DSSV);
    localStorage.setItem("JSON_DSSV",jsonDSSV);
    renderDSSV();
}

function renderDSSV() {
    var contentHTML = "";
    for (var i=0; i<DSSV.length; i++) {
        var sv = DSSV[i];
        var trContent = `<tr>
            <td>${sv.ma}</td>
            <td>${sv.ten}</td>
            <td>${sv.email}</td>
            <td>${sv.tinhDTB()}</td>
            <td><button
            class="btn btn-danger"
            onclick="xoaSv('${sv.ma}')">
            Xoa</button></td>
            <td><button
            class="btn btn-warning"
            onclick="suaSv('${sv.ma}')">
            Sua</button></td>
        </tr>`
        contentHTML = contentHTML + trContent;
    }
    document.getElementById("tbodySinhVien").innerHTML = contentHTML;
}

function xoaSv(maSv) {
    var viTri = DSSV.findIndex(function(item){
        return item.ma == maSv;
    })

    if (viTri != -1) {
        DSSV.splice(viTri,1);
    } else {
        alert("Khong tim thay ma sv");
    }
    var jsonDSSV = JSON.stringify(DSSV);
    localStorage.setItem("JSON_DSSV",jsonDSSV);
    renderDSSV();
}

function suaSv(maSv) {
    var viTri = DSSV.findIndex(function(item){
        return item.ma == maSv;
    })

    if (viTri != -1) {
    var sv = DSSV[viTri];
    document.getElementById("txtMaSV").value=sv.ma;
    document.getElementById("txtTenSV").value=sv.ten;
    document.getElementById("txtEmail").value=sv.email;
    document.getElementById("txtPass").value=sv.pass;
    document.getElementById("txtDiemToan").value=sv.diemToan;
    document.getElementById("txtDiemLy").value=sv.diemLy;
    document.getElementById("txtDiemHoa").value=sv.diemHoa;
    }
    document.getElementById("txtMaSV").setAttribute("readonly",true);
}

function capNhatSv() {
    var sv = layThongTinTuForm();
    var viTri = DSSV.findIndex(function(item){
        return item.ma == sv.ma;
    })

    if (viTri != -1) {
        DSSV[viTri] = sv;   
    }
    var jsonDSSV = JSON.stringify(DSSV);
    localStorage.setItem("JSON_DSSV",jsonDSSV);
    renderDSSV();
}

function reset() {
document.getElementById("txtMaSV").value = "";
document.getElementById("txtTenSV").value = "";
document.getElementById("txtEmail").value = "";
document.getElementById("txtPass").value = "";
document.getElementById("txtDiemToan").value = "";
document.getElementById("txtDiemLy").value = "";
document.getElementById("txtDiemHoa").value = "";
renderDSSV();
}

function timSv() {
    var tenSv = document.getElementById("txtSearch").value;
    var viTri = DSSV.findIndex(function(item) {
        return item.ten == tenSv;
    } 
    )
    if (viTri != -1) {
        var sv = DSSV[viTri];
        // var contentHTML = "";
        var timSvContent = `<tr>
            <td>${sv.ma}</td>
            <td>${sv.ten}</td>
            <td>${sv.email}</td>
            <td>${sv.tinhDTB()}</td>
            <td><button
            class="btn btn-danger"
            onclick="xoaSv('${sv.ma}')">
            Xoa</button></td>
            <td><button
            class="btn btn-warning"
            onclick="suaSv('${sv.ma}')">
            Sua</button></td>
        </tr>`
        // contentHTML = contentHTML + trContent;        
        document.getElementById("tbodySinhVien").innerHTML = timSvContent ;
        console.log("DSSV:",DSSV);
    } else {
    alert("Khong tim thay sv");
    }
}
