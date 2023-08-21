/* 
Toán tử
1. Toán tử số học: +,-,*,/,**
2. Toán tử logic: &&,||
&&: sẽ ăn theo falsy đầu tiên, nếu không có sẽ ăn theo cuối cùng
||: sẽ ăn theo trusthy đầu tiên, nếu không có sẽ ăn theo cuối cùng
trusthy: string, number
falsy: NaN, null, undefined, 0, falses, "",''

3. Toán tử so sánh: ==,===, >=,<=,>==,<==, !=, !==
== ; so sánh giá trị
=== ; so sánh giá trị và kiểu dữ liệu
4. toán tử 3 ngôi ? :

5. Toán tử nullish ??
nếu gặp null và undefined sẽ ăn theo thằng bên cạnh còn không sẽ lấy đầu tiên luôn
6. Toán tử gán =

7. Toán tử tăng giảm ++ --
a++ :kết thúc câu lệnh mới tăng lên 1
++a : tăng lên 1 đơn vị luôn
 */
let a=6
let b=9
console.log("🚀 ~ file: operator.js:25 ~ let b=9:", let b=9)
let c=a+b
console.log(c)   