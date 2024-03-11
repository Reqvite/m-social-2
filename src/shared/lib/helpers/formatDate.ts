export function formatDate(dateString: string | number) {
  const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  const date = new Date(dateString);
  const day = String(date.getDate()).padStart(2, "0");
  const monthIndex = date.getMonth();
  const year = date.getFullYear();
  const hours = String(date.getHours()).padStart(2, "0");
  const minutes = String(date.getMinutes()).padStart(2, "0");

  const formattedDate = `${day} ${months[monthIndex]}, ${year} | ${hours}:${minutes}`;
  return formattedDate;
}
