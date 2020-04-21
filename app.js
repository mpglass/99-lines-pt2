document.addEventListener('DOMContentLoaded', (event) => {
    //console.log('DOM fully loaded and parsed');

    let header = document.createElement('header')
    header.className = 'header d-flex justify-content-center';
    header.textContent = 'My Singing Friends';
    document.body.prepend(header);

    const friends = ['Jessica', 'Luke', 'Adam', 'Lady', 'Nibby'];

    let main = document.createElement('main');
    main.className = 'main  flex-wrap justify-content-center';
    document.body.appendChild(main);


    let songText = document.createElement('p');
    let singBtn = document.createElement('button');
    singBtn.className = 'btn btn-block w-25 mx-auto shadow p-3 mb-5 bg-info rounded';
    singBtn.textContent = 'Sing!'
    main.appendChild(singBtn);
    
    singBtn.addEventListener('click', function () {
        for (let i = 0; i < friends.length; i++) {
            let friendDiv = document.createElement('div');
            // friendDiv.className = 'div d-flex flex-wrap justify-content-left';
            let h3 = document.createElement('h3');
            h3.textContent = friends[i]
            main.appendChild(friendDiv);
            friendDiv.appendChild(h3);
            let name = friends[i]
            let counter = 10
            while (counter > 0) {
                let songText = document.createElement('p')
                songText.textContent = counter + ' lines of code in the file, ' + counter + ' lines of code; ' + name + ' strikes one out, clears it all out, ' + (counter - 1) + ' lines of code in the file';
                //console.log(friendDiv.classList)
                friendDiv.appendChild(songText)

                if (counter === 2) {
                    //let alt2Text = document.createElement('p')
                    songText.textContent = counter + ' lines of code in the file, ' + counter + ' lines of code; ' + name + ' strikes one out, clears it all out, ' + (counter - 1) + ' line of code in the file';
                    //friendDiv.appendChild(alt2Text)
                    //console.log(alt2Text)
                }

                else if (counter === 1) {
                    //let altText = document.createElement('p')
                    songText.textContent = counter + ' line of code in the file, ' + counter + ' line of code; ' + name + ' strikes one out, clears it all out, no lines of code in the file';
                    //friendDiv.appendChild(altText)
                    //console.log(altText)
                }
                
                counter--
            }

        }
    })






}); //end of DOM content loaded