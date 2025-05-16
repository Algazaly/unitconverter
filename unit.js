// // const input = document.querySelector('.input-section');
// // input.innerHTML = `
// //       <form id="tempForm">
// //         <input type="number" id="inputValue" placeholder="Enter Value" required />
// //         <select id="fromUnit">
// //           <option value="k">Kelvin</option>
// //           <option value="c">Celsius</option>
// //           <option value="f">Fahrenheit</option>
// //         </select>
// //         <select id="toUnit">
// //           <option value="k">Kelvin</option>
// //           <option value="c">Celsius</option>
// //           <option value="f">Fahrenheit</option>
// //         </select>
// //         <input type="text" id="outputValue" placeholder="Result" readonly />
// //         <button type="submit">Submit</button>
// //       </form>
// //     `;

// // const leng = document.getElementById('leng');
// // leng.addEventListener('click', function () {
// //     console.log("meeeeee")
// //     const input = document.querySelector('.input-section').innerHTML =
// //         `<form id="lengthForm">
// //         <input type="number" id="inputValue" placeholder="Enter Value" required />
// //         <select id="fromUnit">
// //           <option value="cm">Centimeter</option>
// //           <option value="m">Meter</option>
// //           <option value="km">Kilometer</option>
// //           <option value="mi">Mile</option>
// //           <option value="yd">Yard</option>
// //           <option value="ft">Foot</option>
// //           <option value="in">Inch</option>
// //         </select>

// //         <select id="toUnit">
// //           <option value="cm">Centimeter</option>
// //           <option value="m">Meter</option>
// //           <option value="km">Kilometer</option>
// //           <option value="mi">Mile</option>
// //           <option value="yd">Yard</option>
// //           <option value="ft">Foot</option>
// //           <option value="in">Inch</option>
// //         </select>
// //         <input type="text" id="outputValue" placeholder="Result" readonly />
// //         <button type="submit">Submit</button>
// //       </form>`;

// // })

// // let temp = document.getElementById('temp');

// // temp.addEventListener('click', function () {
// //     console.log("Algazaly");
// //     const input = document.querySelector('.input-section');
// //     input.innerHTML = `
// //       <form id="tempForm">
// //         <input type="number" id="inputValue" placeholder="Enter Value" required />
// //         <select id="fromUnit">
// //           <option value="k">Kelvin</option>
// //           <option value="c">Celcius</option>
// //           <option value="f">Fahrenheit</option>
// //         </select>

// //         <select id="toUnit">
// //           <option value="k">Kelvin</option>
// //           <option value="c">Celcius</option>
// //           <option value="f">Fahrenheit</option>
// //         </select>
// //         <input type="text" id="outputValue" placeholder="Result" readonly />
// //         <button type="submit">Submit</button>
// //       </form>
// //     `;
// // });

// // const time = document.getElementById('time');

// // time.addEventListener('click', function () {
// //     console.log("Algazaly");
// //     const input = document.querySelector('.input-section');
// //     input.innerHTML = `
// //       <form id="timeForm">
// //         <input type="number" id="inputValue" placeholder="Enter Value" required />
// //         <select id="fromUnit">
// //           <option value="s">Seconds</option>
// //           <option value="min">Minutes</option>
// //           <option value="h">Hours</option>
// //           <option value="d">Days</option>
// //         </select>

// //         <select id="toUnit">
// //           <option value="s">Seconds</option>
// //           <option value="min">Minutes</option>
// //           <option value="hr">Hours</option>
// //           <option value="day">Days</option>
// //         </select>
// //         <input type="text" id="outputValue" placeholder="Result" readonly />
// //         <button type="submit">Submit</button>
// //       </form>
// //     `;
// // });

// // //const input = document.getElementById('inputValue');
// // //const from = document.getElementById('fromUnit');
// // //const to = document.getElementById('toUnit');
// // //const output = document.getElementById('outputValue');
// // //const input = document.querySelector('#inputValue');

// // //input.addEventListener('click', function(){
// // //    console.log("suf");
// // //})

