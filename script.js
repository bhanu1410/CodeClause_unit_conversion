function convert() {
    var input = document.getElementById("inputUnit").value;
    var fromUnit = document.getElementById("fromUnit").value;
    var toUnit = document.getElementById("toUnit").value;
    var output = document.getElementById("outputUnit");

    // Conversion logic
    var result;

    if (fromUnit === "cm" && toUnit === "inch") {
        result = input * 0.393701;
    } else if (fromUnit === "inch" && toUnit === "cm") {
        result = input * 2.54;
    } else if (fromUnit === "m" && toUnit === "inch") {
        result = input * 39.3701;
    } else if (fromUnit === "inch" && toUnit === "m") {
        result = input * 0.0254;
    } else if (fromUnit === "km" && toUnit === "m") {
        result = input * 1000;
    } else if (fromUnit === "m" && toUnit === "km") {
        result = input * 0.001;
    } else if (fromUnit === "kg" && toUnit === "lb") {
        result = input * 2.20462;
    } else if (fromUnit === "lb" && toUnit === "kg") {
        result = input * 0.453592;
    } else if (fromUnit === "celsius" && toUnit === "fahrenheit") {
        result = (input * 9/5) + 32;
    } else if (fromUnit === "fahrenheit" && toUnit === "celsius") {
        result = (input - 32) * 5/9;
    } else {
        result = input;
    }

    output.value = result.toFixed(2);
}
