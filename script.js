
const faqItems = document.querySelectorAll(".faq-item");

const faqQuestions =
    document.querySelectorAll(".faq-question");

const searchInput =
    document.getElementById("searchInput");

const clearSearch =
    document.getElementById("clearSearch");

const openAll =
    document.getElementById("openAll");

const closeAll =
    document.getElementById("closeAll");

const themeBtn =
    document.getElementById("themeBtn");

const resultCount =
    document.getElementById("resultCount");

const noResult =
    document.getElementById("noResult");


// =====================================
// 1. OPEN / CLOSE FAQ
// =====================================

faqQuestions.forEach(function(question) {

    question.addEventListener("click", function() {

        const currentItem =
            question.parentElement;

        currentItem.classList.toggle("active");

    });

});


// =====================================
// 2. OPEN ALL
// =====================================

openAll.addEventListener("click", function() {

    faqItems.forEach(function(item) {

        item.classList.add("active");

    });

});


// =====================================
// 3. CLOSE ALL
// =====================================

closeAll.addEventListener("click", function() {

    faqItems.forEach(function(item) {

        item.classList.remove("active");

    });

});


// =====================================
// 4. SEARCH FAQ
// =====================================

searchInput.addEventListener("input", function() {

    const searchText =
        searchInput.value.toLowerCase().trim();

    let visibleCount = 0;


    faqItems.forEach(function(item) {

        const question =
            item.querySelector(".faq-question")
            .textContent
            .toLowerCase();

        const answer =
            item.querySelector(".faq-answer")
            .textContent
            .toLowerCase();


        if (
            question.includes(searchText) ||
            answer.includes(searchText)
        ) {

            item.style.display = "block";

            visibleCount++;

        } else {

            item.style.display = "none";

        }

    });


    resultCount.textContent =
        `${visibleCount} question${visibleCount !== 1 ? "s" : ""}`;


    if (visibleCount === 0) {

        noResult.style.display = "block";

    } else {

        noResult.style.display = "none";

    }

});


// =====================================
// 5. CLEAR SEARCH
// =====================================

clearSearch.addEventListener("click", function() {

    searchInput.value = "";

    faqItems.forEach(function(item) {

        item.style.display = "block";

    });

    resultCount.textContent =
        `${faqItems.length} questions`;

    noResult.style.display = "none";

    searchInput.focus();

});


// =====================================
// 6. DARK MODE
// =====================================

themeBtn.addEventListener("click", function() {

    document.body.classList.toggle("dark");


    if (document.body.classList.contains("dark")) {

        themeBtn.textContent = "☀️";

        localStorage.setItem("theme", "dark");

    } else {

        themeBtn.textContent = "🌙";

        localStorage.setItem("theme", "light");

    }

});


// Load saved theme

const savedTheme =
    localStorage.getItem("theme");


if (savedTheme === "dark") {

    document.body.classList.add("dark");

    themeBtn.textContent = "☀️";

}


// =====================================
// 7. HELPFUL FEEDBACK
// =====================================

const yesButtons =
    document.querySelectorAll(".yes-btn");

const noButtons =
    document.querySelectorAll(".no-btn");


yesButtons.forEach(function(button) {

    button.addEventListener("click", function() {

        button.textContent = "✅ Thanks!";

        button.disabled = true;

    });

});


noButtons.forEach(function(button) {

    button.addEventListener("click", function() {

        button.textContent = "👍 We'll improve";

        button.disabled = true;

    });

});


// =====================================
// 8. COPY ANSWER
// =====================================

const copyButtons =
    document.querySelectorAll(".copy-btn");


copyButtons.forEach(function(button) {

    button.addEventListener("click", function() {

        const answer =
            button.closest(".faq-answer")
            .querySelector("p")
            .textContent;


        navigator.clipboard.writeText(answer)
            .then(function() {

                button.textContent = "✅ Copied!";


                setTimeout(function() {

                    button.textContent = "📋 Copy";

                }, 1500);

            });

    });

});