// // //const inputSection = document.querySelector('.input-section');

// // //inputSection.addEventListener('click', function() {
// // //    console.log("suf");
// // //});

// // const form = document.getElementById('tempForm');
// // form.addEventListener('submit', function (e) {
// //     e.preventDefault();
// //     const input = document.getElementById('inputValue').value;
// //     const from = document.getElementById('fromUnit').value;
// //     const to = document.getElementById('toUnit').value;
// //     let output = document.getElementById('outputValue').value;
// //     console.log(input);
// //     console.log(from);
// //     console.log(to);

// //     if (from === "c" && to === "k") {
// //         const val = input + 273.15;
// //         output = val;
// //         console.log(val);
// //         return document.getElementById("outputValue").value = output;

// //     } else if (from === "k" && to === "c") {
// //         const val = input - 273.15;
// //         output = val;
// //         console.log(val)
// //         console.log(val);;
// //     } else if (from === "c" && to === "f") {
// //         const val = (input * 9 / 5) + 32;
// //         output = val;
// //         console.log(val);
// //     } else if (from === "f" && to === "c") {
// //         const val = (input - 32) * 5 / 9;
// //         output = val;
// //         console.log(val);
// //     } else if (from === "k" && to === "f") {
// //         const val = (input - 273.15) * 9 / 5 + 32;
// //         output = val;
// //         console.log(val);
// //     } else if (from === "f" && to === "k") {
// //         const val = (input - 32) * 5 / 9 + 273.15;
// //         output = val;
// //         console.log(val);
// //     } else {
// //         output = input; // same unit
// //         console.log("No conversion needed:", output);
// //     }



// // });

// // const forl = document.getElementById('lengthForm');
// // forl.addEventListener('submit', function (e) {
// //     e.preventDefault();
// //     const input = document.getElementById('inputValue').value;
// //     const from = document.getElementById('fromUnit').value;
// //     const to = document.getElementById('toUnit').value;
// //     let output = document.getElementById('outputValue').value;
// //     console.log(input);
// //     console.log(from);
// //     console.log(to);

// //     if (from === "m" && to === "km") {
// //         const val = input / 1000;
// //         output = val;
// //         console.log(val);
// //     } else if (from === "km" && to === "m") {
// //         const val = input * 1000;
// //         output = val;
// //         console.log(val);
// //     } else if (from === "m" && to === "mi") {
// //         const val = input / 1609.34;
// //         output = val;
// //         console.log(val);
// //     } else if (from === "mi" && to === "m") {
// //         const val = input * 1609.34;
// //         output = val;
// //         console.log(val);
// //     } else if (from === "m" && to === "cm") {
// //         const val = input * 100;
// //         output = val;
// //         console.log(val);
// //     } else if (from === "cm" && to === "m") {
// //         const val = input / 100;
// //         output = val;
// //         console.log(val);
// //     } else if (from === "in" && to === "cm") {
// //         const val = input * 2.54;
// //         output = val;
// //         console.log(val);
// //     } else if (from === "cm" && to === "in") {
// //         const val = input / 2.54;
// //         output = val;
// //         console.log(val);
// //     } else if (from === "ft" && to === "m") {
// //         const val = input * 0.3048;
// //         output = val;
// //         console.log(val);
// //     } else if (from === "m" && to === "ft") {
// //         const val = input / 0.3048;
// //         output = val;
// //         console.log(val);
// //     } else {
// //         output = input; // Same unit, no conversion needed
// //         console.log("No conversion needed:", output);
// //     }




// // });




// // const fort = document.getElementById('timeForm');

// // fort.addEventListener('submit', function (e) {
// //     e.preventDefault();
// //     const input = document.getElementById('inputValue').value;
// //     const from = document.getElementById('fromUnit').value;
// //     const to = document.getElementById('toUnit').value;
// //     let output = document.getElementById('outputValue').value;
// //     console.log(input);
// //     console.log(from);
// //     console.log(to);


