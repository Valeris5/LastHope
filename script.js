// Книги
const books = [
    { id: 1, title: "Мистецтво війни", content: "Текст про стратегію війни...", genre: "історія", image: "https://via.placeholder.com/150?text=Мистецтво+війни" },
    { id: 2, title: "1984", content: "Антиутопія Джорджа Орвелла...", genre: "фантастика", image: "https://via.placeholder.com/150?text=1984" },
    { id: 3, title: "Кобзар", content: "Поезії Тараса Шевченка...", genre: "класика", image: "https://via.placeholder.com/150?text=Кобзар" },
    { id: 4, title: "Гаррі Поттер", content: "Юний чарівник і його пригоди...", genre: "фантастика", image: "https://via.placeholder.com/150?text=Гаррі+Поттер" },
  ];
  
  let bookmarks = JSON.parse(localStorage.getItem("bookmarks")) || { читаю: [], "у планах": [], прочитане: [] };
  
  const bookListEl = document.getElementById("book-list");
  const searchInput = document.getElementById("search-input");
  const genreFilter = document.getElementById("genre-filter");
  const readerSection = document.getElementById("reader");
  const catalogSection = document.getElementById("catalog");
  const bookTitleEl = document.getElementById("book-title");
  const bookContentEl = document.getElementById("book-content");
  const backToCatalogButton = document.getElementById("back-to-catalog");
  
  // Користувач
  const currentUserEl = document.getElementById("current-user");
  const loginButton = document.getElementById("login-button");
  const logoutButton = document.getElementById("logout-button");
  const loginModal = document.getElementById("login-modal");
  let currentUser = localStorage.getItem("currentUser") || "Гість";
  
  // Оновлення користувача
  function updateUser() {
    currentUserEl.textContent = `👤 ${currentUser}`;
    loginButton.classList.toggle("hidden", currentUser !== "Гість");
    logoutButton.classList.toggle("hidden", currentUser === "Гість");
  }
  
  // Авторизація
  loginButton.addEventListener("click", () => {
    const username = prompt("Введіть ваше ім'я");
    if (username) {
      currentUser = username;
      localStorage.setItem("currentUser", username);
      updateUser();
    }
  });
  
  logoutButton.addEventListener("click", () => {
    localStorage.removeItem("currentUser");
    currentUser = "Гість";
    updateUser();
  });
  
  // Генерація карток книг
  function generateBookCards(filteredBooks) {
    bookListEl.innerHTML = "";
    filteredBooks.forEach((book) => {
      const card = document.createElement("div");
      card.className = "book-card";
      card.innerHTML = `
        <img src="${book.image}" alt="${book.title}">
        <p>${book.title}</p>
        <button data-id="${book.id}" class="bookmark-btn">+ Закладка</button>
      `;
      card.querySelector(".bookmark-btn").addEventListener("click", () => addBookmark(book));
      card.addEventListener("click", () => openReader(book));
      bookListEl.appendChild(card);
    });
  }
  
  // Відкриття читача
  function openReader(book) {
    catalogSection.classList.add("hidden");
    readerSection.classList.remove("hidden");
    bookTitleEl.textContent = book.title;
    bookContentEl.textContent = book.content;
  }
  
  // Закриття читача
  backToCatalogButton.addEventListener("click", () => {
    readerSection.classList.add("hidden");
    catalogSection.classList.remove("hidden");
  });
  
  // Фільтр
  function filterBooks() {
    const searchQuery = searchInput.value.toLowerCase();
    const selectedGenre = genreFilter.value;
    const filteredBooks = books.filter((book) => {
      const matchesSearch = book.title.toLowerCase().includes(searchQuery);
      const matchesGenre = selectedGenre ? book.genre === selectedGenre : true;
      return matchesSearch && matchesGenre;
    });
    generateBookCards(filteredBooks);
  }
  
  // Додавання закладок
  function addBookmark(book) {
    const status = prompt("Виберіть статус для книги: читаю, у планах, прочитане").toLowerCase();
    if (["читаю", "у планах", "прочитане"].includes(status)) {
      if (!bookmarks[status].some((b) => b.id === book.id)) {
        bookmarks[status].push(book);
        localStorage.setItem("bookmarks", JSON.stringify(bookmarks));
        alert(`Додано до "${status}"!`);
      } else {
        alert("Книга вже у цьому списку!");
      }
    } else {
      alert("Невірний статус!");
    }
  }
  
  // Слухачі подій
  searchInput.addEventListener("input", filterBooks);
  genreFilter.addEventListener("change", filterBooks);
  
  // Початкова ініціалізація
  updateUser();
  generateBookCards(books);
  