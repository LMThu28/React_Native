const gameEvents = new Map([
    [17, '⚽ GOAL'],
    [36, '🔁 Substitution'],
    [47, '⚽ GOAL'],
    [61, '🔁 Substitution'],
    [64, '🔶 Yellow card'],
    [69, '🔴 Red card'],
    [70, '🔁 Substitution'],
    [72, '🔁 Substitution'],
    [76, '⚽ GOAL'],
    [80, '⚽ GOAL'],
    [92, '🔶 Yellow card'],
]);

// 1. Tạo mảng events chứa các sự kiện khác nhau
const events = [...new Set(gameEvents.values())];
console.log(events);

// 2. Xóa sự kiện thẻ vàng không công bằng ở phút 64
gameEvents.delete(64);
console.log(gameEvents);

// 3. Tính trung bình sự kiện mỗi 9 phút
const time = [...gameEvents.keys()].pop();
console.log(`An event happened, on average, every ${time / gameEvents.size} minutes`);

// 4. Lặp qua gameEvents và in ra từng sự kiện thuộc hiệp nào
for (const [minute, event] of gameEvents) {
    const half = minute <= 45 ? '[FIRST HALF]' : '[SECOND HALF]';
    console.log(`${half} ${minute}: ${event}`);
}