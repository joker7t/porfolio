export default function (event, element) {
    const { offsetX: x, offsetY: y } = event,
        { offsetWidth: width, offsetHeight: height } = element,
        move = 20,
        xMove = x / width * (move * 2) - move,
        yMove = y / height * (move * 2) - move;
    element.style.transform = `translate(${xMove}px, ${yMove}px)`;
    if (event.type === 'mouseleave') element.style.transform = '';

    console.log(element.style.transform)
}