document.addEventListener('DOMContentLoaded', function () {
    const filterInput = document.getElementById('filterInput');
    const projects = document.querySelectorAll('.project');

    filterInput.addEventListener('input', function () {
        const filterValue = filterInput.value.toLowerCase();

        projects.forEach(project => {
            const technology = project.dataset.technology.toLowerCase();
            project.style.display = technology.includes(filterValue) ? 'block' : 'none';
        });
    });
});
