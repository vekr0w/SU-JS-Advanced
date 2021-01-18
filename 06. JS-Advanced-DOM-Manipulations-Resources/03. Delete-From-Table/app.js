function deleteByEmail() {
  const tableDataElement = document.getElementsByTagName("tbody")[0];
  const inputElement = document.getElementsByTagName("input")[0];
  const errorElement = document.querySelector("#result");
  let tableData = document.getElementsByTagName("td");
  let tableDataStartlength = tableData.length;

  for (const iterator of tableData) {
    if (iterator.innerHTML == inputElement.value) {
      let itemForRemoval = iterator.parentElement;
      tableDataElement.removeChild(itemForRemoval);
    }
  }

  if (tableDataStartlength == tableData.length) {
    errorElement.innerHTML = "Not found.";
  }

  inputElement.value = "";
}