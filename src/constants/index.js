const dateFormat = (date) => {
  const dateArr = date.split("-");
  const getMonth = (month) => {
    switch (month) {
      case "01":
        return "Jan";
        break;
      case "02":
        return "Feb";
        break;
      case "03":
        return "Mar";
        break;
      case "04":
        return "Apr";
        break;
      case "05":
        return "May";
        break;
      case "06":
        return "June";
        break;
      case "07":
        return "July";
        break;
      case "08":
        return "Aug";
        break;
      case "09":
        return "Sep";
        break;
      case "10":
        return "Oct";
        break;
      case "11":
        return "Nov";
        break;
      case "12":
        return "Dec";
        break;
    }
  };

  return `${dateArr[2]}-${getMonth(dateArr[1])}-${dateArr[0]}`;
};

function toHoursAndMinutes(totalMinutes) {
  const hours = Math.floor(totalMinutes / 60);
  const minutes = totalMinutes % 60;
  return `${hours}h ${minutes}m`;
}

export { dateFormat, toHoursAndMinutes };
