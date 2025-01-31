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
            const container = document.getElementById("books-container");
            container.innerHTML = "";

            books.filter(book =>
                (filter === "" || book.genre === filter) &&
                (search === "" || book.title.toLowerCase().includes(search.toLowerCase()) ||
                    book.author.toLowerCase().includes(search.toLowerCase()))
            ).forEach(book => {
                const bookElem = document.createElement("div");
                bookElem.className = "book";
                bookElem.innerHTML = `
                    <img src="${book.img}" alt="${book.title}">
                    <div class="book-details">
                        <h3>${book.title}</h3>
                        <p>${book.author}</p>
                        <p>${book.description}</p>
                        <button class="listen-button">Прослухати аудіо</button>
                        <audio class="audio-player" controls style="display: none;">
                            <source src="${book.audio}" type="audio/mp3">
                        </audio>
                    </div>
                `;
                container.appendChild(bookElem);

                bookElem.querySelector(".listen-button").addEventListener("click", () => {
                    const audio = bookElem.querySelector(".audio-player");
                    audio.style.display = audio.style.display === "none" ? "block" : "none";
                });
            });
        }

        document.getElementById("genre-filter").addEventListener("change", (e) => {
            renderBooks(e.target.value, document.getElementById("search-input").value);
        });

        document.getElementById("search-input").addEventListener("input", (e) => {
            renderBooks(document.getElementById("genre-filter").value, e.target.value);
        });

        let isLoginMode = true;

        const toggleModal = (title, loginMode) => {
            isLoginMode = loginMode;
            document.getElementById("modal-title").textContent = title;
            document.getElementById("confirm-password").style.display = loginMode ? "none" : "block";
            document.getElementById("modal").style.display = "block";
            document.getElementById("overlay").style.display = "block";
        };

        const closeModal = () => {
            document.getElementById("modal").style.display = "none";
            document.getElementById("overlay").style.display = "none";
            document.getElementById("auth-form").reset();
        };

        document.getElementById("login").addEventListener("click", () => toggleModal("Увійти", true));
        document.getElementById("register").addEventListener("click", () => toggleModal("Реєстрація", false));
        document.getElementById("overlay").addEventListener("click", closeModal);

        document.getElementById("auth-form").addEventListener("submit", (e) => {
            e.preventDefault();
            const email = document.getElementById("email").value;
            const password = document.getElementById("password").value;
            const confirmPassword = document.getElementById("confirm-password").value;

            if (!email || !password || (!isLoginMode && password !== confirmPassword)) {
                alert("Будь ласка, заповніть всі поля коректно!");
                return;
            }

            localStorage.setItem("user", email);
            alert(isLoginMode ? "Вхід успішний!" : "Реєстрація успішна!");
            closeModal();
        });

        document.getElementById("dark-mode-toggle").addEventListener("click", () => {
            document.body.classList.toggle("dark-mode");
        });

        renderBooks();
