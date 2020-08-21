export default function (event, element, moreTrasintion = '') {
    const { offsetX: x, offsetY: y } = event,
        { offsetWidth: width, offsetHeight: height } = element,
        xMove = (x - width / 2) / (width / 2),
        yMove = (y - height / 2) / (height / 2),
        deg = 15;
    element.style.transition = '0.3s all';
    element.style.transform = `rotate3d(${yMove}, ${xMove}, 0, ${deg}deg)`;
    if (event.type === 'mouseleave') element.style.transform = '';
}