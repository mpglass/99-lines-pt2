document.addEventListener('DOMContentLoaded', (event) => {
    console.log('DOM fully loaded and parsed');

document.createElement = ('header');
document.appendChild('header');

    
let friends = ['Jessica', 'Luke', 'Adam', 'Lady Fluffington', 'Nibby'];
let singBtn = document.createElement('button');
singBtn.className = 'btn shadow p-3 mb-5 bg-info rounded';


    for (let i=0; i < friends.length; i++) {
        console.log(friends[i])
        let name=(friends[i])
        let counter=99
        while (counter > 0) {
            let text= counter + ' lines of code in the file, ' + counter + ' lines of code; ' + name + ' strikes one out, clears it all out, ' + (counter-1) + ' lines of code in the file';
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
    
    
});