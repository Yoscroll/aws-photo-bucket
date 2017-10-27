console.log("hi");

$('#getPics').click(() => {
 	getImg();
 });

let getImg = (id)=> $.ajax({
	url: `http://photo-bucket-tmp-prjct.us-west-2.amazonaws.com`,
	type: 'GET',
	success: (data) => buildHtmlElements(data),//200
});

let buildHtmlElements = (responseData) =>(
	console.log(responseData),
	console.log("loading pictures...")
);
