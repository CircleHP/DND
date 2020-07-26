const LOCAL_STORAGE_KEY = '__storage';

export const addValuesToLocalStorage = (data) => {
    localStorage[LOCAL_STORAGE_KEY] = JSON.stringify(data);
};

export const initialValues = (() => {
    try {
        return JSON.parse(localStorage[LOCAL_STORAGE_KEY])
    } catch (e) {
        return Array(100).fill().map((item, i) => ({
            id: i + 1,
            value: 'Sample text ' + (i + 1),
        }))
    }
})();
