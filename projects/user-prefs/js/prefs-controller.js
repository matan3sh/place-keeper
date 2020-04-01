'use-strict'

function onInit() {
    createUserPrefs()
}

function onApplyUserPrefs(userPrefs) {
    onBackgroundChange(userPrefs.backgroundColor)
    onTextColorChange(userPrefs.textColor)
    onUserEmailChange(userPrefs.userEmail)
    onUserDateChange(userPrefs.userDate)
    onAgeChange(userPrefs.userAge)
}

function onSubmit(e) {
    e.preventDefault();
    const backgroundColor = document.querySelector('.background-color').value;
    const textColor = document.querySelector('.text-color').value;
    const userDate = document.querySelector('.user-date').value;
    const userEmail = document.querySelector('.user-email').value;
    const userAge = document.querySelector('.user-age').value;
    userPrefs = {
        backgroundColor,
        textColor,
        userDate,
        userEmail,
        userAge
    }
    addUserPrefs(userPrefs)
    onApplyUserPrefs(userPrefs)
}

function onBackgroundChange(userBackground) {
    document.querySelector('body').style.backgroundColor = userBackground;
}

function onTextColorChange(userTextColor) {
    document.querySelector('body').style.color = userTextColor;
}

function onUserDateChange(userDate) {
    document.querySelector('.user-date').value = userDate;
}

function onUserEmailChange(userEmail) {
    document.querySelector('.user-email').value = userEmail;
}

function onAgeChange(userAge) {
    document.querySelector('.user-age-value').innerText = userAge
}