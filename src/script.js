(function Display_Data_From_Storage(){
const stored_text_data = localStorage.getItem("TEXT735");
document.getElementById("text_field").value = stored_text_data;
})();

const saveButton = document.getElementById("save_button");
saveButton.addEventListener("click", function(){
	const change_button_timer = 2000; // 2 sec
	main();
	changeButtonText(change_button_timer);
	changeButtonBorderColor();
});

function main(){
	const text_field_data = document.getElementById("text_field").value;
	const storage_container_name = "TEXT735";

	// if (text_field_data === "") return; if you don't want program to save empy strings
	if (getLocalStorageValue() === null){
		textSaver(text_field_data, storage_container_name);
	} else {
		deleteData(storage_container_name);
	}
}

function getLocalStorageValue(storage_container_name){
	const stored_text_data = localStorage.getItem(storage_container_name);
	return stored_text_data;
}

function textSaver(text_field_data, storage_container_name){
	localStorage.setItem(storage_container_name, text_field_data);
}

function deleteData(storage_container_name) {
	localStorage.removeItem(storage_container_name);
}

function changeButtonBorderColor(){
	saveButton.style.borderColor = "#32CD32";
	setTimeout(changeButtonBorderColorBack, 500);
}

function changeButtonBorderColorBack(){
	saveButton.style.borderColor = "gray";
}

function changeButtonText(change_button_timer){
	saveButton.innerHTML = "SAVED!";
	setTimeout(changeButtonTextBack, change_button_timer);
	changeButtonTextColor(change_button_timer);
}

function changeButtonTextBack(){
	saveButton.innerHTML = "SAVE TEXT";
}

function changeButtonTextColor(change_button_timer){
	saveButton.style.color = "#32CD32";
	setTimeout(changeButtonTextColorBack, change_button_timer);
}

function changeButtonTextColorBack(){
	saveButton.style.color = "gray";
}