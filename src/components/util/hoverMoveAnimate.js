export default function (event, element, moreTrasintion = '') {
    const { offsetX: x, offsetY: y } = event,
        { offsetWidth: width, offsetHeight: height } = element,
        move = 20,
        xMove = x / width * (move * 2) - move,
        yMove = y / height * (move * 2) - move;
    element.style.transition = '0.3s all';
    element.style.transform = `translate(${xMove}px, ${yMove}px) ${moreTrasintion}`;
    if (event.type === 'mouseleave') element.style.transform = '';
}