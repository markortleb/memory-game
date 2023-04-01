import uniqid from 'uniqid';


export default function loadCards () {
    function _importAll(r) {
        return r.keys().map(r);
    }

    function shuffleArray(array) {
        for (let i = array.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [array[i], array[j]] = [array[j], array[i]];
        }
    }

    const images = _importAll(require.context('../img', false, /\.(png|jpe?g|svg|webp|jpg)$/));

    let cards = images.map(item => {
        return {
            id: uniqid(),
            image: item,
            name: item.split('/').at(-1).split('.').at(0),
            wasClicked: false
        }
    });

    shuffleArray(cards);

    return cards;



}