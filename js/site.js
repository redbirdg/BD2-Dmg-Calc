window.clickElement = (element) => {
    var evt = new MouseEvent("click", { bubbles: true, cancelable: true });
    evt.stopPropagation();
    element.dispatchEvent(evt);
};

window.downloadJson = (filename, jsonContent) => {
    const blob = new Blob([jsonContent], { type: "application/json" });
    const link = document.createElement("a");
    link.href = URL.createObjectURL(blob);
    link.download = filename;
    link.style.display = "none";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(link.href);
};

window.resetFileInput = (id) => {
    document.getElementById(id).value = "";
}

window.resetValue = (element) => {
    element.value = "";
};

window.setTitle = (title) => {
    document.title = title;
};
