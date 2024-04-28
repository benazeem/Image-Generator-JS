const API_TOKEN = "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";
const inputtext = document.getElementById("txtinput");
const generatebtn = document.getElementById("generatebtn");
const genimage = document.getElementById("genimage");



generatebtn.addEventListener("click", async function(){
	genimage.src = "catload.gif";

	if (inputtext.value == "") {
		alert("Please enter a text");
		return;
	}

	else {
    query().then((response) => {
        genimage.src = URL.createObjectURL(response);
    });}
}
)

inputtext.addEventListener("keypress", function(event) {
	if (event.key === "Enter") {
		genimage.src = "catload.gif";

		if (inputtext.value == "") {
			alert("Please enter a text");
			return;
		}
	
		else {
		query().then((response) => {
			genimage.src = URL.createObjectURL(response);
		});}
	}
  });

async function query(data) {
	const response = await fetch(
		"https://api-inference.huggingface.co/models/Melonie/text_to_image_finetuned",
		{
			headers: { Authorization: `Bearer ${API_TOKEN}` },
			method: "POST",
			body: JSON.stringify({inputs: inputtext.value}),
		}
	);
	const result = await response.blob();
	return result;
}
