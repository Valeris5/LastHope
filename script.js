const books = [
    { title: "Дюна", author: "Френк Герберт", genre: "Фантастика", img: "https://s5.knigavuhe.org/1/covers/4283/2-2@2x.jpg?2", description: "Епічна історія про пустельну планету та її секрети." , audio: "https://youtu.be/Kunrw-oAYA8?si=2R2VtX-vOsshKfEu" },
    { title: "Вбивство у Східному експресі", author: "Агата Крісті", genre: "Детектив", img: "https://chitaka.com.ua/wp-content/uploads/2021/10/Vbyvstvo-u-Shidnomu-ekspresi-237x335.jpg", description: "Класичний детектив з участю Еркюля Пуаро." ,  audio: "audio/.mp3" },
    { title: "Гаррі Поттер і філософський камінь", author: "Дж. К. Роулінг", genre: "Фентезі", img: "https://chitaka.com.ua/wp-content/uploads/2021/11/Garri-Potter-i-filosofskyj-kamin-237x356.jpg", description: "Пригоди юного чарівника в магічному світі." ,  audio: "audio/dune.mp3"},
    { title: "Мистецтво війни", author: "Сунь Цзи", genre: "Наукова", img: "https://sound-books.net/uploads/posts/2023-10/sun-czy-mystectvo-viiny.webp", description: "Класична книга про стратегію та тактику війни." , audio: "audio/dune.mp3"},
    { title: "Великий Гетсбі", author: "Френсіс Скотт Фіцджеральд", genre: "Роман", description: "Класика американської літератури.", img: "https://sound-books.net/uploads/posts/2024-01/skott-ficdzherald-velykyi-getsbi.webp" , audio: "audio/dune.mp3" },
    { title: "Пікнік на узбіччі", author: "Аркадій та Борис Стругацькі", genre: "Фантастика", description: "Фантастична історія про зону та сталкерів.", img: "https://sound-books.net/uploads/posts/2022-07/1623404883_na-uzbychchy.webp" , audio: "audio/dune.mp3"  },
  { title: "1984", author: "Джордж Орвелл", genre: "Антиутопія", description: "Класичний роман про тоталітарний режим та контроль над особистістю.", img: "https://sound-books.net/uploads/posts/2022-07/1624367433_-orvell-1984.webp" ,  audio: "audio/dune.mp3" },
  { title: "Три мушкетери", author: "Александр Дюма", genre: "Пригоди", description: "Захоплива історія про трьох мушкетерів та їхні пригоди.", img: "https://sound-books.net/uploads/posts/2022-03/1554666050_mushketeri_-oleksandr-dyuma.jpg" , audio: "audio/dune.mp3" },
    { title: "Убити пересмішника", author: "Харпер Лі", genre: "Роман", description: "Глибока історія про расизм та справедливість в Америці.", img: "https://4read.org/uploads/posts/2022-11/medium/1667648927_peresmyshnika.jpeg" , audio: "audio/dune.mp3" },
    { title: "Хижа", author: "Вільям Пол Янг", genre: "Детектив", description: "Історія про викрадення та вбивство дівчинки під час сімейного відпочинку.", img: "https://sound-books.net/uploads/posts/2024-04/pol-yang-khyzha.webp" , audio: "audio/dune.mp3" },
    { title: "Маленький принц", author: "Антуан де Сент-Екзюпері", genre: "Дитяча", description: "Філософська казка про дитячі мрії та відкриття.", img: "https://sound-books.net/uploads/posts/2024-01/de-sent-ekzuperi-malenkyi-prync.webp" , audio: "audio/dune.mp3"},
  { title: "Совеня, яке водило на прогулянки Луну", author: "Єва Сольська", genre: "Дитяча", description: "Якщо ти полохлива сова, як тобі перестати боятися темряви і стати хоробрим? Все просто. Ви повинні знайти когось, хто боїться більше вас, і вивести його на прогулянку.", img: "https://sound-books.net/uploads/posts/2022-07/1626204167_-yake-vodilo-na-progulyanki-lunu.webp" , audio: "audio/dune.mp3" },
    { title: "Поклик Ктулху", author: "Говард Філіпс", genre: "Фентезі", description: "Містичне оповідання.", img: "https://sound-books.net/uploads/posts/2023-10/govard-filips-lavkraft-poklyk-ktulkhu.webp" ,  audio: "audio/dune.mp3" },
    { title: "Амнезія", author: "Айя Нея", genre: "Містика", description: "Людство втратило пам'ять. Що це? Кара небесна? Невдалий експеримент? Чи, може, передвісник змін, які очікують на світ?", img: "https://sound-books.net/uploads/posts/2024-01/neia-amneziia.webp" , audio: "audio/dune.mp3" },
    { title: "Перейти темряву", author: "Ірен Роздобудько", genre: "Роман", description: "Пригоди героїв у світі, де світло і тінь визначають усе.", img: "https://sound-books.net/uploads/posts/2022-07/1619680868_temryavu.webp" ,  audio: "audio/dune.mp3" },
    { title: "Викрадений лист", author: "Едгар Аллан По", genre: "Детектив", description: "Трилер про розслідування серії дивних злочинів.", img: "https://sound-books.net/uploads/posts/2022-11/bc4_1491003090.webp" , audio: "audio/dune.mp3" },
    { title: "Рекреації", author: "Юрій Андрухович", genre: "Роман", description: "Історія любові та інтриг серед британської аристократії.", img: "https://sound-books.net/uploads/posts/2023-10/yurii-andrukhovych-rekreacii.webp" , audio: "audio/dune.mp3" },
    { title: "Людина у високому замку", author: "Філіп Діп", genre: "Роман", description: "Істроія про світ 1960-х років, у якому країни Осі перемогли у Другій світовій війні.", img: "https://sound-books.net/uploads/posts/2024-01/dik-ludyna-u-vysokomu-zamku.webp" , audio: "audio/dune.mp3" },
    { title: "Штрейкбрехер", author: "Айзек Азімов", genre: "Фантастика", description: "Що важливіше права однієї людини - чи добробут тисяч? Чи можна дозволити соціуму ігнорувати проблеми окремих його представників та навіть жертвувати ними, якщо йдеться про загальне благо?", img: "https://sound-books.net/uploads/posts/2024-05/azimov-shtreykbrekher.webp" , audio: "audio/dune.mp3" }
];

