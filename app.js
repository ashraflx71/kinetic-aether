/**
 * Kinetic Aether Core Engine v2.4.0
 * Centralized Logic for Home, Lab, and Settings
 * Created by: Ashraf Hassan
 */

const AetherCore = {
    // 1. إعدادات النظام العامة
    init() {
        console.log("%c🌌 Kinetic Aether System Online", "color: #ba9eff; font-weight: bold; font-size: 1.2rem;");
        this.setupNavigation();
        this.detectPage();
    },

    // 2. التعرف على الصفحة الحالية وتفعيل أدواتها
    detectPage() {
        const path = window.location.pathname;
        if (path.includes('lab.html')) {
            this.initLabModule();
        } else if (path.includes('settings.html')) {
            this.initSettingsModule();
        }
    },

    // 3. وحدة المختبر (The Lab Module)
    initLabModule() {
        console.log("[SYSTEM]: Lab Module Activated.");
        window.runSEO = () => {
            const urlInput = document.getElementById('seo-url');
            const btnText = document.getElementById('seo-btn-text');
            const loader = document.getElementById('seo-loader');
            const resultDiv = document.getElementById('seo-result');

            if (!urlInput.value) return alert("يا أشرف، يرجى إدخال الرابط أولاً!");

            loader.style.display = 'block';
            btnText.innerText = "جاري استدعاء الأثير...";
            
            setTimeout(() => {
                loader.style.display = 'none';
                btnText.innerText = "تم التحليل ✅";
                resultDiv.classList.remove('hidden');
                resultDiv.innerHTML = `
                    <div class="p-4 border-r-4 border-secondary bg-secondary/5">
                        <p class="font-bold text-secondary mb-1">تقرير السيو لـ ${urlInput.value}</p>
                        <ul class="text-xs space-y-1 opacity-80">
                            <li>• الأداء الحركي: 98%</li>
                            <li>• الكود الأخضر: متوافق</li>
                            <li>• التجاوب: مثالي (Mobile-First)</li>
                        </ul>
                    </div>`;
            }, 1500);
        };

        window.purifyCode = () => {
            const input = document.getElementById('code-input').value;
            if (!input) return alert("ألصق الكود لتنقيته!");
            
            // خوارزمية ضغط الأكواد (Minification)
            const purified = input
                .replace(/\/\*[\s\S]*?\*\/|([^\\:]|^)\/\/.*$/gm, '') 
                .replace(/\s+/g, ' ')
                .replace(/\s*([\{\};:,])\s*/g, '$1')
                .trim();
            
            document.getElementById('code-output').value = purified;
            notify("تم ضغط الكود بنجاح! كود أخضر، أداء أسرع.");
        };
    },

    // 4. وحدة الإعدادات (Settings Module)
    initSettingsModule() {
        console.log("[SYSTEM]: Settings Module Activated.");
        // هنا يمكن إضافة وظائف حفظ الإعدادات في LocalStorage لاحقاً
    },

    // 5. إدارة التنقل والتفاعلات البسيطة
    setupNavigation() {
        const notify = (msg) => {
            console.log(`[NOTIFICATION]: ${msg}`);
        };
    }
};

// تشغيل المحرك عند تحميل الصفحة
document.addEventListener('DOMContentLoaded', () => AetherCore.init());

// دالة التنبيهات السريعة
function notify(message) {
    alert(`💡 نظام الأثير: ${message}`);
}
