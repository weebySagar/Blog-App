const formatdDate = (enteredDate) => {
    const date = new Date(enteredDate);
    const formattedDate = `${date.getDate()}/${date.getMonth() + 1
        }/${date.getFullYear()} `;

    return formattedDate;
}

export default formatdDate;