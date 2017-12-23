function foo() {
    var bar;
    quux=4;
    function zip() {
        var quux=3;
        bar = true;
    }
    return zip;
}
