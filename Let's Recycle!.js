6 kyu
Let's Recycle!

function recycle(array) {
    const resArr = [[], [], [], []];
    array.map(item => {
        if (item.material == 'paper') { resArr[0].push(item.type) };
        if (item.secondMaterial == 'paper') { resArr[0].push(item.type) };
        if (item.material == 'glass') { resArr[1].push(item.type) };
        if (item.secondMaterial == 'glass') { resArr[1].push(item.type) };
        if (item.material == 'organic') { resArr[2].push(item.type) };
        if (item.secondMaterial == 'organic') { resArr[2].push(item.type) };
        if (item.material == 'plastic') { resArr[3].push(item.type) };
        if (item.secondMaterial == 'plastic') { resArr[3].push(item.type) };
    })
    return resArr;
}
