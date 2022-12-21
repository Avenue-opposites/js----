const color = {
    white: "white",
    black: "black"
};
function styled(str, ...values) {
    console.log(str, values);
};
function parse(str) {
    let attrs = str.map(attr => {
        return attr.replace(/\s/g, "").replace(/[\:\;]/g, "").split(/\-/);
    });
    attrs = attrs.map(attr => {
        for (let i = 1; i < attr.length; i++) {
            const element = attr[i].split("");
            element[0] = element[0].toLocaleUpperCase();
            attr[i] = element.join("");
        };
        return attr.join("");
    });
    return attrs;
}
styled.h1 = function (str, ...values) {
    const h1 = document.createElement("h1");
    const attrs = parse(str);
    for(let i = 0;i < values.length;i++) {
        // console.log(attrs[i],values[i]);
        h1.style[attrs[i]] = values[i]; 
    };
    return h1;
};
const h1 = styled.h1`
    background-color:${color.black};
    color: ${color.white};
    font-size:${"40px"};
`;
h1.innerText = "艹";
document.body.appendChild(h1);
console.log(h1);


// console.log(css);