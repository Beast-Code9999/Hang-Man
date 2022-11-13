const wordsArray = ['hair', 'passenger', 'library','poetry','category','revenue','analysis','magazine','height','economics','explanation','agency','preparation','birthday','diamond','wood','clothes','student','government','quality','elevator','speech','contract','disaster','fortune','classroom','leader','addition','supermarket','consequence','insect','outcome','leadership','dinner','chest','wedding','republic','mixture','interaction','advice']

const descriptionArray = ['Black and thin, grows from folicles that are found on the dermis',
    'a traveller on a public or private conveyance other than the driver, pilot, or crew.',
    'a building or room containing collections of books',
    'literary work in which the expression of feelings and ideas is given intensity by the use of distinctive style and rhythm',
    'a class or division of people or things regarded as having particular shared characteristics.',
    'income, especially when of an organization and of a substantial nature.',
    'detailed examination of the elements or structure of something.',
    'a periodical publication containing articles and illustrations',
    'the measurement of someone or something from head to foot or from base to top.',
    'the branch of knowledge concerned with the production, consumption, and transfer of wealth.',
    'a statement or account that makes something clear.',
    'a business or organization providing a particular service on behalf of another business, person, or group.',
    'the action or process of preparing or being prepared for use or consideration.',
    'the anniversary of the day on which a person was born, typically treated as an occasion for celebration and the giving of gifts.',
    'a solid form of the element carbon',
    'the hard fibrous material that forms the main substance of the trunk or branches of a tree or shrub, used for fuel or timber.',
    'items worn to cover the body.',
    'a person who is studying at a university or other place of higher education.',
    'the group of people with the authority to govern a country or state; a particular ministry in office.',
    'the standard of something as measured against other things of a similar kind; the degree of excellence of something.',
    'car that moves in a vertical shaft to carry passengers or freight between the levels of a multistory building',
    'the expression of or the ability to express thoughts and feelings by articulate sounds.',
    'a written or spoken agreement, especially one concerning employment, sales, or tenancy, that is intended to be enforceable by law.',
    'a sudden accident or a natural catastrophe that causes great damage or loss of life.',
    'chance or luck as an arbitrary force affecting human affairs.',
    'a room in which a class of pupils or students is taught.',
    'the person who leads or commands a group, organization, or country.',
    'the action or process of adding something to something else.',
    'a large self-service shop selling foods and household goods.',
    'a result or effect, typically one that is unwelcome or unpleasant.',
    'a small arthropod animal that has six legs and generally one or two pairs of wings.',
    'the way a thing turns out; a consequence.',
    'the action of leading a group of people or an organization.',
    'the main meal of the day, taken either around midday or in the evening.',
    "the front surface of a person's or animal's body between the neck and the stomach.",
    'a marriage ceremony, especially considered as including the associated celebrations.',
    'a state in which supreme power is held by the people and their elected representatives, and which has an elected or nominated president rather than a monarch.',
    'a substance made by mixing other substances together.',
    'communication or direct involvement with someone or something.',
    'guidance or recommendations offered with regard to prudent future action.']

const description = document.querySelector('.description');
const output = document.querySelector('.output');
const inputData = document.querySelectorAll('.input__data');

let chosenWord;
let counter = 0;

window.addEventListener('load', randomChoice);

function randomChoice() {
    const randomIndex = Math.floor(Math.random() * 40);
    console.log(randomIndex)
    description.textContent = descriptionArray[randomIndex];
    let word = '';
    for( let i = 0; i < wordsArray[randomIndex].length; i++ ) {
        word += " _ "
    } 
    output.textContent = word
    chosenWord = wordsArray[randomIndex];
}

checkLetter()

function checkLetter() {
    inputData.forEach( function( letter ) {
        // console.log(letter.childNodes[0])
        letter.addEventListener('click', verifyLetter)

        function verifyLetter() {
            if( letter.childNodes[0] !== undefined ) {
                addCssOnLetter()
                displayWord()
            }
        }

        function addCssOnLetter() {
            for( let i = 0; i < chosenWord.length; i++ ) {
                if( letter.childNodes[0].textContent.toLowerCase() === chosenWord[i].toLowerCase() ) {
                    letter.classList.add('active', 'correct-input');
                }
                else {
                    letter.classList.add('active', 'wrong-input');
                }
            }
        }

        function displayWord() {
            let spreadedArray = output.textContent.split('');
            for( let i = 0; i < chosenWord.length; i++ ) {
                if( letter.childNodes[0].textContent.toLowerCase() === chosenWord[i].toLowerCase() ) {
                    spreadedArray[(i * 2 + 1) + i] = chosenWord[i] // (i * 2 + 1) + i is the formula to convert the index number of chosenWord[i] to output.textContent specific underscore spacing 
                    output.textContent = spreadedArray.join('')
                }
            }
        }
    })
}

draw()

function draw() {
    const container = document.querySelector('.image-container');
    // const containerWidth = container.clientWidth;
    // const containerHeight = container.clientHeight;

    const canvas = document.getElementById('canvas');

    canvas.style.width = '95%';
    canvas.style.height = '95%';
    canvas.style.borderRadius = '1rem'
    canvas.style.background = '#c6bd98';
}