// //     if (from === "s" && to === "min") {
// //         const val = input / 60;
// //         output = val;
// //         console.log(val);
// //     } else if (from === "min" && to === "s") {
// //         const val = input * 60;
// //         output = val;
// //         console.log(val);
// //     } else if (from === "min" && to === "hr") {
// //         const val = input / 60;
// //         output = val;
// //         console.log(val);
// //     } else if (from === "hr" && to === "min") {
// //         const val = input * 60;
// //         output = val;
// //         console.log(val);
// //     } else if (from === "hr" && to === "day") {
// //         const val = input / 24;
// //         output = val;
// //         console.log(val);
// //     } else if (from === "day" && to === "hr") {
// //         const val = input * 24;
// //         output = val;
// //         console.log(val);
// //     } else if (from === "s" && to === "hr") {
// //         const val = input / 3600;
// //         output = val;
// //         console.log(val);
// //     } else if (from === "hr" && to === "s") {
// //         const val = input * 3600;
// //         output = val;
// //         console.log(val);
// //     } else if (from === "s" && to === "day") {
// //         const val = input / 86400;
// //         output = val;
// //         console.log(val);
// //     } else if (from === "day" && to === "s") {
// //         const val = input * 86400;
// //         output = val;
// //         console.log(val);
// //     } else if (from === "min" && to === "day") {
// //         const val = input / 1440;
// //         output = val;
// //         console.log(val);
// //     } else if (from === "day" && to === "min") {
// //         const val = input * 1440;
// //         output = val;
// //         console.log(val);
// //     } else {
// //         output = input;
// //         console.log("No conversion needed");
// //     }


// // });

// /*
//  * Refactored front‑end unit converter
//  * One script handles temperature, length and time.
//  * Author: ChatGPT (refactor)
//  * ------------------------------------------------
//  * 1. Click a navigation item (Temperature / Length / Time)
//  * 2. A suitable form is rendered inside .input-section
//  * 3. A single submit handler converts the value using
//  *    simple factor maps or helper functions.
//  */

// /* --------------------------------------------------
//  *  Templates (plain strings – no stray <!DOCTYPE> etc.)
//  * --------------------------------------------------*/
// const templates = {
//     temperature: `
//     <form class="converter-form">
//       <input type="number" id="inputValue" placeholder="Enter value" required />

//       <select id="fromUnit">
//         <option value="k">Kelvin</option>
//         <option value="c">Celsius</option>
//         <option value="f">Fahrenheit</option>
//       </select>

//       <select id="toUnit">
//         <option value="k">Kelvin</option>
//         <option value="c">Celsius</option>
//         <option value="f">Fahrenheit</option>
//       </select>

//       <input type="text" id="outputValue" placeholder="Result" readonly />
//       <button type="submit">Convert</button>
//     </form>` ,

//     length: `
//     <form class="converter-form">
//       <input type="number" id="inputValue" placeholder="Enter value" required />

//       <select id="fromUnit">
//         <option value="cm">Centimeter</option>
//         <option value="m">Meter</option>
//         <option value="km">Kilometer</option>
//         <option value="mi">Mile</option>
//         <option value="yd">Yard</option>
//         <option value="ft">Foot</option>
//         <option value="in">Inch</option>
//       </select>

//       <select id="toUnit">
//         <option value="cm">Centimeter</option>
//         <option value="m">Meter</option>
//         <option value="km">Kilometer</option>
//         <option value="mi">Mile</option>
//         <option value="yd">Yard</option>
//         <option value="ft">Foot</option>
//         <option value="in">Inch</option>
//       </select>

//       <input type="text" id="outputValue" placeholder="Result" readonly />
//       <button type="submit">Convert</button>
//     </form>` ,

//     time: `
//     <form class="converter-form">
//       <input type="number" id="inputValue" placeholder="Enter value" required />

//       <select id="fromUnit">
//         <option value="s">Seconds</option>
//         <option value="min">Minutes</option>
//         <option value="hr">Hours</option>
//         <option value="day">Days</option>
//       </select>

//       <select id="toUnit">
//         <option value="s">Seconds</option>
//         <option value="min">Minutes</option>
//         <option value="hr">Hours</option>
//         <option value="day">Days</option>
//       </select>

