export const handleDatePicker = (date, setBirthDate, setValue) => {
  if (!date) return "";

  const year = date.getFullYear();

  const month = String(date.getMonth() + 1).padStart(2, "0");

  const day = String(date.getDate()).padStart(2, "0");

  const formattedDate = `${year}-${month}-${day}`;

  setBirthDate(formattedDate);

  setValue("birthday", formattedDate);
};
