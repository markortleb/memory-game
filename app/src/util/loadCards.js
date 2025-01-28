import uniqid from 'uniqid';
import shuffleArray from "./shuffleArray";


export default function loadCards () {
    function _importAll(r) {
        return r.keys().map(r);
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