//       <input type="text" id="outputValue" placeholder="Result" readonly />
//       <button type="submit">Convert</button>
//     </form>`
// };

// /* --------------------------------------------------
//  *  Conversion helpers
//  * --------------------------------------------------*/
// // Temperature conversion map (key = from+to)
// const tempConv = {
//     ck: v => v + 273.15,
//     kc: v => v - 273.15,
//     cf: v => (v * 9 / 5) + 32,
//     fc: v => (v - 32) * 5 / 9,
//     kf: v => (v - 273.15) * 9 / 5 + 32,
//     fk: v => (v - 32) * 5 / 9 + 273.15
// };

// // Length factors relative to metres
// const lengthFactor = {
//     cm: 0.01,
//     m: 1,
//     km: 1000,
//     mi: 1609.34,
//     yd: 0.9144,
//     ft: 0.3048,
//     in: 0.0254
// };
// const convertLength = (v, from, to) => v * lengthFactor[from] / lengthFactor[to];

// // Time factors relative to seconds
// const timeFactor = {
//     s: 1,
//     min: 60,
//     hr: 3600,
//     day: 86400
// };
// const convertTime = (v, from, to) => v * timeFactor[from] / timeFactor[to];

// /* --------------------------------------------------
//  *  UI wiring
//  * --------------------------------------------------*/
// const container = document.querySelector('.input-section');
// const navMap = { temp: 'temperature', leng: 'length', time: 'time' };

// // Render default view (temperature)
// renderForm('temperature');

// // Wire up nav items
// Object.keys(navMap).forEach(id => {
//     document.getElementById(id).addEventListener('click', () => renderForm(navMap[id]));
// });

// function renderForm(type) {
//     container.innerHTML = templates[type];
//     attachSubmitHandler(type);
// }

// function attachSubmitHandler(type) {
//     const form = container.querySelector('form');
//     form.addEventListener('submit', e => {
//         e.preventDefault();

//         const value = parseFloat(form.querySelector('#inputValue').value);
//         const from = form.querySelector('#fromUnit').value;
//         const to = form.querySelector('#toUnit').value;

//         if (isNaN(value)) {
//             form.querySelector('#outputValue').value = 'Invalid input';
//             return;
//         }

//         let result;

//         if (from === to) {
//             result = value;
//         } else if (type === 'temperature') {
//             const fn = tempConv[from + to];
//             result = fn ? fn(value) : NaN;
//         } else if (type === 'length') {
//             result = convertLength(value, from, to);
//         } else if (type === 'time') {
//             result = convertTime(value, from, to);
//         }

//         form.querySelector('#outputValue').value =
//             isFinite(result) ? result.toFixed(2) : 'N/A';
//     });
// }

