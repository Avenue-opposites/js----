function getTop3Tag() {
    const body = document.querySelector("body");
    const count = {};
    function scan(element,count) {
        const tag = element.tagName.toLocaleLowerCase();
        count[tag] = (count[tag] || 0) + 1;
        for (const el of element.children) {
            scan(el,count);
        }
    }
    scan(body,count);
    const sorted = Object.entries(count).sort((first,second) => second[1] - first[1]);
    const top3 = sorted.slice(0,3);
    return top3.map(v => v[0]);
}

const top3 = getTop3Tag();
console.log(top3);