
const xlsx = require("xlsx");

const workbook = xlsx.readFile("BangCong.xlsx");

// Lấy dữ liệu từ sheet "Chấm công"
const sheetName = "s1";
const worksheet = workbook.Sheets[sheetName];
const data = xlsx.utils.sheet_to_json(worksheet);

// Tạo một object để lưu trữ thông tin chấm công của các nhân viên

const employeeNameRegex = new RegExp(/^NV[a-zA-Z0-9]/);


[data[1]].forEach((obj) => {
  let prevValue = null;
  console.log();
  for (let i = 1; i <= 140; i++) {
    const key = `__EMPTY_${i}`;
    if (!(key in obj)) {
      obj[key] = prevValue;
    } else {
      prevValue = obj[key];
    }
  }
});
let allnv = {};

for (let x = 4; x < data.length; x++) {
  
  let summon = 0;
  
  let monray = [];
  
  var nv = {};
  let gc = null;
  let cn = null;
  let tc = null;
  let gc1 = null;
  let tc1 = null;
  let wkd = null;
  
  for (let i in data[3]) {
    if (data[3][i] == "$") {
      monray.push(data[x][i] !== undefined ? data[x][i] : 0);
    }
    if (i == "CN") {
    }
    if (data[3][i] == "GC") {
      if (gc === null) {
        gc = data[x][i];
      } else {
        nv[data[1][i]] = { ...nv[data[1][i]], GC: data[x][i] };
        // nv[data[1][i]] = { mon: (data[x][i]!==undefined ? data[x][i] : 0)*monray[1] };
      }
    }
    if (data[3][i] == "CN") {
      if (cn === null) {
        cn = data[x][i];
      } else {
        nv[data[1][i]] = { ...nv[data[1][i]], CN: data[x][i] };
      }
    }
    if (data[3][i] == "GC1") {
      if (gc1 === null) {
        gc1 = data[x][i];
      } else {
        nv[data[1][i]] = { ...nv[data[1][i]], GC1: data[x][i] };
      }
    }
    if (data[3][i] == "TC") {
      if (tc === null) {
        tc = data[x][i];
      } else {
        nv[data[1][i]] = { ...nv[data[1][i]], TC: data[x][i] };
      }
    }
    if (data[3][i] == "TC1") {
      if (tc1 === null) {
        tc1 = data[x][i];
      } else {
        nv[data[1][i]] = { ...nv[data[1][i]], TC1: data[x][i] };
      }
    }
  }
  for (let g in nv) {
    summon +=
      (nv[g]["CN"] !== undefined ? nv[g]["CN"] : 0) * monray[0] +
      (nv[g]["GC"] !== undefined ? nv[g]["GC"] : 0) * monray[1] +
      (nv[g]["TC"] !== undefined ? nv[g]["TC"] : 0) * monray[2] +
      (nv[g]["GC1"] !== undefined ? nv[g]["GC1"] : 0) * monray[3] +
      (nv[g]["TC1"] !== undefined ? nv[g]["TC1"] : 0) * monray[4];
    nv[g]["mon"] =
      (nv[g]["CN"] !== undefined ? nv[g]["CN"] : 0) * monray[0] +
      (nv[g]["GC"] !== undefined ? nv[g]["GC"] : 0) * monray[1] +
      (nv[g]["TC"] !== undefined ? nv[g]["TC"] : 0) * monray[2] +
      (nv[g]["GC1"] !== undefined ? nv[g]["GC1"] : 0) * monray[3] +
      (nv[g]["TC1"] !== undefined ? nv[g]["TC1"] : 0) * monray[4];
  }
  nv["summon"] = summon;
  if (nv["summon"] < data[x]["__EMPTY_16"]) {
    nv["report"] = "smaller than column Q";
  }
  if (nv["summon"] > data[x]["__EMPTY_16"]) {
    nv["report"] = "larger than column Q";
  }
  if (nv["summon"] == data[x]["__EMPTY_16"]) {
    nv["report"] = "Equals colum Q";
  }
 
allnv[data[x].__EMPTY_2] = nv

}


console.log(allnv);
