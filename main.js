const gosp = document.querySelector('#gosp');
const gosc = document.querySelector('#gosc');
const dogr = document.querySelectorAll(`[name="dogr"]`);
const form = document.querySelector('form');
const dod = document.querySelectorAll(`[name="dod"]`);
const display = document.querySelector("#display");

form.addEventListener("submit", tak);

function tak(evt)
    {
        evt.preventDefault();
        display.innerHTML += `Mecz ${gosp.value} z ${gosc.value} <br>`;
        for (let i = 0; i < dogr.length; i++)
         {
            if (dogr[i].checked) {
                display.innerHTML += `czy jest dogrywka: ${dogr[i].value} <br>`;

            }
         }
    }

    