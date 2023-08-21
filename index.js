/* 
1. Các hàng có sẵn trong js {build in}
    + console.log(): hiển thị ở tab console
    + alert(): hiển thị hộp thoại thông báo
    + confirm(): hiển thị hộp thoại xác nhận
    + prompt(): hiển thị ô nhập
    + document.write(): hiển thị ra ngoài trình duyệt
2. Biến và cách khai báo biến
    - biến dùng để lưu trữ dũ liệu
    - Có 3 cách khai báo biến
    - Cấu trúc: từ khóa khai báo biến -> tên biến( viết theo quy tắc camel-case: lạc đà: từ đầu viết thường, từ thứ 2 trở đi viết hoa, không đc ghi kí tự số, kí tự đặc biệt đầu tiên) -> giá trị của biến
    + C1: var
        Có thể khai báo lại
        Có thể gán lại giá trị
        Có hoisting
        phạm vi hoạt động function
    + C2: let
        Có thể gán lại giá trị
        Không thể khai báo lại
        Khi hoisting không truy cập đc: Đua việc khai báo lên đầu
        Phạm vi block-scope {}
    + C3: const
        Thường dùng để khai báo hằng số
        Không thể khai báo lại
        Phạm vi giống let
        khi khai báo phải gán giá trị cho nó khoogn sẽ báo lỗi
 */
console.log("xin chào học viên RA");
var fullname ="hưng béo"
// ví dụ:
// console.log(a)
// var a=100; ví dụ hoisting
// stack: vùng nhớ tĩnh
// heap: vùng nhớ
{
    
}