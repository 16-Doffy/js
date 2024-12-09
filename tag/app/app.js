let ul = document.querySelector('.tags-input ul');
let input = document.querySelector('.tags-input ul input');
let removeAll = document.querySelector('.removeAll button');

let tags = ['HTML', 'CSS', 'JAVASCRIPT'];

function showTag() {
    // Xóa toàn bộ thẻ li hiện có
    document.querySelectorAll('.tags-input li').forEach(li => li.remove());

    // Hiển thị lại thẻ
    tags.forEach((value, key) => {
        let newLi = document.createElement('li');
        newLi.innerText = value;
        let newRemove = document.createElement('div');
        newRemove.classList.add('remove');
        newRemove.innerText = '×';
        newRemove.onclick = () => removeItem(key); // Gán sự kiện xóa
        newLi.appendChild(newRemove);
        ul.insertBefore(newLi, input); // Thêm thẻ trước input
    });
}

function removeItem(key) {
    tags.splice(key, 1); // Xóa phần tử từ mảng
    showTag(); // Cập nhật giao diện
}

removeAll.addEventListener('click', function () {
    tags = []; // Xóa toàn bộ mảng
    showTag(); // Cập nhật giao diện
});

input.addEventListener('keyup', function (event) {
    if (event.key === 'Enter' && this.value.trim() !== '') {
        if (!tags.includes(this.value.trim())) {
            tags.push(this.value.trim()); // Thêm thẻ mới vào mảng
            showTag(); // Cập nhật giao diện
        }
        this.value = ''; // Reset ô input
    }
});

// Hiển thị thẻ khi trang tải
showTag();