temp.addEventListener('click', function () {
  console.log("Algazaly");

  const input = document.querySelector('.input-section');
  input.innerHTML = `
    <form id="tempForm">
      <input type="number" id="inputValue" placeholder="Enter Value" required />
      <select id="fromUnit">
        <option value="k">Kelvin</option>
        <option value="c">Celsius</option>
        <option value="f">Fahrenheit</option>
      </select>
      <select id="toUnit">
        <option value="k">Kelvin</option>
        <option value="c">Celsius</option>
        <option value="f">Fahrenheit</option>
      </select>
      <input type="text" id="outputValue" placeholder="Result" readonly />
      <button type="submit">Submit</button>
    </form>
  `;

  const form = document.getElementById('tempForm');
  form.addEventListener('submit', function (e) {
    e.preventDefault();
    const input = parseFloat(document.getElementById('inputValue').value);
    const from = document.getElementById('fromUnit').value;
    const to = document.getElementById('toUnit').value;
    let result;

    if (from === "c" && to === "k") result = input + 273.15;
    else if (from === "k" && to === "c") result = input - 273.15;
    else if (from === "c" && to === "f") result = (input * 9 / 5) + 32;
    else if (from === "f" && to === "c") result = (input - 32) * 5 / 9;
    else if (from === "k" && to === "f") result = (input - 273.15) * 9 / 5 + 32;
    else if (from === "f" && to === "k") result = (input - 32) * 5 / 9 + 273.15;
    else result = input;

    document.getElementById('outputValue').value = result;
  });
});
time.addEventListener('click', function () {
  console.log("Algazaly");

  const input = document.querySelector('.input-section');
  input.innerHTML = `
    <form id="timeForm">
      <input type="number" id="inputValue" placeholder="Enter Value" required />
      <select id="fromUnit">
         <option value="s">Seconds</option>
         <option value="min">Minutes</option>
         <option value="hr">Hours</option>
         <option value="day">Days</option>
      </select>
      <select id="toUnit">
         <option value="s">Seconds</option>
         <option value="min">Minutes</option>
         <option value="hr">Hours</option>
         <option value="day">Days</option>
      </select>
      <input type="text" id="outputValue" placeholder="Result" readonly />
      <button type="submit">Submit</button>
    </form>
  `;

  const form = document.getElementById('timeForm');
  form.addEventListener('submit', function (e) {
    e.preventDefault();
    const input = parseFloat(document.getElementById('inputValue').value);
    const from = document.getElementById('fromUnit').value;
    const to = document.getElementById('toUnit').value;
    let result;

    if (from === "s" && to === "min") result = input / 60;
    else if (from === "min" && to === "s") result = input * 60;
    else if (from === "min" && to === "hr") result = input * 60;
    else if (from === "hr" && to === "min") result = input / 60;
    else if (from === "hr" && to === "day") result = input / 24;
    else if (from === "day" && to === "hr") result = input * 24;
    else if (from === "s" && to === "hr") result = input / 3600;
    else if (from === "hr" && to === "s") result = input * 3600;
    else if (from === "s" && to === "day") result = input / 86400;
    else if (from === "day" && to === "s") result = input * 86400;
    else if (from === "min" && to === "day") result = input / 1440;
    else if (from === "day" && to === "min") result = input * 1440;
    else result = input;

    document.getElementById('outputValue').value = result;
  });
});

leng.addEventListener('click', function () {
  console.log("Algazaly");

  const input = document.querySelector('.input-section');
  input.innerHTML = `
    <form id="lengthForm">
      <input type="number" id="inputValue" placeholder="Enter Value" required />
               <select id="fromUnit">
                <option value="cm">Centimeter</option>
                <option value="m">Meter</option>
                <option value="km">Kilometer</option>
                <option value="mi">Mile</option>
                <option value="ft">Foot</option>
                <option value="in">Inch</option>
              </select>

          <select id="toUnit">
           <option value="cm">Centimeter</option>
           <option value="m">Meter</option>
           <option value="km">Kilometer</option>
           <option value="mi">Mile</option>
           <option value="ft">Foot</option>
          <option value="in">Inch</option>
         </select>
      <input type="text" id="outputValue" placeholder="Result" readonly />
      <button type="submit">Submit</button>
    </form>
  `;

  const form = document.getElementById('lengthForm');
  form.addEventListener('submit', function (e) {
    e.preventDefault();
    const input = parseFloat(document.getElementById('inputValue').value);
    const from = document.getElementById('fromUnit').value;
    const to = document.getElementById('toUnit').value;
    let result;

       if (from === "m" && to === "km") result = input / 1000;
        else if (from === "km" && to === "m") result = input * 1000;
        else if (from === "m" && to === "mi") result = input / 1609.34;
        else if (from === "mi" && to === "m") result = input * 1609.34
        else if (from === "m" && to === "cm") result = input * 100;
        else if (from === "cm" && to === "m") result = input / 100;
        else if (from === "in" && to === "cm") result = input * 2.54;
        else if (from === "cm" && to === "in") result = input / 2.54;
        else if (from === "ft" && to === "m") result = input * 0.3048;
        else if (from === "m" && to === "ft") result = input / 0.3048;
        else result = input;

    document.getElementById('outputValue').value = result;
  });
});