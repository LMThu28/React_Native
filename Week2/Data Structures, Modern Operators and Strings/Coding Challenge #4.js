// Write a program that receives a list of variable names written in underscore_case
// and convert them to camelCase.
// The input will come from a textarea inserted into the DOM (see code below t

document.getElementById('convert').addEventListener('click', function() {
    // Lấy giá trị từ textarea
    const text = document.getElementById('text').value;

    // Tách các dòng ra bằng dấu xuống dòng (\n)
    const lines = text.split('\n');

    // Lặp qua từng dòng để chuyển đổi
    for (let [index, line] of lines.entries()) {
        // Loại bỏ khoảng trắng thừa ở đầu và cuối mỗi dòng, sau đó chuyển tất cả về dạng chữ thường
        line = line.trim().toLowerCase();

        // Tách các từ bằng dấu gạch dưới (_)
        const words = line.split('_');

        // Từ đầu tiên giữ nguyên, các từ còn lại viết hoa chữ cái đầu tiên
        const camelCase = words
            .map((word, i) => (i === 0 ? word : word[0].toUpperCase() + word.slice(1)))
            .join('');

        // In ra biến đã được chuyển đổi, kèm theo dấu tích ✅ tương ứng với số dòng
        console.log(`${camelCase.padEnd(20)}${'✅'.repeat(index + 1)}`);
    }
});