function renderBooks(filter = "", search = "") {
    const container = document.getElementById('books-container');
    container.innerHTML = '';
    books.filter(book =>
        (filter === "" || book.genre === filter) &&
        (search === "" || book.title.toLowerCase().includes(search.toLowerCase()) ||
         book.author.toLowerCase().includes(search.toLowerCase()))
    ).forEach(book => {
        const bookElem = document.createElement('div');
        bookElem.className = 'book';
        bookElem.innerHTML = `
            <img src="${book.img}" alt="${book.title}">
            <div class="book-details">
                <h3>${book.title}</h3>
                <p>${book.author}</p>
                <p>${book.description}</p>
            </div>
        `;
        container.appendChild(bookElem);
    });
}

document.getElementById('genre-filter').addEventListener('change', (e) => {
    renderBooks(e.target.value, document.getElementById('search').value);
});

document.getElementById('search').addEventListener('input', (e) => {
    renderBooks(document.getElementById('genre-filter').value, e.target.value);
});

const darkModeToggle = document.getElementById('dark-mode-toggle');
const loginButton = document.getElementById('login');
const registerButton = document.getElementById('register');
const modal = document.getElementById('modal');
const overlay = document.getElementById('overlay');
const modalTitle = document.getElementById('modal-title');
const authForm = document.getElementById('auth-form');
const emailInput = document.getElementById('email');
const passwordInput = document.getElementById('password');
const confirmPasswordInput = document.getElementById('confirm-password');

