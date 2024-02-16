function Result({secretNum, term}){
    let result;

    if(term){
        if(term > secretNum){
            result = "higher";
        }else if(term < secretNum){
            result = "lower";
        }else if(term == secretNum){
            result = 'correct';
        }else {
            result = "enter valid input"
        }
    }
    return <h3>you guessed: {result}</h3>
}

export default Result;