document.addEventListener('DOMContentLoaded', function() {
    var deleteButton = document.querySelector('.delete-button');
    deleteButton.addEventListener('click', function() {
        if (confirm('Ви впевнені, що хочете видалити цей продукт?')) {
            //логікa для видалення продукту
            alert('Продукт видалено.');
        }
    });
});
