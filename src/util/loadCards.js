import uniqid from 'uniqid';


export default function loadCards () {
    function _importAll(r) {
        return r.keys().map(r);
    }

    const images = _importAll(require.context('../img', false, /\.(png|jpe?g|svg|webp|jpg)$/));

    return images.map(item => {
        return {
            id: uniqid(),
            image: item,
            name: item.split('/').at(-1).split('.').at(0),
            wasClicked: false
        }
    });

}