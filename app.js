// --- إضافة وحدة الـ LSI داخل initLabModule ---
window.generateLSI = () => {
    const keyword = document.getElementById('keyword-input').value;
    const loader = document.getElementById('lsi-loader');
    const results = document.getElementById('lsi-results');

    if (!keyword) return alert("يا أشرف، نحتاج لكلمة مفتاحية لنبدأ!");

    loader.style.display = 'block';
    results.classList.add('hidden');
    results.innerHTML = '';

    setTimeout(() => {
        loader.style.display = 'none';
        results.classList.remove('hidden');
        
        // محاكاة استخراج الكلمات الدلالية المرتبطة بذكاء
        const suggestions = [
            `${keyword} رخيصة`, 
            `أفضل ${keyword} في الإسكندرية`, 
            `مميزات ${keyword}`, 
            `خطوات ${keyword} ناجحة`,
            `تقييمات ${keyword}`,
            `${keyword} 2026`
        ];

        suggestions.forEach(word => {
            const span = document.createElement('span');
            span.className = "bg-secondary/10 text-secondary text-[10px] p-2 rounded-lg border border-secondary/20 text-center";
            span.innerText = word;
            results.appendChild(span);
        });
        
        notify("تم استخراج أقوى الكلمات الدلالية لمقالاتك!");
    }, 1200);
};
