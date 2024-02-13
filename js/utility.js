function hidePageById(elementId){
    const element = document.getElementById(elementId);
    element.classList.add('hidden');
}
function showPageById(elementId){
    const element = document.getElementById(elementId);
    element.classList.remove('hidden');
}