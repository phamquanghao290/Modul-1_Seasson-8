let physic = +prompt("Mời nhập điểm lý");
console.log(typeof (physic));
console.log("Điểm môn lý là", physic);

let math = +prompt("Mời nhập điểm toán");
console.log(typeof (math));
console.log("Điểm môn toán là", math);

let bio = +prompt("Mời nhập điểm sinh");
console.log(typeof (bio));
console.log("Điểm môn sinh là", bio);

document.write("Điểm trung bình 3 môn là",(physic + math + bio) / 3);