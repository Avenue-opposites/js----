class Canvas{
    constructor(query) {
        // 获取canvas元素
        const CANVAS = document.querySelector(query);
        //创建绘制上下文2d版本
        this.ctx = CANVAS.getContext("2d");
    };
    drawLine(start, end) {
        start = state ?? { x: 0, y: 0 };
        const { ctx } = this;
        ctx.beginPath();
        ctx.moveTo(start.x, start.y);
        ctx.lineTo(end.x, end.y);
        ctx.closePath();
        ctx.stroke();
    };
    drawRect(state) {
        const { x,y,width,height,fillColor,lineWidth,strokeColor } = state ?? 
        { x: 0, y: 0, width: 0, height: 0,stroke:true,lineWidth:1,strokeColor:"black", fillColor: undefined };
        const { ctx } = this;
        ctx.beginPath();
        ctx.moveTo(x, y);
        ctx.lineTo(x + width, y);
        ctx.lineTo(x + width, y + height);
        ctx.lineTo(x, y + height);
        ctx.closePath();
        if (fillColor) {
            ctx.fillStyle = fillColor;
            ctx.fill();
            ctx.fillStyle = "";
        };
        if(strokeColor) {
            ctx.lineWidth = lineWidth;
            ctx.strokeStyle = strokeColor;
            ctx.stroke();
        };
    };
    drawCircle(state) {
        const { x,y,radius,stroke,fillColor } = state ?? 
        { x: 0, y: 0,radius:0,stroke:true,fillColor: undefined };
        const { ctx } = this;
        const arc = Math.PI / 180;
        ctx.beginPath();
        ctx.arc(x,y,radius,arc * 0,arc * 360);
        ctx.closePath();
        if (fillColor) {
            ctx.fillStyle = fillColor;
            ctx.fill();
            ctx.fillStyle = "";
        };
        if(stroke) {
            ctx.stroke();
        };
    };
    drawArc(state) {
        const { x,y,radius,startAngle,endAngle,stroke,fillColor } = state ?? 
        { x:0,y:0,radius:0,startAngle:0,endAngle:360,stroke:true,fillColor:undefined };
        const { ctx } = this;
        const arc = Math.PI / 180;
        ctx.beginPath();
        ctx.arc(x,y,radius,arc * startAngle,arc * endAngle);
        ctx.closePath();
        if(fillColor) {
            ctx.fillStyle = fillColor;
            ctx.fill();
            ctx.fillStyle = "";
        };
        if(stroke) {
            ctx.stroke();
        };
    };
    drawPolygon(state) {

    };
};


const state = {
    x: 300, 
    y: 300, 
    width: 100, 
    height: 100, 
    radius:150,
    startAngle:0,
    endAngle:180,
    // fillColor: "red",
    lineWidth:6,
    strokeColor:"red"
};

const paint = new Canvas("#root");

// paint.drawCircle(state);
// paint.drawArc(state);
paint.drawRect(state);













