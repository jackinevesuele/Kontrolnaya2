
function downloadResume() {
    if (confirm('Скачать резюме?')) {
        try {
            const link = document.createElement('a');
            link.href = 'assets/resume.pdf';
            link.download = 'resume.pdf';
            link.target = '_blank'; 
            link.style.display = 'none';
            document.body.appendChild(link);
            link.click();
            document.body.removeChild(link);
        } catch (error) {
            alert('Ошибка при скачивании: ' + error.message);
        }
    }
}

function openAddEntryModal() {
    alert('Открывается форма добавления записи');
}