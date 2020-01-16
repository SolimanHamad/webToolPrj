function handleSubmit(event) {
    event.preventDefault();

    var inputUrl = document.querySelectorAll('input[name=test-url]');
    var parseString = JSON.stringify(inputUrl[0].value);

    if(Client.validURL(JSON.parse(parseString)))
    {
        console.log("fuck udacity");
        fetch('http://localhost:3000/test', {
            method: 'POST',
            mode: 'cors',
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json; odata=verbose',
            },
            body: JSON.stringify({text: inputUrl[0].value})
        })
        .then(res => res.json())
        .then(function(res) {

            // update the index with the results 
            document.querySelector('section.url-results #polarity').innerHTML = res.polarity;
            document.querySelector('section.url-results #subjectivity').innerHTML = res.subjectivity;
            document.querySelector('section.url-results #polarity_confidence').innerHTML = res.polarity_confidence;
            document.querySelector('section.url-results #subjectivity_confidence').innerHTML = res.subjectivity_confidence;
            document.querySelector('section.url-results #excerpt').innerHTML = res.text;

        })
    }
    
    else{
        var errorSection = document.querySelector('section.errors');
        var error = document.querySelector('#error');
        error.innerHTML = "Invalid URL";
        errorSection.style.display = "block";
    } 
}

export { handleSubmit }
