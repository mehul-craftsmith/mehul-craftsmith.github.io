const tabItem = document.querySelectorAll('.tab-item');
const contents = document.querySelectorAll('.tab-content');
tabItem.forEach(singleTab => {
    singleTab.addEventListener('click', () => {

        // Remove active class from all buttons
        tabItem.forEach(tab => tab.classList.remove('active'));

        // Hide all content
        contents.forEach(content => content.classList.remove('active'));

        // Add active class to clicked button
        const parentLi = singleTab.closest('li');
        if (parentLi) parentLi.classList.add('active');

        // Show corresponding tab content
        const tabId = singleTab.getAttribute('data-tab');
        document.getElementById(tabId).classList.add('active');

    });
});