let options = document.querySelectorAll('.changeType');
let form = document.getElementById('form');
let bgactive = document.getElementById('bg-active');
let rotatedeg = 0; // Thêm biến rotatedeg để tránh lỗi undefined

options.forEach(val => {
    val.addEventListener('click', function (event) {
        if (!this.classList.contains('active')) { // Sửa điều kiện kiểm tra
            form.classList.remove('login');
            form.classList.remove('register');
            form.classList.add(this.id);
            bgactive.style.left = this.offsetLeft + 'px';
            options.forEach(item => {
                item.classList.remove('active');
            });
            this.classList.add('active');

            rotatedeg += 200; // Sửa cú pháp gán giá trị cho rotatedeg
            document.getElementById('rotate').style.transform = 'translate(-50%) rotate(' + rotatedeg + 'deg)';
        }
    });
});
