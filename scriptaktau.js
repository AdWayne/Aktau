document.addEventListener("DOMContentLoaded", () => {
    // Анимация появления изображений с интервалом
    const images = document.querySelectorAll(".suret");
    images.forEach((img, index) => {
      setTimeout(() => {
        img.classList.add("visible");
      }, index * 500); // Появление с интервалом 500 мс между изображениями
    });
  
    // IntersectionObserver для плавного появления изображений
    const observerOptions = {
      root: null, // Вся область просмотра
      rootMargin: "0px",
      threshold: 0.1, // Процент видимости элемента
    };
  
    const observerCallback = (entries, observer) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("visible"); // Добавляем класс visible
          observer.unobserve(entry.target); // Останавливаем наблюдение после появления
        }
      });
    };
  
    const observer = new IntersectionObserver(observerCallback, observerOptions);
  
    // Начинаем наблюдение за каждым изображением
    images.forEach((img) => observer.observe(img));
  
    // Обработка формы обратной связи
    document.getElementById("feedback-form").addEventListener("submit", function (event) {
      event.preventDefault(); // Останавливает стандартное отправление формы
  
      // Получаем значения полей
      const name = document.getElementById("name").value;
      const email = document.getElementById("email").value;
      const message = document.getElementById("message").value;
  
      // Проверка на пустоту полей
      if (name && email && message) {
        // Если все поля заполнены, показываем alert
        alert("Сәтті жіберілді");
      } else {
        // Если хотя бы одно поле не заполнено, показываем alert
        alert("Барлық өрістерді толтырыңыз!");
      }
    });
  });