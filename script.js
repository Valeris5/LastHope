/ Масив книг з фото, описами та можливістю читати
const books = [
    {
        title: "Великий роман",
        genre: "fiction",
        image: "path/to/book1.jpg",  // Заміни на реальну адресу зображення
        description: "Це захоплюючий роман про подорожі та пригоди.",
        link: "book1.html"  // Сторінка з повним текстом книги
    },
    {
        title: "Наука для всіх",
        genre: "science",
        image: "path/to/book2.jpg",
        description: "Книга, яка пояснює складні наукові концепти простими словами.",
        link: "book2.html"
    },
    {
        title: "Історія України",
        genre: "history",
        image: "path/to/book3.jpg",
        description: "Повний огляд історії України від найдавніших часів до сьогодення.",
        link: "book3.html"
    },
    {
        title: "Магія і мечі",
        genre: "fantasy",
        image: "path/to/book4.jpg",
        description: "Фентезійний роман про світ магії та великих битв.",
        link: "book4.html"
    },
    {
        title: "Детектив на ніч",
        genre: "mystery",
        image: "path/to/book5.jpg",
        description: "Захоплюючий детектив, що тримає в напрузі до останньої сторінки.",
        link: "book5.html"
    },
    {
        title: "Любов під зорями",
        genre: "romance",
        image: "path/to/book6.jpg",
        description: "Романтика, що розповідає про велике кохання та випробування долі.",
        link: "book6.html"
    }
];

// Отримуємо елементи DOM
const genreSelect = document.getElementById('genre-select');
const bookList = document.getElementById('book-list');

// Функція для рендеру книг
function renderBooks(filteredBooks) {
    bookList.innerHTML = ''; // Очищаємо список перед рендером
    filteredBooks.forEach(book => {
        const bookItem = document.createElement('div');
        bookItem.classList.add('book-item');

        // Створення елементів для кожної книги
        bookItem.innerHTML = `
            <img src="${book.image}" alt="${book.title}">
            <h3>${book.title}</h3>
            <p>${book.description}</p>
            <a href="${book.link}" target="_blank">Читати книгу</a>
        `;

        bookList.appendChild(bookItem);
    });
}

// Функція фільтрації за жанром
function filterBooks() {
    const selectedGenre = genreSelect.value;

    if (selectedGenre) {
        const filteredBooks = books.filter(book => book.genre === selectedGenre);
        renderBooks(filteredBooks);
    } else {
        renderBooks(books); // Якщо жанр не вибрано, відображаємо всі книги
    }
}

// Додаємо обробник події на зміну значення селекту
genreSelect.addEventListener('change', filterBooks);

// Спочатку відображаємо всі книги
renderBooks(books);


// Функція для відкриття книги
function openBook(bookFile) {
    window.open(bookFile, '_blank');
}

// Перевіряємо, чи є форма пошуку на сторінці
const searchForm = document.querySelector('.search-form');
const searchInput = document.querySelector('.search-form input[type="text"]');
const searchButton = document.querySelector('.search-form button');

// Функція для обробки пошуку
function handleSearch(event) {
    event.preventDefault(); // Запобігаємо стандартній відправці форми

    const query = searchInput.value.trim(); // Отримуємо значення з поля вводу та прибираємо зайві пробіли

    if (query.length > 0) {
        // Тут можна додати логіку для відображення результатів пошуку
        // Наприклад, редірект на іншу сторінку з результатами пошуку
        console.log('Шукаємо:', query);
        
        // Для демонстрації можна відкрити нову сторінку з параметром пошуку
        window.location.href = `search-results.html?query=${encodeURIComponent(query)}`;
    } else {
        alert('Будь ласка, введіть текст для пошуку.');
    }
}

// Додаємо обробник події на кнопку пошуку
searchButton.addEventListener('click', handleSearch);

// Додаємо можливість натискати Enter для відправки форми
searchInput.addEventListener('keypress', function(event) {
    if (event.key === 'Enter') {
        handleSearch(event);
    }
});
 // Отримання елементів
        const loginBtn = document.getElementById('loginBtn');
        const registerBtn = document.getElementById('registerBtn');
        const loginModal = document.getElementById('loginModal');
        const registerModal = document.getElementById('registerModal');
        const closeLogin = document.getElementById('closeLogin');
        const closeRegister = document.getElementById('closeRegister');
        const authButtons = document.getElementById('authButtons');
        const userAccount = document.getElementById('userAccount');
        const userName = document.getElementById('userName');

        // Відкрити модальне вікно входу
        loginBtn.addEventListener('click', () => {
            loginModal.style.display = 'block';
        });

        // Відкрити модальне вікно реєстрації
        registerBtn.addEventListener('click', () => {
            registerModal.style.display = 'block';
        });

        // Закрити модальне вікно входу
        closeLogin.addEventListener('click', () => {
            loginModal.style.display = 'none';
        });

        // Закрити модальне вікно реєстрації
        closeRegister.addEventListener('click', () => {
            registerModal.style.display = 'none';
        });

        // Закрити модальне вікно при кліку поза ним
        window.addEventListener('click', (event) => {
            if (event.target === loginModal) {
                loginModal.style.display = 'none';
            }
            if (event.target === registerModal) {
                registerModal.style.display = 'none';
            }
        });

        // Обробка форми входу
        document.getElementById('loginForm').addEventListener('submit', (e) => {
            e.preventDefault();
            const email = document.getElementById('loginEmail').value;
            authButtons.style.display = 'none';
            userAccount.style.display = 'block';
            userName.textContent = email.split('@')[0];
            loginModal.style.display = 'none';
        });

        // Обробка форми реєстрації
        document.getElementById('registerForm').addEventListener('submit', (e) => {
            e.preventDefault();
            const name = document.getElementById('registerName').value;
            authButtons.style.display = 'none';
            userAccount.style.display = 'block';
            userName.textContent = name;
            registerModal.style.display = 'none';
        });
  
