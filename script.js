// script.js

document.addEventListener('DOMContentLoaded', () => {
    const prefixElement = document.getElementById('prefix');
    const pathSegments = window.location.pathname.split('/').filter(Boolean);
    if (pathSegments.length > 0) {
        const prefix = pathSegments[0];
        prefixElement.textContent = ' ' + prefix;
    }
});