let isLoginMode = true;

// Показ модального вікна
function toggleModal(title, isLogin) {
    modalTitle.textContent = title;
    isLoginMode = isLogin;

    // Перемикаємо режим між "Увійти" та "Реєстрація"
    confirmPasswordInput.style.display = isLogin ? 'none' : 'block';
    modal.style.display = 'block';
    overlay.style.display = 'block';
}

// Закриття модального вікна
function closeModal() {
    modal.style.display = 'none';
    overlay.style.display = 'none';
    authForm.reset();
}

// Обробка кліку на кнопки
loginButton.addEventListener('click', () => toggleModal('Увійти', true));
registerButton.addEventListener('click', () => toggleModal('Реєстрація', false));
overlay.addEventListener('click', closeModal);

// Обробка форми
authForm.addEventListener('submit', (e) => {
    e.preventDefault();

    const email = emailInput.value.trim();
    const password = passwordInput.value.trim();
    const confirmPassword = confirmPasswordInput.value.trim();

    if (!email || !password || (!isLoginMode && !confirmPassword)) {
        alert('Будь ласка, заповніть усі поля.');
        return;
    }

    if (!isLoginMode && password !== confirmPassword) {
        alert('Паролі не збігаються.');
        return;
    }

    const users = JSON.parse(localStorage.getItem('users')) || {};

    if (isLoginMode) {
        // Логіка для входу
        if (users[email] && users[email] === password) {
            alert('Вхід виконано успішно!');
            closeModal();

            // Ховаємо кнопки "Увійти" та "Реєстрація"
            loginButton.style.display = 'none';
            registerButton.style.display = 'none';
        } else {
            alert('Неправильний email або пароль.');
        }
    } else {
        // Логіка для реєстрації
        if (users[email]) {
            alert('Користувач із таким email вже існує.');
        } else {
            users[email] = password;
            localStorage.setItem('users', JSON.stringify(users));
            alert('Реєстрація виконана успішно!');
            closeModal();

            // Ховаємо кнопки "Увійти" та "Реєстрація"
            loginButton.style.display = 'none';
            registerButton.style.display = 'none';
        }
    }
});


        darkModeToggle.addEventListener('click', () => {
            document.body.classList.toggle('dark-mode');
            modal.classList.toggle('dark-mode');
        });
function renderBooks(filter = "", search = "") {
    const container = document.getElementById('books-container');
    container.innerHTML = ''; // Очищення контейнера перед рендером
    books.filter(book =>
        (filter === "" || book.genre === filter) &&
        (search === "" || book.title.toLowerCase().includes(search.toLowerCase()) ||
         book.author.toLowerCase().includes(search.toLowerCase()))
    ).forEach(book => {
        const bookElem = document.createElement('div');
        bookElem.className = 'book';
        bookElem.innerHTML = `
            <img src="${book.img}" alt="${book.title}">
            <div class="book-details">
                <h3>${book.title}</h3>
                <p>${book.author}</p>
                <p>${book.description}</p>
                <button class="listen-button">Прослухати аудіо</button>
                <div class="audio-player-container" style="display: none;">
                    <audio class="audio-player" controls>
                        <source src="${book.audio}" type="audio/mp3">
                        Ваш браузер не підтримує аудіо.
                    </audio>
                </div>
            </div>
        `;
        container.appendChild(bookElem);

        // Обробник для кнопки "Прослухати"
        const listenButton = bookElem.querySelector('.listen-button');
        const audioPlayerContainer = bookElem.querySelector('.audio-player-container');

        listenButton.addEventListener('click', () => {
            if (audioPlayerContainer.style.display === 'none') {
                // Показуємо аудіо плеєр
                audioPlayerContainer.style.display = 'block';
                listenButton.textContent = "Зупинити";
            } else {
                // Ховаємо аудіо плеєр
                audioPlayerContainer.style.display = 'none';
                listenButton.textContent = "Прослухати";
            }
        });
    });
}

