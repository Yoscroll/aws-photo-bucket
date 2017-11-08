console.log("hi");
let getImg = () => $.ajax({
	url: 'https://q4io62yr1e.execute-api.us-west-2.amazonaws.com/dev/users/photos',
	type: 'GET',
	success: (data) => buildHtmlElements(data.message.Contents),
});
let buildHtmlElements = (responseData) =>(
	responseData.map((pic)=>{
		$('#pictures').append(`<div class="image"><img src="https://s3-us-west-2.amazonaws.com/photo-bucket-tmp-prjct/${pic.Key}"></div>`)
    })
);
