document.addEventListener('DOMContentLoaded', (event) => {
    console.log('DOM fully loaded and parsed');
    
    let header = document.createElement('header')
    header.className = 'header d-flex justify-content-center';
    header.textContent = 'My Singing Friends';
    document.body.prepend(header);
    
    const friends = ['Jessica', 'Luke', 'Adam', 'Lady', 'Nibby'];
    
    let main = document.createElement('main');
    main.className = 'main d-flex justify-content-center';
    document.body.appendChild(main);
    
    let friendDiv = document.createElement('div');
    friendDiv.className = 'div d-flex justify-content-left';
    let h3 = document.createElement('h3');
    let text = document.createElement ('p');
    let singBtn = document.createElement('button');
    singBtn.className = 'btn shadow p-3 mb-5 bg-info rounded';
    singBtn.textContent = 'Sing!'
    main.appendChild(singBtn);
    main.appendChild(friendDiv);
    friendDiv.appendChild(h3);
    h3.appendChild(text);

    singBtn.addEventListener('click', function (){
        for (let i=0; i < friends.length; i++) {
            h3.textContent = (friends[i])
            let name = (friends[i])
            let counter = 99
            while (counter > 0) {
                let text = counter + ' lines of code in the file, ' + counter + ' lines of code; ' + name + ' strikes one out, clears it all out, ' + (counter-1) + ' lines of code in the file';
                if (counter===2) {    
                    let alt2Text= counter + ' lines of code in the file, ' + counter + ' lines of code; ' + name + ' strikes one out, clears it all out, ' + (counter-1) + ' line of code in the file';
                    
                    console.log(alt2Text)
                }
                
                else if (counter===1) {    
                    let altText= counter + ' line of code in the file, ' + counter + ' line of code; ' + name + ' strikes one out, clears it all out, ' + (counter-1) + ' lines of code in the file';
                    
                    console.log(altText)
                }
                else {
                    console.log(text)
                }
                counter--
            }
            
        }
    })
    


    


}); //end of DOM content loaded