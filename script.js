const modal = document.getElementById("langModal");
const welcomeText = document.getElementById("welcome-text");
const description = document.getElementById("description");
const footer = document.getElementById("footer");
const changeLangBtn = document.getElementById("change-lang");

// Словари переводов
const translations = {
    en: {
      welcome: "Welcome!",
      description: "My name is Dima",
      footer: "Copyright 2025",
      changeLang: "Change language"
    },
    ru: {
      welcome: "Добро пожаловать!",
      description: "Моё имя Дима",
      footer: "Копирайт 2025",
      changeLang: "Поменять язык"
    },
    uk: {
      welcome: "Доброго дня!",
      description: "Моє ім’я Дмитро",
      footer: "Копірайт 2025",
      changeLang: "Змінити мову"
    }
};

// Функция применения перевода
function applyTranslations(lang) {
    welcomeText.textContent = translations[lang].welcome;
    description.textContent = translations[lang].description;
    footer.textContent = translations[lang].footer;
    changeLangBtn.textContent = translations[lang].changeLang;
}

// Устанавливаем язык и закрываем модалку
function setLanguage(lang) {
    localStorage.setItem("lang", lang);
    applyTranslations(lang);
    modal.style.display = "none";
}

// Проверка сохраненного языка при загрузке
window.addEventListener("load", () => {
    let savedLang = localStorage.getItem("lang");
    if (!savedLang || !translations[savedLang]) {
      modal.style.display = "flex";
    } else {
      applyTranslations(savedLang);
    }
});

// Вешаем обработчики на кнопки выбора языка
document.querySelectorAll(".lang-btn").forEach(btn => {
    btn.addEventListener("click", () => {
      const lang = btn.getAttribute("data-lang");
      setLanguage(lang);
    });
});

// Кнопка смены языка
changeLangBtn.addEventListener("click", () => {
    modal.style.display = "flex";
});