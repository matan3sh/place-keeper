'use-strict'

var gPrefs

const KEY = 'userPrefs'

function createUserPrefs() {
    var userPrefs = loadFromStorage(KEY)
    if (!userPrefs || userPrefs === null) {
        userPrefs = [];
    }
    onApplyUserPrefs(userPrefs)
    gPrefs = userPrefs;
    _savePrefsToStorage();
}

function getUserPrefs() {
    return gPrefs
}

function addUserPrefs(userPrefs) {
    gPrefs = userPrefs
    _savePrefsToStorage()
}

function _savePrefsToStorage() {
    saveToStorage(KEY, gPrefs);
}