function Rectangle(w, h) {
    this.width = w;
    this.height = h;
}
Rectangle.prototype.getArea = function () { return this.width * this.height; };

Rectangle.prototype.toString = function () {
    return "rect W:" + this.width + " H:" + this.height;
};

Rectangle.prototype.valueOf = function () {
    return this.getArea();
};

Rectangle.prototype.name = "RECTANGLE";

Rectangle.prototype.equals = function (otherObj) {
    if (this.width === otherObj.width && this.height === otherObj.height) {
        return true;
    }
    return false;
};

Rectangle.prototype.compareTo = function (otherObject) {
    // return this.getArea() - otherObject.getArea();

    if (this.getArea() > otherObject.getArea()) { return 1; }
    else if (this.getArea() < otherObject.getArea()) { return -1; }
    return 0;
};

var rectA = new Rectangle(100, 500);
var rectB = new Rectangle(200, 800);
var rectC = new Rectangle(200, 800);

document.write(rectA + "<br>"); // valueOf()
document.write(rectA.toString() + "<br>");
document.write(rectA + rectB); // valueOf()

document.write("<br>" + "----" + "<br>");

document.write("hasOwnProperty('width') > " + rectA.hasOwnProperty("width") + "<br>");
document.write("hasOwnProperty('name') > " + rectA.hasOwnProperty("name") + "<br>");
document.write("'width' in rectA > " + ("width" in rectA) + "<br>");
document.write("'name' in rectA > " + ("name" in rectA));

document.write("<br>" + "----" + "<br>");

document.write("rectC <= rectB > " + (rectC <= rectB) + "<br>"); // valueOf()
document.write("rectC == rectB > " + (rectC == rectB) + "<br>"); // valueOf()
document.write("rectC.equals(rectB) > " + (rectC.equals(rectB)) + "<br>");
document.write("rectC.compareTo(rectB) == 0 > " + (rectC.compareTo(rectB) == 0) + "<br>");
document.write("rectA.compareTo(rectB) <= 0 > " + (rectA.compareTo(rectB) <= 0));