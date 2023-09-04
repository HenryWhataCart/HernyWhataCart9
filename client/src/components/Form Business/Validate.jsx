export const validate = (input) => {
    let errors = {};
    if (
      !input.name ||
      !/^[a-zA-Z\s]*$/.test(input.name) ||
      input.name.length < 3 ||
      input.name.length >= 25
    )
      errors.name = "Must contain 3 to 25 characters, letters only"; //patrón utilizado para buscar cadenas que consisten únicamente en caracteres alfabéticos (mayúsculas y minúsculas) y caracteres de espacio en blanco.
    if (!input.difficulty) errors.difficulty = "Difficulty is required";
    if (!input.duration) errors.duration = "Duration is required";
    if (!input.season) errors.season = "Season is required";
    if (input.countryId.length < 1)
      errors.countryId = "Must select at least 1 Country";
    return errors;
  };
  