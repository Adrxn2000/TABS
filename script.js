document.addEventListener('DOMContentLoaded', () => {
    const tabs = document.querySelectorAll('.tab');
    const tabContents = document.querySelectorAll('.tab-content');

    tabs.forEach(tab => {
        tab.addEventListener('click', () => {
            // Remove active class from all tabs and contents
            tabs.forEach(t => t.classList.remove('active'));
            tabContents.forEach(content => content.classList.remove('active'));

            // Add active class to the clicked tab and corresponding content
            tab.classList.add('active');
            const tabId = tab.dataset.tab;
            document.getElementById(`tab${tabId}`).classList.add('active');
        });
    });

    // Activate the first tab by default
    tabs[0].classList.add('active');
    tabContents[0].classList.add('active');
});