let tasksList = $('.list');
tasksList.html(localStorage.getItem('storagedata'));

//the new task creating
$('.main-save').on('click', function (event) {
    event.preventDefault();
    let newTask = $('#mainInput');
    tasksList.append('' +
        '<li class="task-container">\n' +
        '    <div class="task-flex">\n' +
        '        <div class="task-body">'+newTask.val()+'</div>\n' +
        '        <div class="buttons-body">\n' +
        '            <div class="item-button">\n' +
        '                <button class="editing">Edit</button>\n' +
        '            </div>\n' +
        '            <div class="item-button">\n' +
        '                <button class="deleting">Delete</button>\n' +
        '            </div>\n' +
        '            <div class="item-button">\n' +
        '                <button class="done">Done</button>\n' +
        '            </div>\n' +
        '        </div>\n' +
        '    </div>\n' +
        '</li>');
    newTask.val('');
    localStorage.setItem('storagedata', tasksList.html());
});

//the task editing
tasksList.on('click', '.editing', function (event) {
    event.preventDefault();
    let editTask = $(this).closest('.task-container').find('.task-body').html();
    $(this).closest('.task-container').append('' +
        '<div class="edit-task-container">\n' +
        '    <label for="editInput" class="input-label">\n' +
        '        <textarea name="mainInput" id="editInput" class="input-field">' + editTask + '</textarea>\n' +
        '    </label>\n' +
        '    <button class="edit-save save-button">Update</button>\n' +
        '</div>');
    $(this).closest('.buttons-body').hide();
});
tasksList.on('click', '.edit-save', function (event) {
    event.preventDefault();
    let editedTask = $(this).closest('.edit-task-container').find('.input-field').val();
    $(this).closest('.task-container').find('.task-body').html(editedTask);
    $(this).closest('.task-container').find('.buttons-body').show();
    $(this).closest('.edit-task-container').html('');
    localStorage.setItem('storagedata', tasksList.html());
});

//the task deleting
tasksList.on('click', '.deleting', function (event) {
    event.preventDefault();
    $(this).closest('.task-container').html('');
    localStorage.setItem('storagedata', tasksList.html());
});

//done task
tasksList.on('click', '.done', function (event) {
    event.preventDefault();
    $(this).closest('.task-container').find('.task-body').toggleClass('done-task');
    $(this).closest('.task-container').find('.editing, .deleting').toggle();
    localStorage.setItem('storagedata', tasksList.html());
});
