const {body} = document;

function changeBackground(number){
    //check if background is already showing
    let previousBackround;
    if(body.className){
        previousBackround = body.className
    }

    //reset thewhole class whena toggle is clicked
    body.className = '';
    switch(number){
        case '1':
            return (previousBackround === 'background-1'? false : body.classList.add('background-1'));
           // body.classList.add('background-1');
           // break;
        case '2':
            return (previousBackround === 'background-2'? false : body.classList.add('background-2'));

        case '3':
            return (previousBackround === 'background-3'? false : body.classList.add('background-3'));
        default:
            break;
        }
}