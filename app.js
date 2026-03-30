
document.addEventListener('DOMContentLoaded', () => {
    console.log("Kinetic Aether Core: Online");
    
    // نظام التنبيهات البسيط
    const notify = (msg) => {
        console.log(`[SYSTEM]: ${msg}`);
    };

    // إضافة تأثيرات عند الضغط على الأزرار
    const buttons = document.querySelectorAll('button, .btn-primary');
    buttons.forEach(btn => {
        btn.addEventListener('click', () => {
            notify("Processing Aether Task...");
        });
    });
});
