export const searchValidate = () => {
  const searchInput = document.querySelector('.intro__search');
  const SEARCH_VALID_REGEX = /[!@#$%^&*()]/;

  const onInputRegex = () => {
    const value = searchInput.value.toLowerCase();

    if (SEARCH_VALID_REGEX.test(value) || searchInput.value.length > 12) {
      searchInput.setCustomValidity(
          `Максимальная длина запроса 12 символов.
          Запрос должен состоять из букв и чисел и не может содержать спецсимволы (!,@,#,$,%,^,&,*,()).`
      );
    } else {
      searchInput.setCustomValidity('');
    }

    searchInput.reportValidity();
  };

  searchInput.addEventListener('input', onInputRegex);
};
